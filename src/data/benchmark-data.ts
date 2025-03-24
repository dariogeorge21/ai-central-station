// Define types for our data
export interface BenchmarkDataItem {
  modelId: string;
  modelName: string;
  inferenceTime: number;
  accuracy: number;
  memoryUsage: number;
  trainingTime: number;
  parameters: number;
  [key: string]: string | number; // Allow indexing with string keys
}

export interface ModelDetail {
  name: string;
  category: string;
  description: string;
  releaseDate: string;
}

export interface ModelDetailsMap {
  [key: string]: ModelDetail;
}

export interface CategoryCount {
  category: string;
  count: number;
}

// Sample benchmark data for AI models
export const benchmarkData: BenchmarkDataItem[] = [
  {
    modelId: 'gpt4',
    modelName: 'GPT-4',
    inferenceTime: 125.45,
    accuracy: 0.94,
    memoryUsage: 16384,
    trainingTime: 720,
    parameters: 1500
  },
  {
    modelId: 'gpt3-5',
    modelName: 'GPT-3.5 Turbo',
    inferenceTime: 87.21,
    accuracy: 0.91,
    memoryUsage: 8192,
    trainingTime: 480,
    parameters: 175
  },
  {
    modelId: 'claude3',
    modelName: 'Claude 3 Opus',
    inferenceTime: 110.32,
    accuracy: 0.93,
    memoryUsage: 12288,
    trainingTime: 650,
    parameters: 1000
  },
  {
    modelId: 'llama3',
    modelName: 'Llama 3',
    inferenceTime: 95.68,
    accuracy: 0.89,
    memoryUsage: 10240,
    trainingTime: 520,
    parameters: 70
  },
  {
    modelId: 'gemini',
    modelName: 'Gemini Pro',
    inferenceTime: 102.76,
    accuracy: 0.92,
    memoryUsage: 11264,
    trainingTime: 580,
    parameters: 120
  },
  {
    modelId: 'mistral',
    modelName: 'Mistral 7B',
    inferenceTime: 78.34,
    accuracy: 0.87,
    memoryUsage: 7168,
    trainingTime: 320,
    parameters: 7
  },
  {
    modelId: 'mpt30b',
    modelName: 'MPT 30B',
    inferenceTime: 120.65,
    accuracy: 0.88,
    memoryUsage: 15360,
    trainingTime: 610,
    parameters: 30
  },
  {
    modelId: 'falcon40b',
    modelName: 'Falcon 40B',
    inferenceTime: 135.42,
    accuracy: 0.89,
    memoryUsage: 20480,
    trainingTime: 680,
    parameters: 40
  },
  {
    modelId: 'stable-diffusion-3',
    modelName: 'Stable Diffusion 3',
    inferenceTime: 892.12,
    accuracy: 0.88,
    memoryUsage: 12288,
    trainingTime: 760,
    parameters: 3.5
  },
  {
    modelId: 'dalle3',
    modelName: 'DALL-E 3',
    inferenceTime: 987.65,
    accuracy: 0.91,
    memoryUsage: 16384,
    trainingTime: 820,
    parameters: 12
  },
  {
    modelId: 'midjourney',
    modelName: 'Midjourney v5',
    inferenceTime: 1024.38,
    accuracy: 0.90,
    memoryUsage: 15360,
    trainingTime: 780,
    parameters: 10
  },
  {
    modelId: 'whisper',
    modelName: 'Whisper Large v3',
    inferenceTime: 456.78,
    accuracy: 0.92,
    memoryUsage: 8192,
    trainingTime: 540,
    parameters: 1.5
  },
  {
    modelId: 'suno-v3',
    modelName: 'Suno v3',
    inferenceTime: 642.31,
    accuracy: 0.87,
    memoryUsage: 10240,
    trainingTime: 620,
    parameters: 2.5
  },
  {
    modelId: 'palm2',
    modelName: 'PaLM 2',
    inferenceTime: 115.23,
    accuracy: 0.90,
    memoryUsage: 12288,
    trainingTime: 600,
    parameters: 340
  },
  {
    modelId: 'bloom',
    modelName: 'BLOOM 176B',
    inferenceTime: 155.87,
    accuracy: 0.88,
    memoryUsage: 24576,
    trainingTime: 720,
    parameters: 176
  }
];

