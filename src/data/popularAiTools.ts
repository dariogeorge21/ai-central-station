import { AITool, ToolCategory } from './aiTools';

// Additional popular AI tools to ensure comprehensive category coverage
export const popularAiTools: AITool[] = [
  // AI Models
  {
    id: 'anthropic-api',
    name: 'Anthropic API',
    description: 'Access to Claude family of AI assistants for various applications',
    logoUrl: 'https://image.cnbcfm.com/api/v1/image/107320283-1697736965856-gettyimages-1734163998-omarques_19102023_TECHPOL-1.jpeg?v=1709514408&w=1920&h=1080',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.2dEdqfCaF5heki0AHxVGmQAAAA?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://cdn.prod.website-files.com/63994dae1033718bee6949ce/639ccec738e93f0f4cd39bc8_639bca34ba62963dd710cc16_Character%2520AI.jpeg',
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
    logoUrl: 'https://i.redd.it/i-wonder-whats-the-next-logo-going-be-like-v0-lwms82t4djtc1.jpg?width=400&format=pjpg&auto=webp&s=0bb471d88ddc70800957f9021e4e5be10cff5202',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.dG_P3_ln-lEzthCSlpeVyAHaD5?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.bjQh1V2N7MgeQd-TdQYFyQHaEK?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.ib25Y8C7MuLgV57KREii2AHaFj?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5Bq1Nq7Y9FF9lUtqlr1P_Hga0dMfcM5wzA&s',
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
    logoUrl: 'https://d1.awsstatic.com/codewhisper/icon_cw_serviceicon.65af1ed185a8674249a5aa38894f469e974714d3.png',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.soadmhG6q4XGPrhfpG4QkgHaHa?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.2CWe49gfHNNElpE1Ve0wQgHaE8?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://i.pcmag.com/imagery/roundup-products/05TDW7QlvDWWKZTeOJdleeq.fit_lim.size_1050x591.v1729187957.jpg',
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
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2x2uHIpTqlqNR47njOeXadt-KvYt8PxH9Kg&s',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.dSBwbwU4UiHGbu18KCUCfQHaDX?rs=1&pid=ImgDetMain',
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
    name: 'Otter.ai Transcription',
    description: 'AI meeting assistant for automatic transcription and analysis',
    logoUrl: 'https://th.bing.com/th/id/OIP.Qnnk1NvWAXc-TYAfq3L0uwHaFJ?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.IgYSEYyUecipuOPc2cTKWwHaHa?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.SmavMl7sA_6yRFWYmBjHKAAAAA?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.xCOd_XRLWoSDd9YepBt-LgAAAA?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://play-lh.googleusercontent.com/N_wXCAfQ8NH-rVoi66-RquDtb0yPstFMzUzDYil-tzGtvdHtzToDh2dyUUxcGZ70YA',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.xg84LosAYmEDPMvdcQiMJQHaHa?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://pixelz.cc/wp-content/uploads/2023/12/open-ai-chat-gpt-logo-uhd-4k-wallpaper.jpg',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.eGEIAAaphaa3y2DdOWCKIQHaGk?rs=1&pid=ImgDetMain',
    categories: ['browser-extensions', 'productivity'],
    mainUse: 'AI-powered fact-checking while browsing',
    pricing: 'Free beta',
    otherUses: 'Credibility assessment, source verification',
    userExperience: 'Simple visual indicators for content reliability',
    websiteUrl: 'https://truestory.ai/',
    rating: 4
  }
]; 