export interface AITool {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  rating: number;
  reviewCount: number;
  category: string;
  categories: string[];
  pricing: {
    type: string;
    details: string[];
  };
  features: string[];
  useCases: string[];
  thumbnail: string;
  images: string[];
  documentationUrl: string;
  mainPurpose: string;
  userExperience: string;
}

export const aiTools: AITool[] = [
  {
    id: 'deepseek',
    name: 'DeepSeek',
    description: 'DeepSeek is an advanced AI model trained on a vast dataset of code and technical documentation. It excels in understanding and generating complex code patterns across multiple programming languages.',
    shortDescription: 'Advanced AI coding assistant with deep technical understanding',
    rating: 4.8,
    reviewCount: 1250,
    category: 'Development',
    categories: ['development'],
    pricing: {
      type: 'Freemium',
      details: [
        'Free tier with basic features',
        'Pro plan at $20/month',
        'Enterprise solutions available'
      ]
    },
    features: [
      'Multi-language code generation',
      'Context-aware completions',
      'Technical documentation generation',
      'Code explanation',
      'Bug detection and fixing'
    ],
    useCases: [
      'Software development',
      'Code review automation',
      'Documentation writing',
      'Learning programming concepts',
      'Technical problem solving'
    ],
    thumbnail: '/images/tools/deepseek/thumbnail.png',
    images: [
      '/images/tools/deepseek/interface.png',
      '/images/tools/deepseek/code-example.png',
      '/images/tools/deepseek/features.png'
    ],
    documentationUrl: 'https://www.deepseek.com/docs',
    mainPurpose: 'To provide developers with an intelligent coding assistant that understands complex technical concepts and can generate high-quality code across various programming languages.',
    userExperience: 'Users praise DeepSeek for its accurate code suggestions and deep understanding of programming concepts. The interface is intuitive, and the response time is notably fast.'
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'ChatGPT is a state-of-the-art language model that can engage in natural conversations, assist with various tasks, and generate human-like text responses.',
    shortDescription: 'Versatile AI chatbot for conversation and content creation',
    rating: 4.9,
    reviewCount: 2500000,
    category: 'General AI',
    categories: ['ai-assistants'],
    pricing: {
      type: 'Freemium',
      details: [
        'Free tier available',
        'Plus plan at $20/month',
        'Team and enterprise options'
      ]
    },
    features: [
      'Natural language understanding',
      'Context retention',
      'Multi-turn conversations',
      'Content generation',
      'Task assistance'
    ],
    useCases: [
      'Content writing',
      'Research assistance',
      'Learning and tutoring',
      'Creative writing',
      'Problem solving'
    ],
    thumbnail: '/images/tools/chatgpt/thumbnail.png',
    images: [
      '/images/tools/chatgpt/interface.png',
      '/images/tools/chatgpt/conversation.png',
      '/images/tools/chatgpt/features.png'
    ],
    documentationUrl: 'https://help.openai.com',
    mainPurpose: 'To provide users with an AI assistant that can understand and respond to a wide range of queries while maintaining context and providing helpful, informative responses.',
    userExperience: 'ChatGPT is widely praised for its ease of use and ability to understand context. Users particularly appreciate its versatility and the quality of its responses.'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Midjourney is an AI-powered image generation tool that creates stunning artwork and visual content from textual descriptions.',
    shortDescription: 'AI art generator for professional-quality images',
    rating: 4.7,
    reviewCount: 750000,
    category: 'Creative',
    categories: ['creative'],
    pricing: {
      type: 'Subscription',
      details: [
        'Basic plan at $10/month',
        'Standard plan at $30/month',
        'Pro plan at $60/month'
      ]
    },
    features: [
      'High-quality image generation',
      'Style customization',
      'Aspect ratio control',
      'Variation generation',
      'Upscaling capabilities'
    ],
    useCases: [
      'Digital art creation',
      'Concept visualization',
      'Marketing materials',
      'Game asset design',
      'Interior design concepts'
    ],
    thumbnail: '/images/tools/midjourney/thumbnail.png',
    images: [
      '/images/tools/midjourney/gallery.png',
      '/images/tools/midjourney/generation.png',
      '/images/tools/midjourney/styles.png'
    ],
    documentationUrl: 'https://docs.midjourney.com',
    mainPurpose: 'To enable users to create professional-quality artwork and visual content using simple text descriptions, making art creation accessible to everyone.',
    userExperience: 'Users love Midjourney for its high-quality outputs and intuitive prompt system. The Discord-based interface has a learning curve but provides a unique collaborative environment.'
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'GitHub Copilot is an AI-powered code completion tool that helps developers write code faster and with fewer errors. It uses OpenAI Codex to suggest code and entire functions in real-time.',
    shortDescription: 'AI pair programmer that suggests code in real-time',
    rating: 4.8,
    reviewCount: 980000,
    category: 'Development',
    categories: ['development'],
    pricing: {
      type: 'Subscription',
      details: [
        'Individual plan at $10/month',
        'Business plan at $19/user/month',
        'Enterprise solutions available'
      ]
    },
    features: [
      'Real-time code suggestions',
      'Multi-language support',
      'Context-aware completions',
      'Function generation',
      'Documentation assistance'
    ],
    useCases: [
      'Code development',
      'Boilerplate generation',
      'Test writing',
      'Documentation creation',
      'Learning new languages'
    ],
    thumbnail: '/images/tools/github-copilot/thumbnail.png',
    images: [
      '/images/tools/github-copilot/interface.png',
      '/images/tools/github-copilot/suggestions.png',
      '/images/tools/github-copilot/settings.png'
    ],
    documentationUrl: 'https://github.com/features/copilot',
    mainPurpose: 'To accelerate software development by providing AI-powered code suggestions and helping developers write better code faster.',
    userExperience: 'Developers praise Copilot for its accurate suggestions and seamless integration with popular IDEs. The tool significantly reduces time spent on repetitive coding tasks.'
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    description: 'TensorFlow is an end-to-end open-source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries, and community resources that lets researchers push the state-of-the-art in ML and developers easily build and deploy ML-powered applications.',
    shortDescription: 'Open-source machine learning framework by Google',
    rating: 4.7,
    reviewCount: 850000,
    category: 'Machine Learning',
    categories: ['development'],
    pricing: {
      type: 'Open Source',
      details: [
        'Free to use',
        'Enterprise support available',
        'Cloud services pricing varies'
      ]
    },
    features: [
      'Flexible architecture',
      'Production-ready ML models',
      'Powerful experimentation tools',
      'Easy model deployment',
      'Hardware acceleration'
    ],
    useCases: [
      'Deep learning research',
      'Computer vision',
      'Natural language processing',
      'Reinforcement learning',
      'Production ML systems'
    ],
    thumbnail: '/images/tools/tensorflow/thumbnail.png',
    images: [
      '/images/tools/tensorflow/architecture.png',
      '/images/tools/tensorflow/code-example.png',
      '/images/tools/tensorflow/visualization.png'
    ],
    documentationUrl: 'https://www.tensorflow.org/docs',
    mainPurpose: 'To provide a comprehensive platform for building and deploying machine learning models, making ML accessible to developers and researchers.',
    userExperience: 'Users appreciate TensorFlow\'s extensive documentation and community support. While it has a steep learning curve, it offers unmatched flexibility and performance for ML projects.'
  },
  {
    id: 'notion',
    name: 'Notion',
    description: 'Notion is an all-in-one workspace that combines notes, documents, wikis, and project management. It uses AI to enhance productivity and content creation.',
    shortDescription: 'AI-enhanced workspace for notes and collaboration',
    rating: 4.8,
    reviewCount: 1200000,
    category: 'Productivity',
    categories: ['content', 'productivity'],
    pricing: {
      type: 'Freemium',
      details: [
        'Free personal plan',
        'Plus plan at $8/user/month',
        'Business plan at $15/user/month',
        'Enterprise solutions available'
      ]
    },
    features: [
      'AI writing assistance',
      'Smart templates',
      'Database functionality',
      'Real-time collaboration',
      'Custom workflows'
    ],
    useCases: [
      'Team documentation',
      'Project management',
      'Personal organization',
      'Knowledge bases',
      'Meeting notes'
    ],
    thumbnail: '/images/tools/notion/thumbnail.png',
    images: [
      '/images/tools/notion/workspace.png',
      '/images/tools/notion/ai-features.png',
      '/images/tools/notion/templates.png'
    ],
    documentationUrl: 'https://www.notion.so/help',
    mainPurpose: 'To provide a flexible, AI-enhanced workspace that combines multiple productivity tools into one seamless platform.',
    userExperience: 'Users love Notion\'s flexibility and the recent AI features. The platform\'s customizability and clean interface make it a favorite for both personal and team use.'
  },
  {
    id: 'dall-e',
    name: 'DALL·E',
    description: 'DALL·E is an advanced AI system that can create realistic images and art from natural language descriptions. It understands a wide range of concepts, attributes, and styles.',
    shortDescription: 'AI image generation from text descriptions',
    rating: 4.9,
    reviewCount: 1500000,
    category: 'Creative',
    categories: ['creative'],
    pricing: {
      type: 'Credit-based',
      details: [
        'Free credits for new users',
        'Pay-as-you-go credits',
        'Volume pricing available'
      ]
    },
    features: [
      'Text-to-image generation',
      'Image editing capabilities',
      'Style transfer',
      'High-resolution output',
      'Variations generation'
    ],
    useCases: [
      'Digital art creation',
      'Marketing visuals',
      'Product design',
      'Concept art',
      'Educational illustrations'
    ],
    thumbnail: '/images/tools/dalle/thumbnail.png',
    images: [
      '/images/tools/dalle/gallery.png',
      '/images/tools/dalle/generation.png',
      '/images/tools/dalle/variations.png'
    ],
    documentationUrl: 'https://openai.com/dall-e-3',
    mainPurpose: 'To transform textual descriptions into high-quality, creative images, making professional-grade image creation accessible to everyone.',
    userExperience: 'Users are impressed by DALL·E\'s ability to understand complex prompts and generate highly detailed, creative images. The interface is intuitive and results are consistently high-quality.'
  },
  {
    id: 'gemini',
    name: 'Gemini',
    description: 'Gemini is Google\'s most capable AI model, designed to understand and combine different types of information including text, code, audio, images, and video.',
    shortDescription: 'Multimodal AI model for diverse content understanding',
    rating: 4.8,
    reviewCount: 450000,
    category: 'General AI',
    categories: ['ai-assistants'],
    pricing: {
      type: 'Freemium',
      details: [
        'Free tier available',
        'Pro subscription at $10/month',
        'Enterprise solutions available'
      ]
    },
    features: [
      'Multimodal understanding',
      'Advanced reasoning',
      'Code generation',
      'Content creation',
      'Visual analysis'
    ],
    useCases: [
      'Content generation',
      'Code assistance',
      'Image analysis',
      'Research support',
      'Educational tutoring'
    ],
    thumbnail: '/images/tools/gemini/thumbnail.png',
    images: [
      '/images/tools/gemini/interface.png',
      '/images/tools/gemini/multimodal.png',
      '/images/tools/gemini/features.png'
    ],
    documentationUrl: 'https://ai.google.dev/docs',
    mainPurpose: 'To provide a versatile AI model that can understand and work with multiple types of content, offering advanced capabilities across various domains.',
    userExperience: 'Users appreciate Gemini\'s ability to handle multiple types of inputs and its advanced reasoning capabilities. The integration with Google\'s ecosystem enhances its utility.'
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Claude is an AI assistant created by Anthropic, known for its strong capabilities in analysis, writing, and coding. It excels in providing nuanced, thoughtful responses.',
    shortDescription: 'Advanced AI assistant for complex tasks and analysis',
    rating: 4.7,
    reviewCount: 320000,
    category: 'General AI',
    categories: ['ai-assistants'],
    pricing: {
      type: 'Subscription',
      details: [
        'Free tier with limitations',
        'Claude Pro at $20/month',
        'Enterprise options available'
      ]
    },
    features: [
      'Advanced reasoning',
      'Long context handling',
      'Code analysis',
      'Research assistance',
      'Content generation'
    ],
    useCases: [
      'Academic research',
      'Technical writing',
      'Code review',
      'Data analysis',
      'Content creation'
    ],
    thumbnail: '/images/tools/claude/thumbnail.png',
    images: [
      '/images/tools/claude/interface.png',
      '/images/tools/claude/analysis.png',
      '/images/tools/claude/features.png'
    ],
    documentationUrl: 'https://www.anthropic.com/claude',
    mainPurpose: 'To provide thoughtful, nuanced assistance for complex tasks while maintaining high standards of accuracy and safety.',
    userExperience: 'Users value Claude\'s ability to provide detailed, well-reasoned responses and its strong performance on complex analytical tasks.'
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: 'Stable Diffusion is an open-source AI model that generates detailed images from text descriptions. It offers high-quality image generation with extensive customization options.',
    shortDescription: 'Open-source AI image generation model',
    rating: 4.6,
    reviewCount: 680000,
    category: 'Creative',
    categories: ['creative'],
    pricing: {
      type: 'Open Source',
      details: [
        'Free to use locally',
        'Cloud services available',
        'Commercial licenses available'
      ]
    },
    features: [
      'Text-to-image generation',
      'Image-to-image editing',
      'Inpainting and outpainting',
      'Style transfer',
      'Custom model training'
    ],
    useCases: [
      'Digital art creation',
      'Design prototyping',
      'Content generation',
      'Game asset creation',
      'Photo editing'
    ],
    thumbnail: '/images/tools/stable-diffusion/thumbnail.png',
    images: [
      '/images/tools/stable-diffusion/interface.png',
      '/images/tools/stable-diffusion/generation.png',
      '/images/tools/stable-diffusion/models.png'
    ],
    documentationUrl: 'https://stability.ai/stable-diffusion',
    mainPurpose: 'To democratize AI image generation by providing an open-source solution that can be run locally or in the cloud.',
    userExperience: 'Users appreciate the flexibility of running the model locally and the active community developing new features and improvements.'
  },
  {
    id: 'hugging-face',
    name: 'Hugging Face',
    description: 'Hugging Face is a platform that provides tools for building, training, and deploying machine learning models. It\'s known for its extensive model hub and easy-to-use APIs.',
    shortDescription: 'Comprehensive platform for ML model development',
    rating: 4.8,
    reviewCount: 420000,
    category: 'Machine Learning',
    categories: ['development'],
    pricing: {
      type: 'Freemium',
      details: [
        'Free tier for open-source',
        'Pro plan starting at $9/month',
        'Enterprise solutions available'
      ]
    },
    features: [
      'Model hub access',
      'Easy model deployment',
      'Training infrastructure',
      'Collaboration tools',
      'Dataset management'
    ],
    useCases: [
      'ML model development',
      'Research projects',
      'NLP applications',
      'Model fine-tuning',
      'Production deployment'
    ],
    thumbnail: '/images/tools/hugging-face/thumbnail.png',
    images: [
      '/images/tools/hugging-face/hub.png',
      '/images/tools/hugging-face/models.png',
      '/images/tools/hugging-face/spaces.png'
    ],
    documentationUrl: 'https://huggingface.co/docs',
    mainPurpose: 'To make machine learning more accessible by providing tools, models, and infrastructure for the AI community.',
    userExperience: 'Researchers and developers praise the platform\'s ease of use and comprehensive resources. The community aspect adds significant value.'
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'Grammarly is an AI-powered writing assistant that helps users improve their writing by checking grammar, spelling, tone, and style. It provides real-time suggestions and explanations.',
    shortDescription: 'AI writing assistant for better communication',
    rating: 4.8,
    reviewCount: 3200000,
    category: 'Writing',
    categories: ['content'],
    pricing: {
      type: 'Freemium',
      details: [
        'Free basic features',
        'Premium at $12/month',
        'Business plans available'
      ]
    },
    features: [
      'Grammar checking',
      'Style suggestions',
      'Tone detection',
      'Plagiarism detection',
      'Vocabulary enhancement'
    ],
    useCases: [
      'Academic writing',
      'Business communication',
      'Content creation',
      'Email writing',
      'Social media posts'
    ],
    thumbnail: '/images/tools/grammarly/thumbnail.png',
    images: [
      '/images/tools/grammarly/editor.png',
      '/images/tools/grammarly/suggestions.png',
      '/images/tools/grammarly/analytics.png'
    ],
    documentationUrl: 'https://www.grammarly.com/blog/guide',
    mainPurpose: 'To help users communicate more effectively by improving their writing quality and ensuring clarity and professionalism.',
    userExperience: 'Users find Grammarly invaluable for catching errors and improving their writing style. The browser extension and integration with various platforms make it very convenient.'
  },
  {
    id: 'wolfram-alpha',
    name: 'Wolfram Alpha',
    description: 'Wolfram Alpha is a computational knowledge engine that uses AI to answer questions, solve problems, and provide detailed analysis across various academic fields.',
    shortDescription: 'AI-powered computational knowledge engine',
    rating: 4.7,
    reviewCount: 890000,
    category: 'Education',
    categories: ['research'],
    pricing: {
      type: 'Freemium',
      details: [
        'Free basic access',
        'Pro version at $7.25/month',
        'Pro Premium at $13.75/month'
      ]
    },
    features: [
      'Mathematical computations',
      'Data analysis',
      'Scientific calculations',
      'Step-by-step solutions',
      'Visual representations'
    ],
    useCases: [
      'Mathematics',
      'Physics problems',
      'Data visualization',
      'Research analysis',
      'Educational support'
    ],
    thumbnail: '/images/tools/wolfram-alpha/thumbnail.png',
    images: [
      '/images/tools/wolfram-alpha/interface.png',
      '/images/tools/wolfram-alpha/computation.png',
      '/images/tools/wolfram-alpha/visualization.png'
    ],
    documentationUrl: 'https://www.wolframalpha.com/examples',
    mainPurpose: 'To provide expert-level knowledge and computational capabilities across various fields, making complex problem-solving accessible.',
    userExperience: 'Students and professionals appreciate the detailed solutions and broad knowledge base. The step-by-step explanations are particularly helpful for learning.'
  },
  {
    id: 'zotero',
    name: 'Zotero',
    description: 'Zotero is a research tool enhanced with AI capabilities for managing bibliographic data and research materials. It helps organize, cite, and share research.',
    shortDescription: 'AI-enhanced reference management system',
    rating: 4.6,
    reviewCount: 450000,
    category: 'Research',
    categories: ['research'],
    pricing: {
      type: 'Freemium',
      details: [
        'Free core features',
        'Storage plans from $20/year',
        'Institutional plans available'
      ]
    },
    features: [
      'Reference management',
      'PDF organization',
      'Citation generation',
      'Collaboration tools',
      'Web capture'
    ],
    useCases: [
      'Academic research',
      'Paper writing',
      'Literature review',
      'Team collaboration',
      'Bibliography creation'
    ],
    thumbnail: '/images/tools/zotero/thumbnail.png',
    images: [
      '/images/tools/zotero/library.png',
      '/images/tools/zotero/references.png',
      '/images/tools/zotero/pdf-reader.png'
    ],
    documentationUrl: 'https://www.zotero.org/support',
    mainPurpose: 'To streamline the research process by providing powerful tools for organizing and citing academic sources.',
    userExperience: 'Researchers value Zotero\'s ease of use and robust feature set. The browser integration makes collecting sources effortless.'
  },
  {
    id: 'otter-ai',
    name: 'Otter.ai',
    description: 'Otter.ai is an AI-powered transcription and note-taking service that converts speech to text in real-time, with features for organizing and sharing conversations.',
    shortDescription: 'AI transcription for meetings and lectures',
    rating: 4.7,
    reviewCount: 320000,
    category: 'Productivity',
    categories: ['productivity'],
    pricing: {
      type: 'Freemium',
      details: [
        'Free plan with limits',
        'Pro plan at $16.99/month',
        'Business plan at $30/user/month'
      ]
    },
    features: [
      'Real-time transcription',
      'Meeting summarization',
      'Speaker identification',
      'Custom vocabulary',
      'Collaboration tools'
    ],
    useCases: [
      'Meeting documentation',
      'Lecture recording',
      'Interview transcription',
      'Content creation',
      'Note-taking'
    ],
    thumbnail: '/images/tools/otter-ai/thumbnail.png',
    images: [
      '/images/tools/otter-ai/transcription.png',
      '/images/tools/otter-ai/notes.png',
      '/images/tools/otter-ai/search.png'
    ],
    documentationUrl: 'https://otter.ai/help-center',
    mainPurpose: 'To make conversations more productive by providing accurate transcription and intelligent organization of spoken content.',
    userExperience: 'Users praise the accuracy of transcriptions and the helpful features for organizing and sharing content. The mobile app is particularly convenient.'
  },
  {
    id: 'jasper',
    name: 'Jasper',
    description: 'Jasper is an AI content generation platform that helps create high-quality marketing copy, blog posts, and social media content. It uses advanced language models to generate engaging content.',
    shortDescription: 'AI content creation and marketing assistant',
    rating: 4.7,
    reviewCount: 280000,
    category: 'Content Creation',
    categories: ['content'],
    pricing: {
      type: 'Subscription',
      details: [
        'Creator plan at $49/month',
        'Teams plan at $99/month',
        'Business plans custom priced'
      ]
    },
    features: [
      'Blog post generation',
      'Marketing copy creation',
      'Social media content',
      'SEO optimization',
      'Brand voice customization'
    ],
    useCases: [
      'Content marketing',
      'Social media management',
      'Email campaigns',
      'Product descriptions',
      'Ad copy creation'
    ],
    thumbnail: '/images/tools/jasper/thumbnail.png',
    images: [
      '/images/tools/jasper/editor.png',
      '/images/tools/jasper/templates.png',
      '/images/tools/jasper/campaigns.png'
    ],
    documentationUrl: 'https://www.jasper.ai/docs',
    mainPurpose: 'To streamline content creation by generating high-quality, engaging content that matches brand voice and marketing objectives.',
    userExperience: 'Marketing professionals appreciate the quality and consistency of generated content. The platform\'s templates and customization options make it highly versatile.'
  },
  {
    id: 'runway',
    name: 'Runway',
    description: 'Runway is an AI-powered creative suite for video editing, visual effects, and content generation. It combines various AI models to enable advanced video manipulation and creation.',
    shortDescription: 'AI video editing and visual effects platform',
    rating: 4.8,
    reviewCount: 180000,
    category: 'Creative Tools',
    categories: ['creative'],
    pricing: {
      type: 'Subscription',
      details: [
        'Free starter plan',
        'Standard at $15/month',
        'Pro at $35/month'
      ]
    },
    features: [
      'Video editing',
      'Motion tracking',
      'Green screen removal',
      'Text-to-video generation',
      'Style transfer'
    ],
    useCases: [
      'Video production',
      'Special effects',
      'Content creation',
      'Motion graphics',
      'Film editing'
    ],
    thumbnail: '/images/tools/runway/thumbnail.png',
    images: [
      '/images/tools/runway/editor.png',
      '/images/tools/runway/effects.png',
      '/images/tools/runway/generation.png'
    ],
    documentationUrl: 'https://docs.runwayml.com',
    mainPurpose: 'To democratize advanced video editing and effects by making AI-powered tools accessible to creators.',
    userExperience: 'Video creators love the intuitive interface and powerful AI features that simplify complex editing tasks.'
  },
  {
    id: 'deepl',
    name: 'DeepL',
    description: 'DeepL is an AI-powered translation service that provides highly accurate and natural-sounding translations across multiple languages. It excels at maintaining context and nuance.',
    shortDescription: 'Advanced AI translation platform',
    rating: 4.9,
    reviewCount: 750000,
    category: 'Language',
    categories: ['language'],
    pricing: {
      type: 'Freemium',
      details: [
        'Free plan with limits',
        'Pro at $25/month',
        'Business plans available'
      ]
    },
    features: [
      'Neural machine translation',
      'Document translation',
      'API access',
      'Glossary support',
      'Context preservation'
    ],
    useCases: [
      'Business communication',
      'Document translation',
      'Website localization',
      'Academic research',
      'Content creation'
    ],
    thumbnail: '/images/tools/deepl/thumbnail.png',
    images: [
      '/images/tools/deepl/translator.png',
      '/images/tools/deepl/document.png',
      '/images/tools/deepl/glossary.png'
    ],
    documentationUrl: 'https://www.deepl.com/docs-api',
    mainPurpose: 'To break down language barriers by providing accurate, context-aware translations that sound natural to native speakers.',
    userExperience: 'Users consistently rate DeepL as one of the most accurate translation services, particularly for maintaining context and professional tone.'
  },
  {
    id: 'replicate',
    name: 'Replicate',
    description: 'Replicate is a platform for running and deploying AI models in the cloud. It provides easy access to various open-source models and simplifies AI deployment.',
    shortDescription: 'Cloud platform for AI model deployment',
    rating: 4.6,
    reviewCount: 120000,
    category: 'Development',
    categories: ['development'],
    pricing: {
      type: 'Usage-based',
      details: [
        'Pay per compute time',
        'Custom enterprise plans',
        'Free tier available'
      ]
    },
    features: [
      'Model deployment',
      'API access',
      'Version control',
      'Collaborative development',
      'Custom training'
    ],
    useCases: [
      'AI research',
      'Model deployment',
      'Prototype development',
      'Cloud computing',
      'Machine learning'
    ],
    thumbnail: '/images/tools/replicate/thumbnail.png',
    images: [
      '/images/tools/replicate/dashboard.png',
      '/images/tools/replicate/deployment.png',
      '/images/tools/replicate/models.png'
    ],
    documentationUrl: 'https://replicate.com/docs',
    mainPurpose: 'To simplify AI model deployment and make powerful machine learning models accessible to developers.',
    userExperience: 'Developers appreciate the straightforward deployment process and the ability to quickly experiment with different models.'
  }
]; 