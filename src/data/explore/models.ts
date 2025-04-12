import { AITool } from '../types';

export const models: AITool[] = [
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
    otherUses: 'Advanced research in AI and language models',
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
  }
];
