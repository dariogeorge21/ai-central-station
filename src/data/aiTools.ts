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

// Consolidated AI Tools Data
export const aiTools: AITool[] = [
  // AI Models
  {
    id: 'openai-api',
    name: 'OpenAI API',
    description: 'Access to GPT-3, GPT-4 models, and Codex for various AI applications',
    logoUrl: 'https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?q=80&w=400&auto=format',
    categories: ['models', 'developer'],
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
    websiteUrl: 'https://deepmind.com/',
    rating: 4
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
    websiteUrl: 'https://huggingface.co/facebook/opt-350m',
    rating: 4
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
    websiteUrl: 'https://huggingface.co/bigscience/bloom',
    rating: 4
  },
  {
    id: 'llama',
    name: 'Llama',
    description: 'Meta\'s family of open-source large language models including LLaMA and Llama 2',
    logoUrl: 'https://images.unsplash.com/photo-1682687219570-4c596363fd96?q=80&w=400&auto=format',
    categories: ['models', 'chatbots'],
    mainUse: 'Open-source foundation model for various applications',
    pricing: 'Free for research and commercial use',
    otherUses: 'Text generation, dialog systems, content creation, application development',
    userExperience: 'Accessible through various interfaces and APIs',
    websiteUrl: 'https://ai.meta.com/llama/',
    rating: 5
  },

  // Chatbots
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Advanced conversational AI for natural language processing and generation',
    logoUrl: 'https://images.unsplash.com/photo-1677442135146-767f343952e5?q=80&w=400&auto=format',
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
    logoUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=400&auto=format',
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
    logoUrl: 'https://images.unsplash.com/photo-1675456503697-a577e5ed296b?q=80&w=400&auto=format',
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
    logoUrl: 'https://images.unsplash.com/photo-1621252179027-1326761702a4?q=80&w=400&auto=format',
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
    logoUrl: 'https://images.unsplash.com/photo-1629654291663-b91ad427698f?q=80&w=400&auto=format',
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
    logoUrl: 'https://images.unsplash.com/photo-1633419798863-8e929c545f46?q=80&w=400&auto=format',
    categories: ['chatbots', 'search-engines'],
    mainUse: 'Web search with conversational AI',
    pricing: 'Free with Microsoft account',
    otherUses: 'Content creation, research, image generation',
    userExperience: 'Integrated with Microsoft ecosystem',
    websiteUrl: 'https://copilot.microsoft.com/',
    rating: 4
  },

  // Code Tools
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that suggests code and functions in real-time',
    logoUrl: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=400&auto=format',
    categories: ['code', 'developer'],
    mainUse: 'AI pair programmer for code suggestions and completion',
    pricing: '$10/month or $100/year, free for students',
    otherUses: 'Learning programming, exploring solutions, code documentation',
    userExperience: 'Seamless integration with code editors like VS Code',
    websiteUrl: 'https://github.com/features/copilot',
    rating: 5
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI-first code editor built for pair programming',
    logoUrl: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=400&auto=format',
    categories: ['code', 'developer'],
    mainUse: 'AI-assisted coding and development',
    pricing: 'Free tier with premium plans',
    otherUses: 'Code explanation, debugging, refactoring',
    userExperience: 'Code editor with integrated AI capabilities',
    websiteUrl: 'https://cursor.sh/',
    rating: 5
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    description: 'AI-powered code completion tool for developers',
    logoUrl: 'https://images.unsplash.com/photo-1618477462146-050d2064cd43?q=80&w=400&auto=format',
    categories: ['code', 'developer'],
    mainUse: 'AI-powered code completion and suggestion',
    pricing: 'Free tier with Pro plans starting at $12/month',
    otherUses: 'Learning new languages, improving code quality',
    userExperience: 'Works with multiple programming languages and IDEs',
    websiteUrl: 'https://www.tabnine.com/',
    rating: 4
  },
  {
    id: 'sourcegraph-cody',
    name: 'Sourcegraph Cody',
    description: 'AI coding assistant that understands your entire codebase',
    logoUrl: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=400&auto=format',
    categories: ['code', 'developer'],
    mainUse: 'AI-powered code assistance with codebase understanding',
    pricing: 'Free tier with premium plans for teams',
    otherUses: 'Code search, documentation, onboarding',
    userExperience: 'IDE extensions and web interface',
    websiteUrl: 'https://sourcegraph.com/cody',
    rating: 4
  },

  // Design Tools
  {
    id: 'canva',
    name: 'Canva',
    description: 'Design platform with AI-powered features for creating visual content',
    logoUrl: 'https://images.unsplash.com/photo-1611784728558-6a7645e72a03?q=80&w=400&auto=format',
    categories: ['productivity', 'design'],
    mainUse: 'Creating designs with AI assistance',
    pricing: 'Free tier with premium plans starting at $12.99/month',
    otherUses: 'Social media graphics, presentations, marketing materials',
    userExperience: 'User-friendly interface with drag-and-drop functionality',
    websiteUrl: 'https://www.canva.com/',
    rating: 5
  },
  {
    id: 'figma',
    name: 'Figma',
    description: 'Collaborative design tool with AI features',
    logoUrl: 'https://images.unsplash.com/photo-1611784728558-6a7645e72a03?q=80&w=400&auto=format',
    categories: ['productivity', 'design'],
    mainUse: 'Collaborative design with AI assistance',
    pricing: 'Free tier with premium plans starting at $12/month',
    otherUses: 'UI/UX design, prototyping, design systems',
    userExperience: 'Web-based platform with real-time collaboration',
    websiteUrl: 'https://www.figma.com/',
    rating: 5
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    description: 'AI image generation tool from Adobe',
    logoUrl: 'https://images.unsplash.com/photo-1682687219570-4c596363fd96?q=80&w=400&auto=format',
    categories: ['text-generators', 'design'],
    mainUse: 'Creating and editing images with AI',
    pricing: 'Included with Creative Cloud subscription',
    otherUses: 'Content creation, design assets, creative exploration',
    userExperience: 'Integrated with Adobe Creative Cloud ecosystem',
    websiteUrl: 'https://www.adobe.com/products/firefly.html',
    rating: 4
  },

  // Productivity and Browser Extensions
  {
    id: 'glasp',
    name: 'Glasp',
    description: 'Social web highlighter with AI summarization capabilities',
    logoUrl: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=400&auto=format',
    categories: ['productivity', 'browser-extensions'],
    mainUse: 'Highlighting and summarizing web content',
    pricing: 'Free with premium features',
    otherUses: 'Research, knowledge management, content curation',
    userExperience: 'Browser extension with social sharing features',
    websiteUrl: 'https://glasp.co/',
    rating: 4
  },
  {
    id: 'wordtune',
    name: 'Wordtune',
    description: 'AI writing assistant and content summarizer',
    logoUrl: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=400&auto=format',
    categories: ['writing', 'browser-extensions', 'productivity'],
    mainUse: 'Improving writing and summarizing content',
    pricing: 'Free tier with premium plans starting at $9.99/month',
    otherUses: 'Content rewriting, tone adjustment, summarization',
    userExperience: 'Browser extension with clean interface',
    websiteUrl: 'https://www.wordtune.com/',
    rating: 4
  },
  {
    id: 'aiprm',
    name: 'AIPRM for ChatGPT',
    description: 'Browser extension with curated prompt templates for ChatGPT',
    logoUrl: 'https://images.unsplash.com/photo-1677442135146-767f343952e5?q=80&w=400&auto=format',
    categories: ['productivity', 'browser-extensions', 'chatgpt-extensions'],
    mainUse: 'Enhanced ChatGPT experience with prompt templates',
    pricing: 'Free tier with premium plans',
    otherUses: 'Content creation, SEO, marketing, customer support',
    userExperience: 'Seamless integration with ChatGPT interface',
    websiteUrl: 'https://www.aiprm.com/',
    rating: 4
  },

  // Meeting Tools
  {
    id: 'fireflies',
    name: 'Fireflies.ai',
    description: 'AI meeting assistant that records, transcribes, and analyzes conversations',
    logoUrl: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=400&auto=format',
    categories: ['productivity', 'meeting'],
    mainUse: 'Meeting transcription and analysis',
    pricing: 'Free tier with premium plans starting at $10/month',
    otherUses: 'Meeting summaries, action item extraction, knowledge base',
    userExperience: 'Integration with video conferencing platforms',
    websiteUrl: 'https://fireflies.ai/',
    rating: 4
  },

  // Research Tools
  {
    id: 'consensus',
    name: 'Consensus',
    description: 'AI-powered search engine for scientific research',
    logoUrl: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=400&auto=format',
    categories: ['search-engines', 'academia'],
    mainUse: 'Finding scientific papers and insights',
    pricing: 'Free with premium features',
    otherUses: 'Literature review, research validation, knowledge discovery',
    userExperience: 'Search interface with citation extraction',
    websiteUrl: 'https://consensus.app/',
    rating: 4
  },
  {
    id: 'elicit',
    name: 'Elicit',
    description: 'AI research assistant that finds and summarizes papers',
    logoUrl: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=400&auto=format',
    categories: ['search-engines', 'academia'],
    mainUse: 'Research assistance and paper summarization',
    pricing: 'Free with premium features',
    otherUses: 'Literature review, research planning, knowledge synthesis',
    userExperience: 'Clean interface with paper visualization',
    websiteUrl: 'https://elicit.org/',
    rating: 4
  },

  // Email and Communication
  {
    id: 'flowrite',
    name: 'Flowrite',
    description: 'AI writing tool that turns instructions into ready-to-send emails',
    logoUrl: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=400&auto=format',
    categories: ['writing', 'productivity', 'email'],
    mainUse: 'Generating professional emails from instructions',
    pricing: 'Plans starting at $19/month',
    otherUses: 'Business communication, follow-ups, outreach',
    userExperience: 'Browser extension and web app',
    websiteUrl: 'https://www.flowrite.com/',
    rating: 4
  },

  // Personal AI Assistants
  {
    id: 'pi',
    name: 'Pi',
    description: 'Personal AI assistant focused on thoughtful conversation',
    logoUrl: 'https://images.unsplash.com/photo-1677442135146-767f343952e5?q=80&w=400&auto=format',
    categories: ['chatbots', 'productivity'],
    mainUse: 'Conversational AI companion',
    pricing: 'Free with usage limits',
    otherUses: 'Brainstorming, emotional support, learning companion',
    userExperience: 'Mobile app and web interface',
    websiteUrl: 'https://heypi.com/',
    rating: 4
  },
  {
    id: 'merlin',
    name: 'Merlin',
    description: 'AI assistant browser extension for research and writing',
    logoUrl: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=400&auto=format',
    categories: ['productivity', 'browser-extensions', 'writing'],
    mainUse: 'AI assistance anywhere on the web',
    pricing: 'Free tier with premium features',
    otherUses: 'Content summarization, writing assistance, research',
    userExperience: 'Accessible via browser extension with simple interface',
    websiteUrl: 'https://merlin.foyer.work/',
    rating: 4
  }

  // Note: More tools can be added here in their respective categories
];

// Export a function to get tools by category
export const getToolsByCategory = (category: ToolCategory): AITool[] => {
  return aiTools.filter(tool => tool.categories.includes(category));
};

// Export a function to get tool by ID
export const getToolById = (id: string): AITool | undefined => {
  return aiTools.find(tool => tool.id === id);
};