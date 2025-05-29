import { NextRequest, NextResponse } from 'next/server';
import { parseQueryForCategories, getToolsByCategories, searchTools, getPopularTools, formatToolsForChat } from '@/lib/chatbot-utils';

// Define the message interface
interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Define the request body interface
interface RequestBody {
  messages: Message[];
}

// Local fallback responses for website-related questions
const websiteResponses: Record<string, string> = {
  'website': 'AI Central Station is a comprehensive resource for exploring AI tools across various categories. You can browse tools by category, read documentation, stay updated with AI news, and learn from our blog posts.',
  'features': 'The main features of AI Central Station include: 1) Explore AI Tools section with filtering by category, 2) Documentation for each tool, 3) AI News feed with latest updates, 4) Blog posts about AI topics, 5) Benchmarks for comparing tools, and 6) This AI assistant to help you navigate.',
  'documentation': 'You can access documentation for AI tools by clicking on any tool in the Explore section. Each tool has detailed documentation explaining its features, pricing, use cases, and technical specifications.',
  'news': 'The AI News section can be accessed from the main navigation menu. It provides regularly updated news from various AI sources, keeping you informed about the latest developments in artificial intelligence.',
  'blog': 'Our blog section is accessible from the main navigation. It contains in-depth articles about AI tools, tutorials, and industry insights to help you better understand and utilize AI technologies.',
  'explore': 'The Explore section lets you browse all AI tools by category. You can filter by type (like chatbots, code tools, or design tools), search for specific tools, and sort by various criteria.',
  'useful': 'AI Central Station helps you discover the right AI tools for your specific needs, compare options, learn about AI technology through our documentation and blog, and stay updated with the latest industry news - all in one place.',
  'categories': 'We cover a wide range of AI tool categories including: Productivity tools, Coding assistants, Design tools, Writing tools, Chatbots, Search engines, Music generation, Video creation, Finance tools, and many more!',
  'help': 'I can help you navigate the website, find specific AI tools for your needs, explain AI concepts, provide information about tool categories, and answer questions about AI technologies.',
};

export async function POST(request: NextRequest) {
  try {
    // Get messages from the request body
    const body: RequestBody = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid request: messages array is required' },
        { status: 400 }
      );
    }

    // Get the API key from environment variables
    const apiKey = process.env.GROQ_API_KEY;
    const useGroqApi = apiKey && apiKey !== '';

    // Process last user message to handle query
    if (messages.length > 0) {
      const lastUserMessage = messages[messages.length - 1].content.toLowerCase();
      
      // Check if this is a website-related query first
      let websiteResponse = '';
      Object.entries(websiteResponses).forEach(([keyword, answer]) => {
        if (lastUserMessage.includes(keyword)) {
          websiteResponse = answer;
        }
      });
      
      // If we have a direct website response, use it
      if (websiteResponse) {
        return NextResponse.json({ response: websiteResponse });
      }
      
      // Check for tool-related queries
      if (
        lastUserMessage.includes('tool') || 
        lastUserMessage.includes('recommend') || 
        lastUserMessage.includes('suggest') ||
        lastUserMessage.includes('find me') ||
        lastUserMessage.includes('looking for') ||
        lastUserMessage.includes('help me with')
      ) {
        // Parse categories from the user message
        const relevantCategories = parseQueryForCategories(lastUserMessage);
        
        // Get tools based on the relevant categories
        if (relevantCategories.length > 0) {
          const tools = getToolsByCategories(relevantCategories);
          if (tools.length > 0) {
            const toolsInfo = formatToolsForChat(tools);
            return NextResponse.json({ 
              response: `Here are some AI tools that might help:\n\n${toolsInfo}\n\nYou can explore more tools in our explore section.`
            });
          }
        } else {
          // If no specific categories found, try searching with key terms
          const searchTermsRegex = /(?:tool|recommend|suggest|help|find|looking).*(?:for|with)\s+([a-zA-Z\s]+)/i;
          const match = lastUserMessage.match(searchTermsRegex);
          
          if (match && match[1]) {
            const searchTerm = match[1].trim();
            const tools = searchTools(searchTerm);
            
            if (tools.length > 0) {
              const toolsInfo = formatToolsForChat(tools);
              return NextResponse.json({
                response: `Here are some AI tools related to "${searchTerm}":\n\n${toolsInfo}\n\nYou can explore more tools in our explore section.`
              });
            }
          } else {
            // If still no tools found, suggest popular tools
            const popularTools = getPopularTools(3);
            const toolsInfo = formatToolsForChat(popularTools);
            return NextResponse.json({
              response: `Here are some of our most popular AI tools:\n\n${toolsInfo}\n\nYou can explore more tools in our explore section.`
            });
          }
        }
      }
    }

    // If we get here and don't have an API key, provide a fallback response
    if (!useGroqApi) {
      return NextResponse.json({
        response: "I'm an AI assistant for AI Central Station. I can help you find AI tools, learn about AI concepts, and navigate our website. For specific questions about tools, try asking about categories like 'writing tools', 'code assistants', or 'image generators'. What would you like to explore today?"
      });
    }

    // Prepare the system message about AI tools and the website
    const systemMessage: Message = {
      role: 'system',
      content: `You are an AI Tools Assistant for the AI Central Station website. Your purpose is to help users find the right AI tools for their specific needs and answer questions about this website and AI in general.

About the website:
- AI Central Station is a platform that catalogs and provides information about various AI tools.
- The website has sections for exploring AI tools, documentation, benchmarks, AI news, a blog, and an About page.
- Users can explore tools by categories including: productivity, coding, design, writing, chatbots, and many more.

When helping users find tools:
1. Ask clarifying questions about their use case if needed
2. Suggest specific AI tools from our catalog that match their needs
3. Explain why each suggestion is relevant to their request
4. Direct them to the appropriate section of the website (usually /explore or /documentation)

When answering questions about AI:
- Provide clear, accurate information about AI concepts, capabilities, and limitations
- Cite reputable sources when appropriate
- Avoid making exaggerated claims about AI capabilities

If users ask about the website features, explain that:
- The Explore section allows users to browse all AI tools by category and search for specific functionalities
- The Documentation section provides detailed information about each tool
- The AI News section keeps users updated on the latest AI developments
- The Blog section contains educational articles about AI technologies
- The Benchmarks section allows users to compare different AI tools

Keep responses helpful, conversational, and relatively concise. If you don't know something specific about the website, acknowledge that and offer to help them navigate to find the information.`
    };

    // Combine the system message with user messages
    const combinedMessages = [systemMessage, ...messages];

    try {
      // Make a request to the Groq API
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'llama3-8b-8192', // Use Llama 3 model
          messages: combinedMessages,
          temperature: 0.7,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      // Parse the response
      const responseData = await response.json();
      const assistantReply = responseData.choices[0].message.content;

      // Return the assistant's reply
      return NextResponse.json({ response: assistantReply });
      
    } catch (apiError) {
      console.error('API error:', apiError);
      
      // Fallback to local response system
      if (messages.length > 0) {
        // Generic fallback response
        return NextResponse.json({
          response: "I'm here to help you find AI tools and learn about our website. What would you like to know about AI Central Station or AI tools in general?"
        });
      }
    }
  } catch (error) {
    console.error('Error processing chat request:', error);
    return NextResponse.json({
      response: "I'm here to help you find AI tools and learn about our website. What would you like to know about AI Central Station or AI tools in general?"
    });
  }
}