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
    if (!apiKey) {
      console.error('GROQ_API_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'Configuration error: API key not available' },
        { status: 500 }
      );
    }

    // Check if user is asking about tools
    let additionalContext = '';
    
    if (messages.length > 0) {
      const lastUserMessage = messages[messages.length - 1].content.toLowerCase();
      
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
            additionalContext = `\n\nHere are some AI tools that might help:\n\n${formatToolsForChat(tools)}\n\nYou can explore more tools in our /explore section.`;
          }
        } else {
          // If no specific categories found, try searching with key terms
          const searchTermsRegex = /(?:tool|recommend|suggest|help|find|looking).*(?:for|with)\s+([a-zA-Z\s]+)/i;
          const match = lastUserMessage.match(searchTermsRegex);
          
          if (match && match[1]) {
            const searchTerm = match[1].trim();
            const tools = searchTools(searchTerm);
            
            if (tools.length > 0) {
              additionalContext = `\n\nHere are some AI tools related to "${searchTerm}":\n\n${formatToolsForChat(tools)}\n\nYou can explore more tools in our /explore section.`;
            }
          } else {
            // If still no tools found, suggest popular tools
            const popularTools = getPopularTools(3);
            additionalContext = `\n\nHere are some of our most popular AI tools:\n\n${formatToolsForChat(popularTools)}\n\nYou can explore more tools in our /explore section.`;
          }
        }
      }
    }

    // Prepare the system message about AI tools and the website
    const systemMessage: Message = {
      role: 'system',
      content: `You are an AI Tools Assistant for the AI Toolkit Hub website. Your purpose is to help users find the right AI tools for their specific needs and answer questions about this website and AI in general.

About the website:
- AI Toolkit Hub is a platform that catalogs and provides information about various AI tools.
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

Keep responses helpful, conversational, and relatively concise. If you don't know something specific about the website, acknowledge that and offer to help them navigate to find the information.${additionalContext}`
    };

    // Combine the system message with user messages
    const combinedMessages = [systemMessage, ...messages];

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
      const errorData = await response.json();
      console.error('Groq API error:', errorData);
      return NextResponse.json(
        { error: 'Error from Groq API', details: errorData },
        { status: response.status }
      );
    }

    // Parse the response
    const responseData = await response.json();
    const assistantReply = responseData.choices[0].message.content;

    // Return the assistant's reply
    return NextResponse.json({ response: assistantReply });
  } catch (error) {
    console.error('Error processing chat request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 