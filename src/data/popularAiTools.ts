import { AITool, ToolCategory } from './aiTools';

// Additional popular AI tools to ensure comprehensive category coverage
export const popularAiTools: AITool[] = [
  // AI Models
  {
    id: 'anthropic-api',
    name: 'Anthropic API',
    description: 'Access to Claude family of AI assistants for various applications',
    logoUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=400&auto=format',
    categories: ['models', 'developer'],
    mainUse: 'Integrate Claude AI into applications',
    pricing: 'Pay-per-token with volume discounts',
    otherUses: 'Content moderation, customer support, research',
    userExperience: 'Well-documented API with safety features',
    websiteUrl: 'https://www.anthropic.com/api',
    rating: 5
  },
  {
    id: 'stability-ai',
    name: 'Stability AI',
    description: 'Creator of Stable Diffusion, offering various AI models for image generation',
    logoUrl: 'https://images.unsplash.com/photo-1682687219570-4c596363fd96?q=80&w=400&auto=format',
    categories: ['models', 'design'],
    mainUse: 'Image generation and manipulation',
    pricing: 'Free and premium options',
    otherUses: 'Design work, creative projects, prototyping',
    userExperience: 'Open source with active community',
    websiteUrl: 'https://stability.ai/',
    rating: 4
  },

  // Chatbots
  {
    id: 'character-ai',
    name: 'Character.AI',
    description: 'Platform for creating and chatting with AI characters with unique personalities',
    logoUrl: 'https://images.unsplash.com/photo-1677442135146-767f343952e5?q=80&w=400&auto=format',
    categories: ['chatbots'],
    mainUse: 'Role-playing conversations with AI characters',
    pricing: 'Free with premium subscription options',
    otherUses: 'Entertainment, writing assistance, language practice',
    userExperience: 'Engaging conversational experience with diverse characters',
    websiteUrl: 'https://character.ai/',
    rating: 4
  },
  {
    id: 'replika',
    name: 'Replika',
    description: 'Personal AI companion that learns about you through conversation',
    logoUrl: 'https://images.unsplash.com/photo-1677442135146-767f343952e5?q=80&w=400&auto=format',
    categories: ['chatbots'],
    mainUse: 'AI companionship and emotional support',
    pricing: 'Free with premium features',
    otherUses: 'Journaling, self-reflection, conversational practice',
    userExperience: 'Personal and empathetic conversational experience',
    websiteUrl: 'https://replika.ai/',
    rating: 4
  },

  // Search Engines
  {
    id: 'huggingchat',
    name: 'HuggingChat',
    description: 'Free, open-source AI chat interface from Hugging Face',
    logoUrl: 'https://images.unsplash.com/photo-1677442135146-767f343952e5?q=80&w=400&auto=format',
    categories: ['chatbots', 'search-engines'],
    mainUse: 'Open source alternative to commercial AI assistants',
    pricing: 'Free',
    otherUses: 'Research, question answering, text generation',
    userExperience: 'Simple interface with multiple model options',
    websiteUrl: 'https://huggingface.co/chat/',
    rating: 4
  },
  {
    id: 'you-ai',
    name: 'You.com',
    description: 'AI search engine with chat capabilities and app integration',
    logoUrl: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=400&auto=format',
    categories: ['search-engines', 'chatbots'],
    mainUse: 'AI-enhanced web search with app integrations',
    pricing: 'Free with premium options',
    otherUses: 'Research, content creation, programming help',
    userExperience: 'Clean interface with multiple search modes',
    websiteUrl: 'https://you.com/',
    rating: 4
  },

  // Writing Assistants
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'AI-powered writing assistant for grammar, style, and tone',
    logoUrl: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=400&auto=format',
    categories: ['writing', 'productivity'],
    mainUse: 'Grammar and writing improvement',
    pricing: 'Free with premium plans starting at $12/month',
    otherUses: 'Content editing, style adjustment, plagiarism checking',
    userExperience: 'Browser extension and desktop app',
    websiteUrl: 'https://www.grammarly.com/',
    rating: 5
  },
  {
    id: 'jasper',
    name: 'Jasper',
    description: 'AI content platform for marketing teams and content creators',
    logoUrl: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=400&auto=format',
    categories: ['writing', 'content-creation'],
    mainUse: 'AI-powered content creation',
    pricing: 'Plans starting at $49/month',
    otherUses: 'Marketing copy, blog posts, social media content',
    userExperience: 'User-friendly interface with templates',
    websiteUrl: 'https://www.jasper.ai/',
    rating: 4
  },

  // Developer Tools
  {
    id: 'codewhisperer',
    name: 'Amazon CodeWhisperer',
    description: 'AI coding assistant from AWS for multiple programming languages',
    logoUrl: 'https://images.unsplash.com/photo-1618477462146-050d2064cd43?q=80&w=400&auto=format',
    categories: ['code', 'developer'],
    mainUse: 'AI code suggestions and generation',
    pricing: 'Free for individual developers, premium for business',
    otherUses: 'Code completion, security scanning, learning',
    userExperience: 'IDE integration with multiple editors',
    websiteUrl: 'https://aws.amazon.com/codewhisperer/',
    rating: 4
  },
  {
    id: 'devin',
    name: 'Devin',
    description: 'Autonomous AI software engineer that can understand, plan, and execute coding tasks',
    logoUrl: 'https://images.unsplash.com/photo-1618477462146-050d2064cd43?q=80&w=400&auto=format',
    categories: ['code', 'developer'],
    mainUse: 'Autonomous software development',
    pricing: 'Waitlist/Limited access',
    otherUses: 'Debugging, code review, project planning',
    userExperience: 'End-to-end project handling and development',
    websiteUrl: 'https://www.cognition.dev/',
    rating: 5
  },

  // Design Tools
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'AI image generation through natural language prompts',
    logoUrl: 'https://images.unsplash.com/photo-1682687219570-4c596363fd96?q=80&w=400&auto=format',
    categories: ['design', 'content-creation'],
    mainUse: 'Creating stunning AI-generated artwork',
    pricing: 'Plans starting at $10/month',
    otherUses: 'Concept art, illustrations, design inspiration',
    userExperience: 'Discord-based interface with community',
    websiteUrl: 'https://www.midjourney.com/',
    rating: 5
  },
  {
    id: 'dalle',
    name: 'DALL-E',
    description: 'OpenAI\'s image generation model for creating visual content from text descriptions',
    logoUrl: 'https://images.unsplash.com/photo-1682687219570-4c596363fd96?q=80&w=400&auto=format',
    categories: ['design', 'content-creation'],
    mainUse: 'Creating images from text descriptions',
    pricing: 'Credit-based system with free tier',
    otherUses: 'Digital art, marketing materials, concept visualization',
    userExperience: 'Simple interface focused on prompts',
    websiteUrl: 'https://openai.com/dall-e-3',
    rating: 5
  },

  // Productivity Tools
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'AI writing assistant integrated into Notion workspace',
    logoUrl: 'https://images.unsplash.com/photo-1611784728558-6a7645e72a03?q=80&w=400&auto=format',
    categories: ['productivity', 'writing'],
    mainUse: 'Enhanced writing and content organization in Notion',
    pricing: 'Add-on to Notion, $10/month',
    otherUses: 'Summarization, brainstorming, editing',
    userExperience: 'Seamless integration with Notion workspace',
    websiteUrl: 'https://www.notion.so/product/ai',
    rating: 4
  },
  {
    id: 'mem-ai',
    name: 'Mem.ai',
    description: 'AI-powered workspace that organizes information automatically',
    logoUrl: 'https://images.unsplash.com/photo-1611784728558-6a7645e72a03?q=80&w=400&auto=format',
    categories: ['productivity'],
    mainUse: 'AI-powered knowledge management',
    pricing: 'Free tier with Pro plan at $10/month',
    otherUses: 'Note-taking, project management, team collaboration',
    userExperience: 'Intelligent organization with minimal setup',
    websiteUrl: 'https://mem.ai/',
    rating: 4
  },

  // Meeting Tools
  {
    id: 'otter-ai',
    name: 'Otter.ai',
    description: 'AI meeting assistant for automatic transcription and analysis',
    logoUrl: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=400&auto=format',
    categories: ['meeting', 'productivity'],
    mainUse: 'Automatic meeting transcription',
    pricing: 'Free tier with premium plans starting at $8.33/month',
    otherUses: 'Meeting insights, collaboration, automated notes',
    userExperience: 'Real-time transcription with speaker identification',
    websiteUrl: 'https://otter.ai/',
    rating: 4
  },
  {
    id: 'fathom',
    name: 'Fathom',
    description: 'AI meeting assistant that records, transcribes, and summarizes meetings',
    logoUrl: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=400&auto=format',
    categories: ['meeting', 'productivity'],
    mainUse: 'Automated meeting notes and summaries',
    pricing: 'Free beta (waitlist)',
    otherUses: 'Meeting highlights, action items, knowledge base',
    userExperience: 'Clean user interface with video integration',
    websiteUrl: 'https://fathom.video/',
    rating: 4
  },

  // Research Tools
  {
    id: 'connected-papers',
    name: 'Connected Papers',
    description: 'Visual tool for exploring academic papers and their connections',
    logoUrl: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=400&auto=format',
    categories: ['academia', 'search-engines'],
    mainUse: 'Visualizing connections between research papers',
    pricing: 'Free with premium features',
    otherUses: 'Literature review, research planning, discovering related work',
    userExperience: 'Visual graph-based interface',
    websiteUrl: 'https://www.connectedpapers.com/',
    rating: 4
  },
  {
    id: 'scite',
    name: 'Scite.ai',
    description: 'AI-powered research assistant that helps verify scientific claims',
    logoUrl: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=400&auto=format',
    categories: ['academia', 'search-engines'],
    mainUse: 'Citation analysis and verification',
    pricing: 'Free tier with premium options',
    otherUses: 'Research verification, literature analysis, citation context',
    userExperience: 'Citation classification with supporting/contrasting context',
    websiteUrl: 'https://scite.ai/',
    rating: 4
  },

  // Email Tools
  {
    id: 'superhuman',
    name: 'Superhuman',
    description: 'AI-powered email client designed for speed and productivity',
    logoUrl: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=400&auto=format',
    categories: ['email', 'productivity'],
    mainUse: 'Fast and efficient email management',
    pricing: '$30/month',
    otherUses: 'Email scheduling, follow-ups, keyboard shortcuts',
    userExperience: 'Minimalist interface with powerful keyboard shortcuts',
    websiteUrl: 'https://superhuman.com/',
    rating: 4
  },
  {
    id: 'emailtree-ai',
    name: 'EmailTree AI',
    description: 'AI-powered email automation for customer service teams',
    logoUrl: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=400&auto=format',
    categories: ['email', 'customer-support'],
    mainUse: 'Email automation for customer service',
    pricing: 'Custom pricing for businesses',
    otherUses: 'Email classification, response generation, workflow automation',
    userExperience: 'Enterprise-focused with integration capabilities',
    websiteUrl: 'https://emailtree.ai/',
    rating: 4
  },

  // Browser Extensions
  {
    id: 'chat-gpt-sidebar',
    name: 'ChatGPT Sidebar',
    description: 'Browser extension that adds ChatGPT to every website you visit',
    logoUrl: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=400&auto=format',
    categories: ['browser-extensions', 'productivity'],
    mainUse: 'Access AI assistance on any website',
    pricing: 'Free with premium features',
    otherUses: 'Content summarization, translation, research',
    userExperience: 'Convenient sidebar interface for any website',
    websiteUrl: 'https://chatgptsidebar.com/',
    rating: 4
  },
  {
    id: 'truestory',
    name: 'TrueStory',
    description: 'AI fact-checking browser extension for identifying misinformation',
    logoUrl: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=400&auto=format',
    categories: ['browser-extensions', 'productivity'],
    mainUse: 'AI-powered fact-checking while browsing',
    pricing: 'Free beta',
    otherUses: 'Credibility assessment, source verification',
    userExperience: 'Simple visual indicators for content reliability',
    websiteUrl: 'https://truestory.ai/',
    rating: 4
  }
]; 