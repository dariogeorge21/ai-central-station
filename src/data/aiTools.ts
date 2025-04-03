// AI Tool Categories
export type ToolCategory =
  | 'models'
  | 'chatbots'
  | 'search-engines'
  | 'local-search'
  | 'writing'
  | 'chatgpt-extensions'
  | 'productivity'
  | 'meeting'
  | 'academia'
  | 'text-generators'
  | 'developer'
  | 'code'
  | 'website-builders'
  | 'voice-cloning'
  | 'virtual-assistants'
  | 'translation'
  | 'social-media'
  | 'sales'
  | 'recruitment'
  | 'email'
  | 'customer-support'
  | 'content-creation'
  | 'browser-extensions'
  | 'design';

export interface AITool {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  categories: ToolCategory[];
  mainUse: string;
  pricing: string;
  otherUses?: string;
  userExperience?: string;
  websiteUrl: string;
  rating?: number;
}

export const categoryLabels: Record<ToolCategory, string> = {
  'models': 'AI Models',
  'chatbots': 'Chatbots',
  'search-engines': 'Search Engines',
  'local-search': 'Local Search',
  'writing': 'Writing Assistants',
  'chatgpt-extensions': 'ChatGPT Extensions',
  'productivity': 'Productivity',
  'meeting': 'Meeting Assistants',
  'academia': 'Academia',
  'text-generators': 'Text Generators',
  'developer': 'Developer Tools',
  'code': 'Code Tools',
  'website-builders': 'Website Builders',
  'voice-cloning': 'Voice Cloning',
  'virtual-assistants': 'Virtual Assistants',
  'translation': 'Translation',
  'social-media': 'Social Media',
  'sales': 'Sales Tools',
  'recruitment': 'Recruitment',
  'email': 'Email Tools',
  'customer-support': 'Customer Support',
  'content-creation': 'Content Creation',
  'browser-extensions': 'Browser Extensions',
  'design': 'Design Tools'
};

