import { AITool } from '../types';

  // Chatbots Data
  
  export const chatbots: AITool[] = [{
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Advanced conversational AI for natural language processing and generation',
    logoUrl: 'https://img.freepik.com/premium-vector/chatbot-icon-concept-chat-bot-chatterbot-robot-virtual-assistance-website_123447-1615.jpg',
    categories: ['chatbots'],
    mainUse: 'Conversational assistant for various tasks',
    pricing: 'Free tier available, paid plans start at $20/month',
    otherUses: 'Writing assistance, coding help, creative writing, translations',
    userExperience: 'User-friendly interface with quick response times',
    websiteUrl: 'https://chat.openai.com/',
    rating: 5
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Anthropic\'s AI assistant known for helpfulness, harmlessness, and honesty',
    logoUrl: 'https://th.bing.com/th/id/OIP.bWV-T7W4qNydytSAAH7hfgHaFj?rs=1&pid=ImgDetMain',
    categories: ['chatbots', 'models', 'writing'],
    mainUse: 'Conversational AI assistant for various tasks',
    pricing: 'Free tier with Claude Pro at $20/month',
    otherUses: 'Content creation, research, coding assistance, data analysis',
    userExperience: 'Natural conversational interface with reduced hallucinations',
    websiteUrl: 'https://claude.ai/',
    rating: 5
  },
  {
    id: 'gemini',
    name: 'Gemini',
    description: 'Google\'s multimodal AI for text, image, and video understanding (formerly Bard)',
    logoUrl: 'https://th.bing.com/th/id/OIP.mwE4KAyLI-1YnLhmMszlWAHaEo?rs=1&pid=ImgDetMain',
    categories: ['chatbots', 'models'],
    mainUse: 'Multimodal understanding and generation',
    pricing: 'Free tier available, Gemini Advanced at $19.99/month',
    otherUses: 'Image analysis, code generation, research assistance',
    userExperience: 'Integrated with Google ecosystem',
    websiteUrl: 'https://gemini.google.com/',
    rating: 4
  },

  // Search Engines
  {
    id: 'perplexity',
    name: 'Perplexity',
    description: 'AI-powered search engine with conversational interface and cited sources',
    logoUrl: 'https://styles.redditmedia.com/t5_7qnoi9/styles/communityIcon_0zx2forco34c1.png',
    categories: ['search-engines', 'chatbots'],
    mainUse: 'AI-powered research and information discovery',
    pricing: 'Free tier with Pro plan at $20/month',
    otherUses: 'Academic research, fact checking, information gathering',
    userExperience: 'Conversational interface with cited sources',
    websiteUrl: 'https://www.perplexity.ai/',
    rating: 5
  },
  {
    id: 'phind',
    name: 'Phind',
    description: 'An intelligent search engine and assistant for programmers',
    logoUrl: 'https://bookface-images.s3.amazonaws.com/small_logos/8151bfb74b7fe2072291d1efc343fcf50f977bec.png',
    categories: ['chatbots', 'search-engines', 'code'],
    mainUse: 'Programming help and technical information retrieval',
    pricing: 'Free, with Pro plan at $15/month',
    otherUses: 'Code generation, debugging, technical documentation',
    userExperience: 'Clean interface with code-focused answers and syntax highlighting',
    websiteUrl: 'https://www.phind.com/',
    rating: 5
  },
  {
    id: 'microsoft-copilot',
    name: 'Microsoft Copilot',
    description: 'AI assistant from Microsoft integrated with Bing search',
    logoUrl: 'https://cdn.neowin.com/news/images/uploaded/2023/11/1698851956_microsoft-copilot_story.jpg',
    categories: ['chatbots', 'search-engines'],
    mainUse: 'Web search with conversational AI',
    pricing: 'Free with Microsoft account',
    otherUses: 'Content creation, research, image generation',
    userExperience: 'Integrated with Microsoft ecosystem',
    websiteUrl: 'https://copilot.microsoft.com/',
    rating: 4
  },
  {
    id: 'google-bard',
    name: 'Google Bard',
    description: 'AI assistant from Google for conversational interactions',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Google_Bard_logo.svg',
    categories: ['chatbots', 'search-engines'],
    mainUse: 'Conversational AI for various tasks',
    pricing: 'Free with Google account',
    otherUses: 'Content creation, research, image generation',
    userExperience: 'Integrated with Google ecosystem',
    websiteUrl: 'https://bard.google.com/',
    rating: 4

  },
  {
    id : "gemini",
    name: "Gemini",
    description: "Google's multimodal AI for text, image, and video understanding (formerly Bard)",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s",
    categories: ["chatbots", "models"],
    mainUse: "Multimodal understanding and generation",
    pricing: "Free tier available, Gemini Advanced at $19.99/month",
    otherUses: "Image analysis, code generation, research assistance",
    userExperience: "Integrated with Google ecosystem",
    websiteUrl: "https://gemini.google.com/",
    rating: 4
  },
  {
    id:"grok",
    name: "Grok",
    description: "AI assistant from Grok for conversational interactions",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOv3K6RevHQCscoWPa2BvxKTq-9ygcQ4mhRA&s",
    categories: ["chatbots", "models"],
    mainUse: "Conversational AI for various tasks",
    pricing: "Free tier available, Grok Pro at $19.99/month",
    otherUses: "Content creation, research, image generation",
    userExperience: "Integrated with Grok ecosystem",
    websiteUrl: "https://grok.com/",
    rating: 4
  },
  {
    id: "muse",
    name: "Muse",
    description: "AI assistant from Muse for conversational interactions",
    logoUrl: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/79dbb02a-9ca5-42f6-a868-13de7bde91fe.png",
    categories: ["chatbots", "models"],
    mainUse: "Conversational AI for various tasks",
    pricing: "Free tier available, Muse Pro at $19.99/month",
    otherUses: "Content creation, research, image generation",
    userExperience: "Integrated with Muse ecosystem",
    websiteUrl: "https://muse.com/",
    rating: 4
  }


];