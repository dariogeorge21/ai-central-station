import { AITool, ToolCategory } from './aiTools';

// Specialized, lesser-known AI tools that are useful for daily purposes
export const specializedAiTools: AITool[] = [
  // Productivity Tools
  {
    id: 'taskade',
    name: 'Taskade',
    description: 'AI-powered workspace with task management, mind mapping, and document collaboration',
    logoUrl: 'https://images.unsplash.com/photo-1611784728558-6a7645e72a03?q=80&w=400&auto=format',
    categories: ['productivity'],
    mainUse: 'AI-enhanced task management and team collaboration',
    pricing: 'Free tier with paid plans from $5/month',
    otherUses: 'Mind mapping, project management, document collaboration',
    userExperience: 'Clean interface with real-time collaboration',
    websiteUrl: 'https://www.taskade.com/',
    rating: 4
  },
  {
    id: 'otter-ai-specialized',
    name: 'Otter.ai',
    description: 'Real-time transcription and note-taking for meetings, lectures, and interviews',
    logoUrl: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=400&auto=format',
    categories: ['productivity', 'meeting'],
    mainUse: 'AI transcription for meetings and conversations',
    pricing: 'Free tier with premium from $8.33/month',
    otherUses: 'Meeting summaries, voice search, collaboration',
    userExperience: 'Simple interface with speaker identification',
    websiteUrl: 'https://otter.ai/',
    rating: 4
  },
  {
    id: 'reclaim',
    name: 'Reclaim.ai',
    description: 'AI calendar assistant that automatically schedules tasks, habits, and meetings',
    logoUrl: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=400&auto=format',
    categories: ['productivity'],
    mainUse: 'Intelligent calendar management and scheduling',
    pricing: 'Free tier with premium from $8/month',
    otherUses: 'Habit tracking, focus time blocking, meeting scheduling',
    userExperience: 'Seamless calendar integration',
    websiteUrl: 'https://reclaim.ai/',
    rating: 4
  },

  // Writing and Content Creation
  {
    id: 'quillbot',
    name: 'QuillBot',
    description: 'AI writing tool for paraphrasing, summarizing, and enhancing text',
    logoUrl: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=400&auto=format',
    categories: ['writing', 'productivity'],
    mainUse: 'Text paraphrasing and rewriting',
    pricing: 'Free tier with premium from $8.33/month',
    otherUses: 'Grammar checking, summarization, citation generation',
    userExperience: 'Simple interface with multiple paraphrasing modes',
    websiteUrl: 'https://quillbot.com/',
    rating: 4
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'AI copywriting tool for creating marketing content, emails, and social media posts',
    logoUrl: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=400&auto=format',
    categories: ['writing', 'content-creation'],
    mainUse: 'AI-powered copywriting for marketing',
    pricing: 'Free tier with premium from $36/month',
    otherUses: 'Email writing, blog outlines, social media content',
    userExperience: 'Template-based with customizable outputs',
    websiteUrl: 'https://www.copy.ai/',
    rating: 4
  },
  {
    id: 'rytr',
    name: 'Rytr',
    description: 'Budget-friendly AI writing assistant for content creation and copywriting',
    logoUrl: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=400&auto=format',
    categories: ['writing', 'content-creation'],
    mainUse: 'Affordable AI content creation',
    pricing: 'Free tier with premium from $9/month',
    otherUses: 'Blog writing, email composition, AIDA copywriting',
    userExperience: 'User-friendly with multiple language support',
    websiteUrl: 'https://rytr.me/',
    rating: 4
  },

  // Personal Finance
  {
    id: 'cleo',
    name: 'Cleo',
    description: 'AI financial assistant that helps manage budgets, track spending, and save money',
    logoUrl: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=400&auto=format',
    categories: ['productivity', 'virtual-assistants'],
    mainUse: 'Personal finance management with AI',
    pricing: 'Free with Cleo Plus at $5.99/month',
    otherUses: 'Expense tracking, budget assistance, financial insights',
    userExperience: 'Conversational interface with humor',
    websiteUrl: 'https://www.meetcleo.com/',
    rating: 4
  },
  {
    id: 'pocketguard',
    name: 'PocketGuard',
    description: 'AI-powered budgeting app that tracks spending and finds ways to save money',
    logoUrl: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=400&auto=format',
    categories: ['productivity'],
    mainUse: 'Smart budgeting and expense tracking',
    pricing: 'Free with premium at $7.99/month',
    otherUses: 'Bill management, spending insights, savings goals',
    userExperience: 'Clean mobile interface with bank synchronization',
    websiteUrl: 'https://pocketguard.com/',
    rating: 4
  },

  // Research and Learning
  {
    id: 'scholarai',
    name: 'Scholar AI',
    description: 'AI research assistant that helps find, summarize, and understand academic papers',
    logoUrl: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=400&auto=format',
    categories: ['academia', 'search-engines'],
    mainUse: 'AI-powered academic research assistance',
    pricing: 'Free with premium features',
    otherUses: 'Paper summarization, literature review, citation management',
    userExperience: 'Simple interface focused on academic content',
    websiteUrl: 'https://scholarai.io/',
    rating: 4
  },
  {
    id: 'explainpaper',
    name: 'ExplainPaper',
    description: 'AI tool that explains complex research papers in simple language',
    logoUrl: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=400&auto=format',
    categories: ['academia', 'productivity'],
    mainUse: 'Making academic papers more accessible',
    pricing: 'Free with limitations',
    otherUses: 'Term explanation, paper summarization, research assistance',
    userExperience: 'Upload papers and click any text for explanations',
    websiteUrl: 'https://www.explainpaper.com/',
    rating: 4
  },
  {
    id: 'paperpal',
    name: 'Paperpal',
    description: 'AI assistant for academic writing and editing with field-specific suggestions',
    logoUrl: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=400&auto=format',
    categories: ['academia', 'writing'],
    mainUse: 'Academic writing improvement and editing',
    pricing: 'Free with premium features',
    otherUses: 'Grammar checking, citation formatting, academic style improvement',
    userExperience: 'Field-specific recommendations for scientific writing',
    websiteUrl: 'https://paperpal.com/',
    rating: 4
  },

  // Language Learning
  {
    id: 'duolingo-max',
    name: 'Duolingo Max',
    description: 'Enhanced version of Duolingo with AI-powered explanations and conversations',
    logoUrl: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=400&auto=format',
    categories: ['virtual-assistants', 'productivity'],
    mainUse: 'AI-enhanced language learning',
    pricing: 'Subscription-based ($30/month)',
    otherUses: 'Conversational practice, grammar explanations, vocabulary building',
    userExperience: 'Gamified language learning with AI tutor',
    websiteUrl: 'https://duolingo.com/max',
    rating: 4
  },
  {
    id: 'lingvist',
    name: 'Lingvist',
    description: 'AI-powered language learning app that adapts to your knowledge and learning speed',
    logoUrl: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=400&auto=format',
    categories: ['productivity', 'virtual-assistants'],
    mainUse: 'Personalized language vocabulary acquisition',
    pricing: 'Free trial with plans from $9.99/month',
    otherUses: 'Vocabulary building, reading practice, pronunciation',
    userExperience: 'Clean interface with spaced repetition system',
    websiteUrl: 'https://lingvist.com/',
    rating: 4
  },

  // Health and Wellness
  {
    id: 'ada-health',
    name: 'Ada Health',
    description: 'AI-powered symptom assessment and health guide',
    logoUrl: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=400&auto=format',
    categories: ['virtual-assistants'],
    mainUse: 'AI health assessment and information',
    pricing: 'Free',
    otherUses: 'Symptom checking, health information, condition monitoring',
    userExperience: 'Conversational interface for health concerns',
    websiteUrl: 'https://ada.com/',
    rating: 4
  },
  {
    id: 'wysa',
    name: 'Wysa',
    description: 'AI mental health companion for emotional support and wellness coaching',
    logoUrl: 'https://images.unsplash.com/photo-1677442135146-767f343952e5?q=80&w=400&auto=format',
    categories: ['chatbots', 'virtual-assistants'],
    mainUse: 'AI therapy and mental health support',
    pricing: 'Free with premium from $99/year',
    otherUses: 'Cognitive behavioral therapy, meditation, sleep assistance',
    userExperience: 'Friendly AI penguin chatbot interface',
    websiteUrl: 'https://www.wysa.io/',
    rating: 4
  },
  {
    id: 'flourish',
    name: 'Flourish',
    description: 'AI coach for personal development, goal setting, and habit tracking',
    logoUrl: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=400&auto=format',
    categories: ['virtual-assistants', 'productivity'],
    mainUse: 'AI life coaching and habit building',
    pricing: 'Subscription-based',
    otherUses: 'Goal tracking, personal reflection, mindfulness practice',
    userExperience: 'Conversational coaching with personalized plans',
    websiteUrl: 'https://www.flourish.app/',
    rating: 4
  },

  // Creative Tools
  {
    id: 'artbreeder',
    name: 'Artbreeder',
    description: 'AI art creation platform that allows blending and modification of images',
    logoUrl: 'https://images.unsplash.com/photo-1682687219570-4c596363fd96?q=80&w=400&auto=format',
    categories: ['design', 'content-creation'],
    mainUse: 'Creative image generation and modification',
    pricing: 'Free with premium features',
    otherUses: 'Portrait creation, landscape generation, art exploration',
    userExperience: 'Visual interface for breeding images together',
    websiteUrl: 'https://www.artbreeder.com/',
    rating: 4
  },
  {
    id: 'soundraw',
    name: 'Soundraw',
    description: 'AI music generation tool for creating original, royalty-free music',
    logoUrl: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=400&auto=format',
    categories: ['content-creation'],
    mainUse: 'AI-generated music for content creators',
    pricing: 'Subscription from $16.99/month',
    otherUses: 'Video background music, podcast intros, creative projects',
    userExperience: 'Simple controls for genre, mood, and length',
    websiteUrl: 'https://soundraw.io/',
    rating: 4
  },
  {
    id: 'runwayml',
    name: 'Runway',
    description: 'AI-powered video editing and generation platform for creators',
    logoUrl: 'https://images.unsplash.com/photo-1682687219570-4c596363fd96?q=80&w=400&auto=format',
    categories: ['design', 'content-creation'],
    mainUse: 'AI video creation and editing',
    pricing: 'Free trial with plans from $12/month',
    otherUses: 'Video generation, motion tracking, green screen removal',
    userExperience: 'Intuitive interface with powerful AI features',
    websiteUrl: 'https://runwayml.com/',
    rating: 4
  },

  // Travel and Navigation
  {
    id: 'wanderlog',
    name: 'Wanderlog',
    description: 'AI travel planner that helps create itineraries and discover places',
    logoUrl: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=400&auto=format',
    categories: ['productivity', 'virtual-assistants'],
    mainUse: 'AI-assisted travel planning',
    pricing: 'Free with premium features',
    otherUses: 'Itinerary creation, restaurant recommendations, budget tracking',
    userExperience: 'Map-based interface with collaboration features',
    websiteUrl: 'https://wanderlog.com/',
    rating: 4
  },
  {
    id: 'hopper',
    name: 'Hopper',
    description: 'AI-powered travel app that predicts flight and hotel prices',
    logoUrl: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=400&auto=format',
    categories: ['productivity', 'virtual-assistants'],
    mainUse: 'Price prediction for travel bookings',
    pricing: 'Free with commission on bookings',
    otherUses: 'Flight tracking, hotel deals, travel advice',
    userExperience: 'Simple app with color-coded calendar for best prices',
    websiteUrl: 'https://www.hopper.com/',
    rating: 4
  },

  // Home Management
  {
    id: 'joshua-ai',
    name: 'Joshua.ai',
    description: 'Privacy-focused home automation AI assistant',
    logoUrl: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=400&auto=format',
    categories: ['virtual-assistants'],
    mainUse: 'Private smart home control',
    pricing: 'Custom pricing for luxury homes',
    otherUses: 'Voice control, scene management, home monitoring',
    userExperience: 'Natural language understanding with privacy focus',
    websiteUrl: 'https://joshua.ai/',
    rating: 4
  },
  {
    id: 'fritz-ai',
    name: 'Fritz AI',
    description: 'AI platform for building machine learning features into mobile apps',
    logoUrl: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=400&auto=format',
    categories: ['developer', 'productivity'],
    mainUse: 'On-device machine learning for mobile apps',
    pricing: 'Free tier with enterprise options',
    otherUses: 'Image segmentation, object detection, style transfer',
    userExperience: 'Developer tools and SDKs for mobile AI',
    websiteUrl: 'https://www.fritz.ai/',
    rating: 4
  },

  // Communication and Translation
  {
    id: 'lilt',
    name: 'Lilt',
    description: 'AI-powered translation platform with human-in-the-loop approach',
    logoUrl: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=400&auto=format',
    categories: ['translation', 'productivity'],
    mainUse: 'Enterprise AI translation',
    pricing: 'Custom business pricing',
    otherUses: 'Document translation, website localization, terminology management',
    userExperience: 'Translation memory with adaptive machine learning',
    websiteUrl: 'https://lilt.com/',
    rating: 4
  },
  {
    id: 'deepl-write',
    name: 'DeepL Write',
    description: 'AI writing tool that helps improve text clarity and style',
    logoUrl: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=400&auto=format',
    categories: ['writing', 'translation'],
    mainUse: 'Text improvement and rewriting',
    pricing: 'Free tier with Pro from $8.99/month',
    otherUses: 'Style enhancement, grammar correction, clarity improvement',
    userExperience: 'Clean interface with parallel original and improved text',
    websiteUrl: 'https://www.deepl.com/write',
    rating: 4
  },
  {
    id: 'otter-with-meeting-gems',
    name: 'Otter.ai Meeting Gems',
    description: 'AI meeting assistant that captures highlights, action items, and key decisions',
    logoUrl: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=400&auto=format',
    categories: ['meeting', 'productivity'],
    mainUse: 'Meeting transcription and analysis',
    pricing: 'Free tier with premium from $16.99/month',
    otherUses: 'Meeting summaries, action item extraction, key point identification',
    userExperience: 'Automatic identification of important meeting moments',
    websiteUrl: 'https://otter.ai/meeting-gems',
    rating: 4
  }
]; 