// AI Tools Data
export const aiTools: AITool[] = [
  // AI Models
  {
    id: 'openai-api',
    name: 'OpenAI API',
    description: 'Access to GPT-3, GPT-4 models, and Codex for various AI applications',
    logoUrl: 'https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?q=80&w=400&auto=format',
    categories: ['models'],
    mainUse: 'Integrate AI capabilities into applications with state-of-the-art language models',
    pricing: 'Pay-per-use pricing based on tokens and model used',
    otherUses: 'Text generation, summarization, translation, code generation',
    userExperience: 'Developer-friendly API with comprehensive documentation',
    websiteUrl: 'https://openai.com/api/',
    rating: 5
  },
  {
    id: 'gopher',
    name: 'Gopher',
    description: 'A 280 billion parameter language model by DeepMind',
    logoUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format',
    categories: ['models'],
    mainUse: 'Advanced language understanding and generation for research',
    pricing: 'Not publicly available, research access only',
    userExperience: 'Designed for AI researchers and enterprise applications',
    websiteUrl: 'https://deepmind.com/'
  },
  {
    id: 'opt',
    name: 'OPT',
    description: 'Open Pretrained Transformers by Facebook, democratizing access to large language models',
    logoUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=400&auto=format',
    categories: ['models'],
    mainUse: 'Research and development of language AI applications',
    pricing: 'Free and open source',
    otherUses: 'Text generation, research on language models',
    userExperience: 'Open source model with different parameter sizes available',
    websiteUrl: 'https://huggingface.co/facebook/opt-350m'
  },
  {
    id: 'bloom',
    name: 'Bloom',
    description: 'A GPT-3 like model by Hugging Face, trained on 46 languages and 13 programming languages',
    logoUrl: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=400&auto=format',
    categories: ['models'],
    mainUse: 'Multilingual language processing and generation',
    pricing: 'Free and open source',
    otherUses: 'Cross-lingual applications, code generation',
    userExperience: 'Accessible through Hugging Face with multiple integration options',
    websiteUrl: 'https://huggingface.co/bigscience/bloom'
  },
  {
    id: 'llama',
    name: 'LLaMA',
    description: 'A foundational, 65-billion-parameter large language model by Meta',
    logoUrl: 'https://images.unsplash.com/photo-1682687219570-4c596363fd96?q=80&w=400&auto=format',
    categories: ['models'],
    mainUse: 'Research on large language models',
    pricing: 'Free for research with application process',
    otherUses: 'Text generation, dialog systems, content creation',
    userExperience: 'Requires technical knowledge to implement and run',
    websiteUrl: 'https://ai.meta.com/llama/'
  },
  {
    id: 'llama-2',
    name: 'Llama 2',
    description: 'The next generation of Meta\'s open source large language model',
    logoUrl: 'https://images.unsplash.com/photo-1675456503697-a577e5ed296b?q=80&w=400&auto=format',
    categories: ['models'],
    mainUse: 'Building advanced AI applications with improved capabilities',
    pricing: 'Free for research and commercial use',
    otherUses: 'Chatbots, content generation, text analysis',
    userExperience: 'Improved performance and safety compared to original Llama',
    websiteUrl: 'https://ai.meta.com/llama/'
  },
  {
    id: 'claude-2',
    name: 'Claude 2',
    description: 'An AI assistant from Anthropic designed to be helpful, harmless, and honest',
    logoUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=400&auto=format',
    categories: ['models', 'chatbots'],
    mainUse: 'Safe and steerable AI assistant for various tasks',
    pricing: 'API access with pay-per-use model',
    otherUses: 'Content creation, summarization, coding assistance',
    userExperience: 'Clean interface with focus on safety and reduced hallucinations',
    websiteUrl: 'https://www.anthropic.com/claude'
  },
  {
    id: 'vicuna-13b',
    name: 'Vicuna-13B',
    description: 'An open-source chatbot trained by fine-tuning LLaMA',
    logoUrl: 'https://images.unsplash.com/photo-1694163773774-3ca53b644d06?q=80&w=400&auto=format',
    categories: ['models', 'chatbots'],
    mainUse: 'Research and development of conversational AI',
    pricing: 'Free and open source',
    otherUses: 'Text generation, dialog systems',
    userExperience: 'Requires technical setup but provides good performance for its size',
    websiteUrl: 'https://lmsys.org/blog/2023-03-30-vicuna/'
  },
  {
    id: 'stable-beluga',
    name: 'Stable Beluga',
    description: 'A finetuned LLaMA 65B model optimized for instruction following',
    logoUrl: 'https://images.unsplash.com/photo-1584824388197-4bc24788801d?q=80&w=400&auto=format',
    categories: ['models'],
    mainUse: 'Research and development of instruction-following AI',
    pricing: 'Free for research use',
    otherUses: 'Conversational AI, content generation',
    userExperience: 'Requires significant computational resources to run',
    websiteUrl: 'https://huggingface.co/stabilityai/StableBeluga-65B'
  },
  {
    id: 'stable-beluga-2',
    name: 'Stable Beluga 2',
    description: 'A finetuned LLaMA2 70B model with improved capabilities',
    logoUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400&auto=format',
    categories: ['models'],
    mainUse: 'Advanced instruction-following and conversational AI',
    pricing: 'Free for research use',
    otherUses: 'Text generation, dialog systems, creative writing',
    userExperience: 'Superior performance but requires significant computational resources',
    websiteUrl: 'https://huggingface.co/stabilityai/StableBeluga2'
  },

  // Chatbots
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'A conversational language model by OpenAI',
    logoUrl: 'https://images.unsplash.com/photo-1677442135146-767f343952e5?q=80&w=400&auto=format',
    categories: ['chatbots'],
    mainUse: 'Conversational assistant for various tasks',
    pricing: 'Free tier available, ChatGPT Plus at $20/month',
    otherUses: 'Content creation, coding help, information retrieval',
    userExperience: 'User-friendly interface with quick responses',
    websiteUrl: 'https://chat.openai.com/'
  },
  {
    id: 'bing-chat',
    name: 'Bing Chat',
    description: 'A conversational AI language model powered by Microsoft Bing',
    logoUrl: 'https://images.unsplash.com/photo-1633419798863-8e929c545f46?q=80&w=400&auto=format',
    categories: ['chatbots', 'search-engines'],
    mainUse: 'Web-connected chatbot for search and conversation',
    pricing: 'Free with Microsoft account',
    otherUses: 'Search, content creation, real-time information',
    userExperience: 'Integrated with Bing search for up-to-date information',
    websiteUrl: 'https://www.bing.com/chat'
  },
  {
    id: 'bard',
    name: 'Bard',
    description: 'An experimental AI chatbot by Google',
    logoUrl: 'https://images.unsplash.com/photo-1675956473142-347e271cc00d?q=80&w=400&auto=format',
    categories: ['chatbots'],
    mainUse: 'Conversational AI assistant with web search capabilities',
    pricing: 'Free with Google account',
    otherUses: 'Information retrieval, content creation, brainstorming',
    userExperience: 'Simple interface integrated with Google\'s ecosystem',
    websiteUrl: 'https://bard.google.com/'
  },
  {
    id: 'character-ai',
    name: 'Character.AI',
    description: 'Create and chat with AI characters',
    logoUrl: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=400&auto=format',
    categories: ['chatbots'],
    mainUse: 'Roleplay and character-based conversations',
    pricing: 'Free tier with premium subscription available',
    otherUses: 'Entertainment, storytelling, creative writing',
    userExperience: 'Fun and engaging interface for character creation and interaction',
    websiteUrl: 'https://character.ai/'
  },
  {
    id: 'chatpdf',
    name: 'ChatPDF',
    description: 'Chat with any PDF document using AI',
    logoUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400&auto=format',
    categories: ['chatbots', 'productivity'],
    mainUse: 'Extract information from PDF documents through conversation',
    pricing: 'Free tier with premium plans starting at $5/month',
    otherUses: 'Research, document analysis, knowledge extraction',
    userExperience: 'Simple drag-and-drop interface for PDFs with conversational UI',
    websiteUrl: 'https://www.chatpdf.com/'
  },
  {
    id: 'chatsonic',
    name: 'ChatSonic',
    description: 'An AI-powered assistant for text and image creation',
    logoUrl: 'https://images.unsplash.com/photo-1548783094-f8a1d2c9b481?q=80&w=400&auto=format',
    categories: ['chatbots', 'writing'],
    mainUse: 'Web-connected AI assistant for content creation',
    pricing: 'Free trial with subscription plans starting at $12.67/month',
    otherUses: 'Image generation, writing assistance, real-time information',
    userExperience: 'Feature-rich interface with voice commands and multiple personalities',
    websiteUrl: 'https://writesonic.com/chat'
  },
  {
    id: 'phind',
    name: 'Phind',
    description: 'An intelligent search engine and assistant for programmers',
    logoUrl: 'https://images.unsplash.com/photo-1629654291663-b91ad427698f?q=80&w=400&auto=format',
    categories: ['chatbots', 'search-engines', 'code'],
    mainUse: 'Programming help and technical information retrieval',
    pricing: 'Free, with Pro plan at $15/month',
    otherUses: 'Code generation, debugging, technical documentation',
    userExperience: 'Clean interface with code-focused answers and syntax highlighting',
    websiteUrl: 'https://www.phind.com/'
  },

  // Search Engines
  {
    id: 'perplexity-ai',
    name: 'Perplexity AI',
    description: 'AI-powered search tools with cited sources',
    logoUrl: 'https://images.unsplash.com/photo-1621252179027-1326761702a4?q=80&w=400&auto=format',
    categories: ['search-engines'],
    mainUse: 'Research with AI-generated answers and source citations',
    pricing: 'Free tier with Pro plan at $20/month',
    otherUses: 'Academic research, fact checking, information gathering',
    userExperience: 'Clean interface with sources and follow-up questions',
    websiteUrl: 'https://www.perplexity.ai/'
  },
  {
    id: 'metaphor',
    name: 'Metaphor',
    description: 'Language model powered search',
    logoUrl: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=400&auto=format',
    categories: ['search-engines'],
    mainUse: 'Discovering content through natural language search',
    pricing: 'Free with API access available',
    otherUses: 'Research, content discovery, trend analysis',
    userExperience: 'Intuitive search with rich content previews',
    websiteUrl: 'https://metaphor.systems/'
  },
  {
    id: 'you-dot-com',
    name: 'You.com',
    description: 'A private search engine built on AI',
    logoUrl: 'https://images.unsplash.com/photo-1632243313742-8124e8654adf?q=80&w=400&auto=format',
    categories: ['search-engines'],
    mainUse: 'Privacy-focused web search with AI assistance',
    pricing: 'Free',
    otherUses: 'Shopping, news, image search',
    userExperience: 'Ad-free with customizable app-based results',
    websiteUrl: 'https://you.com/'
  },
  {
    id: 'komo-ai',
    name: 'Komo AI',
    description: 'An AI-based search engine which provides quick and short answers',
    logoUrl: 'https://images.unsplash.com/photo-1595515106864-077d30192c56?q=80&w=400&auto=format',
    categories: ['search-engines'],
    mainUse: 'Getting concise answers to questions',
    pricing: 'Free',
    otherUses: 'Quick research, fact checking',
    userExperience: 'Simple interface focused on direct answers',
    websiteUrl: 'https://komo.ai/'
  },

  // Local Search Engines
  {
    id: 'privategpt',
    name: 'privateGPT',
    description: 'Ask questions to your documents without an internet connection',
    logoUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=400&auto=format',
    categories: ['local-search'],
    mainUse: 'Private document analysis and question answering',
    pricing: 'Free and open source',
    otherUses: 'Processing sensitive documents, offline research',
    userExperience: 'Command line interface requiring technical setup',
    websiteUrl: 'https://github.com/imartinez/privateGPT'
  },
  {
    id: 'quivr',
    name: 'Quivr',
    description: 'Chat with your files using LLMs & embeddings',
    logoUrl: 'https://images.unsplash.com/photo-1553749062-ca1a78fa3c18?q=80&w=400&auto=format',
    categories: ['local-search'],
    mainUse: 'Personal knowledge base with conversational access',
    pricing: 'Free and open source',
    otherUses: 'Document analysis, knowledge management',
    userExperience: 'Web interface with chat-based document interactions',
    websiteUrl: 'https://github.com/StanGirard/quivr'
  },

  // Too many tools to include in a single file, let's continue with a selection of the most important ones
  // I'll include some from each category to maintain a good representation

  // Writing Assistants (selection)
  {
    id: 'jasper',
    name: 'Jasper',
    description: 'Create content faster with AI writing assistance',
    logoUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=400&auto=format',
    categories: ['writing'],
    mainUse: 'AI-powered content creation for marketing and blogs',
    pricing: 'Starts at $39/month',
    otherUses: 'Long-form content, social media posts, email copy',
    userExperience: 'User-friendly interface with templates and brand voice settings',
    websiteUrl: 'https://www.jasper.ai/'
  },
  {
    id: 'copyai',
    name: 'Copy.ai',
    description: 'Write better marketing copy with AI',
    logoUrl: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=400&auto=format',
    categories: ['writing'],
    mainUse: 'AI-powered copywriting for marketing and business',
    pricing: 'Free plan with premium starting at $36/month',
    otherUses: 'Social media content, email copy, product descriptions',
    userExperience: 'Simple interface with many templates for different content types',
    websiteUrl: 'https://www.copy.ai/'
  },

  // ChatGPT Extensions (selection)
  {
    id: 'webchatgpt',
    name: 'WebChatGPT',
    description: 'Augment ChatGPT prompts with web results',
    logoUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&auto=format',
    categories: ['chatgpt-extensions'],
    mainUse: 'Add real-time web information to ChatGPT responses',
    pricing: 'Free browser extension',
    otherUses: 'Research, fact-checking, current events questions',
    userExperience: 'Seamless integration with ChatGPT interface',
    websiteUrl: 'https://www.webchatgpt.app/'
  },
  {
    id: 'chatbot-ui',
    name: 'Chatbot UI',
    description: 'An open source ChatGPT UI',
    logoUrl: 'https://images.unsplash.com/photo-1596443686812-2f45229eebc3?q=80&w=400&auto=format',
    categories: ['chatgpt-extensions'],
    mainUse: 'Self-hosted alternative interface for ChatGPT',
    pricing: 'Free and open source',
    otherUses: 'Custom AI implementations, development',
    userExperience: 'Clean, customizable interface with conversation management',
    websiteUrl: 'https://github.com/mckaywrigley/chatbot-ui'
  },

  // Code tools (selection)
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'Suggests code and functions in real-time',
    logoUrl: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=400&auto=format',
    categories: ['code'],
    mainUse: 'AI pair programmer for code suggestions and completion',
    pricing: '$10/month or $100/year, free for students',
    otherUses: 'Learning programming, exploring solutions, code documentation',
    userExperience: 'Seamless integration with code editors like VS Code',
    websiteUrl: 'https://github.com/features/copilot'
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    description: 'Code faster with AI code completions',
    logoUrl: 'https://images.unsplash.com/photo-1618477462146-050d2064cd43?q=80&w=400&auto=format',
    categories: ['code'],
    mainUse: 'AI-powered code completion and suggestion',
    pricing: 'Free tier with Pro plans starting at $12/month',
    otherUses: 'Learning new languages, improving code quality',
    userExperience: 'Works with multiple programming languages and IDEs',
    websiteUrl: 'https://www.tabnine.com/'
  }
];