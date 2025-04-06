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
  | 'design'
  | 'finance'
  | 'health'
  | 'language-learning'
  | 'travel'
  | 'home'
  | 'music'
  | 'video';

export interface AITool {
  id: string;
  name: string;
  description: string;
  logoUrl?: string;
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
  'academia': 'Academic Tools',
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
  'design': 'Design Tools',
  'finance': 'Finance Tools',
  'health': 'Health & Wellness',
  'language-learning': 'Language Learning',
  'travel': 'Travel & Navigation',
  'home': 'Home Management',
  'music': 'Music Generation',
  'video': 'Video Creation'
};

// Import additional AI tools
import { popularAiTools } from './popularAiTools';
import { specializedAiTools } from './specializedAiTools';

// Base AI Tools Data
const baseAiTools: AITool[] = [
  // AI Models
  {
    id: 'openai-api',
    name: 'OpenAI API',
    description: 'Access to GPT-3, GPT-4 models, and Codex for various AI applications',
    logoUrl: 'https://th.bing.com/th/id/OIP.rGJmE3TC0tntzTFXJIsUQwHaHa?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.oq_zmiS3E2RVwY-vYJW_BgHaFj?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.nWj8RQG5qGzJU5BRs_i2awHaHa?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/667/053/datas/original.png',
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
    logoUrl: 'https://cdn.prod.website-files.com/6473d8d02a3cf26273f2787d/64d091329aca4e12ad195d09_fLbbhY4c1UqaWVKx8GMa9nazBAjK4QDdSQJoG92gNnAA5kE5o0D-i1uOUNx1sKaRQnBf6AfEtGbsMehf_Y2NSi9cUhw3Rf4iXqTxfdb2l8rRm6Ej751nIKsZBWsOPRFHUC4eroCIvm9wV4bm9TCaVCY.png',
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

  // Code Tools
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that suggests code and functions in real-time',
    logoUrl: 'https://techstory.in/wp-content/uploads/2022/06/OIP-7.jpeg',
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
    logoUrl: 'https://custom.typingmind.com/assets/models/cursor.png',
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
    logoUrl: 'https://res.cloudinary.com/dvzkzccvn/images/f_auto,q_auto/v1694154415/Tabnine/Tabnine.jpg?_i=AA',
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
    logoUrl: 'https://a-us.storyblok.com/f/1014951/400x400/1ef743556e/sourcegraph-cody-logo.jpg/m/250x250',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.su-ScISmvxF0kaLZ85C_oQHaHa?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://cdn.dribbble.com/users/3061686/screenshots/17599145/media/4d00ad57610b9f50bb00cc5a68654986.png',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.SAKoqKtglaDolT_UFdsFyQHaFj?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://th.bing.com/th/id/R.d6913136f418b45ce1e842b9fdf26a1b?rik=yyxYcmQQ9hPO6Q&riu=http%3a%2f%2faitools.neilpatel.com%2fwp-content%2fuploads%2f2023%2f06%2fGlasp_image.jpg&ehk=Huc8YbBHoeOzLf%2fMMyecIXGpVzi38k7ykbfzz6E6WF4%3d&risl=&pid=ImgRaw&r=0',
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
    logoUrl: 'https://www.pngall.com/wp-content/uploads/15/WordTune-Logo-PNG-Pic.png',
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
    logoUrl: 'https://img.simplerousercontent.net/scaled_image/7171091/98ab67ce9d14c4c1767412659f250de3ec323fdc/AIPRM-quad-1600x1600-1600w-1600h.png',
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
    logoUrl: 'https://www.influxdata.com/wp-content/uploads/Fireflies-logo.jpg',
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
    logoUrl: 'https://consensus.app/home/wp-content/uploads/2022/08/logo.png',
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
    logoUrl: 'https://th.bing.com/th/id/R.5d3269d9545f9af0c5c9ea111ddb3e31?rik=xKior6HA6utoSw&riu=http%3a%2f%2fiaboxtool.es%2fwp-content%2fuploads%2f2024%2f01%2felicit.png&ehk=YKmSty%2fqR7oZ1KfeNKSJ1EnY3L6Ubv3%2fD%2fSE1ahJdvw%3d&risl=&pid=ImgRaw&r=0',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.QVTgtYYmFc6nS86R-fVZeQAAAA?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://cdn.dribbble.com/userupload/9062814/file/original-7aa7597c7531ae0711604bef23fc3e9a.jpg?resize=1600x1200',
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
    logoUrl: 'https://ai.bizequals.com/media/com_jbusinessdirectory/pictures/companies/5/merlin-logo-og.webp',
    categories: ['productivity', 'browser-extensions', 'writing'],
    mainUse: 'AI assistance anywhere on the web',
    pricing: 'Free tier with premium features',
    otherUses: 'Content summarization, writing assistance, research',
    userExperience: 'Accessible via browser extension with simple interface',
    websiteUrl: 'https://merlin.foyer.work/',
    rating: 4
  }
];

// Update specialized tool categories to match our expanded ToolCategory type
const updatedSpecializedTools = specializedAiTools.map(tool => {
  const updatedCategories: ToolCategory[] = tool.categories.map(category => {
    // Map any specialized categories to our expanded type
    if (category === 'virtual-assistants' && tool.id === 'ada-health') {
      return 'health' as ToolCategory;
    }
    if (category === 'virtual-assistants' && (tool.id === 'duolingo-max' || tool.id === 'lingvist')) {
      return 'language-learning' as ToolCategory;
    }
    if (category === 'virtual-assistants' && (tool.id === 'wanderlog' || tool.id === 'hopper')) {
      return 'travel' as ToolCategory;
    }
    if (category === 'virtual-assistants' && tool.id === 'joshua-ai') {
      return 'home' as ToolCategory;
    }
    if (category === 'content-creation' && tool.id === 'soundraw') {
      return 'music' as ToolCategory;
    }
    if (category === 'content-creation' && tool.id === 'runwayml') {
      return 'video' as ToolCategory;
    }
    if (category === 'productivity' && (tool.id === 'cleo' || tool.id === 'pocketguard')) {
      return 'finance' as ToolCategory;
    }
    return category as ToolCategory;
  });
  
  return {
    ...tool,
    categories: updatedCategories
  };
});

// Merge all tools and export
export const aiTools: AITool[] = [...baseAiTools, ...popularAiTools, ...updatedSpecializedTools];

// Export a function to get tools by category
export const getToolsByCategory = (category: ToolCategory): AITool[] => {
  return aiTools.filter(tool => tool.categories.includes(category));
};

// Export a function to get tool by ID
export const getToolById = (id: string): AITool | undefined => {
  return aiTools.find(tool => tool.id === id);
};