// Model details for additional information
export const modelDetails: ModelDetailsMap = {
  'gpt4': {
    name: 'GPT-4',
    category: 'llm',
    description: 'OpenAI\'s most advanced large language model, optimized for complex reasoning and instruction following.',
    releaseDate: '2023-03-14'
  },
  'gpt3-5': {
    name: 'GPT-3.5 Turbo',
    category: 'llm',
    description: 'Efficient large language model from OpenAI, optimized for chat and instruction following.',
    releaseDate: '2022-11-30'
  },
  'claude3': {
    name: 'Claude 3 Opus',
    category: 'llm',
    description: 'Anthropic\'s flagship language model with state-of-the-art reasoning capabilities.',
    releaseDate: '2024-03-04'
  },
  'llama3': {
    name: 'Llama 3',
    category: 'llm',
    description: 'Meta\'s open-source large language model with strong multilingual capabilities.',
    releaseDate: '2024-04-18'
  },
  'gemini': {
    name: 'Gemini Pro',
    category: 'multimodal',
    description: 'Google\'s multimodal model capable of understanding text, images, audio and video.',
    releaseDate: '2023-12-06'
  },
  'mistral': {
    name: 'Mistral 7B',
    category: 'llm',
    description: 'Efficient open-source language model by Mistral AI with strong reasoning capabilities.',
    releaseDate: '2023-09-27'
  },
  'mpt30b': {
    name: 'MPT 30B',
    category: 'llm',
    description: 'MosaicML\'s parameter-efficient transformer model with strong performance.',
    releaseDate: '2023-05-05'
  },
  'falcon40b': {
    name: 'Falcon 40B',
    category: 'llm',
    description: 'Open source language model from TII with strong multilingual capabilities.',
    releaseDate: '2023-05-25'
  },
  'stable-diffusion-3': {
    name: 'Stable Diffusion 3',
    category: 'vision',
    description: 'Stability AI\'s latest text-to-image diffusion model with photorealistic generation.',
    releaseDate: '2024-03-28'
  },
  'dalle3': {
    name: 'DALL-E 3',
    category: 'vision',
    description: 'OpenAI\'s text-to-image generation model with high creative control.',
    releaseDate: '2023-10-11'
  },
  'midjourney': {
    name: 'Midjourney v5',
    category: 'vision',
    description: 'Highly detailed text-to-image model focused on artistic and realistic outputs.',
    releaseDate: '2023-03-15'
  },
  'whisper': {
    name: 'Whisper Large v3',
    category: 'audio',
    description: 'OpenAI\'s speech recognition model with multilingual transcription capabilities.',
    releaseDate: '2023-09-18'
  },
  'suno-v3': {
    name: 'Suno v3',
    category: 'audio',
    description: 'Advanced text-to-music generation model with high-quality output.',
    releaseDate: '2024-02-20'
  },
  'palm2': {
    name: 'PaLM 2',
    category: 'llm',
    description: 'Google\'s language model with strong reasoning and multilingual capabilities.',
    releaseDate: '2023-05-10'
  },
  'bloom': {
    name: 'BLOOM 176B',
    category: 'llm',
    description: 'Large multilingual language model developed by BigScience, supporting 46+ languages.',
    releaseDate: '2022-07-12'
  }
};

// Model category distribution for radar chart
export const modelCategories: CategoryCount[] = [
  { category: 'Language Models', count: 8 },
  { category: 'Vision Models', count: 3 },
  { category: 'Multimodal Models', count: 1 },
  { category: 'Audio Models', count: 2 },
  { category: 'Reinforcement Learning', count: 1 }
]; 