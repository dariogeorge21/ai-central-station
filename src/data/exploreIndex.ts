import { AITool } from './types';
export type { AITool } from './types';

export type ToolCategory =
  | 'models'
  | 'chatbots'
  | 'search-engines'
  | 'local-search'
  | 'writing'
  | 'chatgpt-extensions'
  | 'productivity'
  | 'meeting'
  | 'academics'
  | 'text-generators'
  | 'developer'
  | 'code'
  | 'website-builders'
  | 'voice'
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


export const categoryLabels: Record<ToolCategory, string> = {
  models: 'AI Models',
  chatbots: 'Chatbots',
  'search-engines': 'Search Engines',
  'local-search': 'Local Search',
  writing: 'Writing Assistants',
  'chatgpt-extensions': 'ChatGPT Extensions',
  productivity: 'Productivity',
  meeting: 'Meeting Assistants',
  academics: 'Academic Tools',
  'text-generators': 'Text Generators',
  developer: 'Developer Tools',
  code: 'Code Tools',
  'website-builders': 'Website Builders',
  voice: 'Voice Cloning',
  'virtual-assistants': 'Virtual Assistants',
  translation: 'Translation',
  'social-media': 'Social Media',
  sales: 'Sales Tools',
  recruitment: 'Recruitment',
  email: 'Email Tools',
  'customer-support': 'Customer Support',
  'content-creation': 'Content Creation',
  'browser-extensions': 'Browser Extensions',
  design: 'Design Tools',
  finance: 'Finance Tools',
  health: 'Health & Wellness',
  'language-learning': 'Language Learning',
  travel: 'Travel & Navigation',
  home: 'Home Management',
  music: 'Music Generation',
  video: 'Video Creation',
};

import { models } from './explore/models';
import { chatbots } from './explore/chatbots';
import { writing } from './explore/writing';
import { code } from './explore/code';
import { design } from './explore/design';
import { contentCreation } from './explore/contentCreation';
import { searchEngines } from './explore/searchEngines';
import { finance } from './explore/finance';
import { health } from './explore/health';
import { languageLearning } from './explore/languageLearning';
import { travel } from './explore/travel';
import { home } from './explore/home';
import { music } from './explore/music';
import { video } from './explore/video';
import { academics } from './explore/academics';
import { productivity } from './explore/productivity';
import { meeting } from './explore/meeting';
import { email } from './explore/email';
import { browserExtensions } from './explore/browserExtensions';
import { developer } from './explore/developer';
import { textGenerators } from './explore/textGenerators';
import { localSearch } from './explore/localSearch';
import { socialMedia } from './explore/socialMedia';
import { sales } from './explore/sales';
import { recruitment } from './explore/recruitment';
import { customerSupport } from './explore/customerSupport';
import { translation } from './explore/translation';
import { virtualAssistants } from './explore/virtualAssistants';
import { voice } from './explore/voice';
import { websiteBuilders } from './explore/websiteBuilders';
import { chatgptExtensions } from './explore/chatgptExtensions';

export const aiTools = [
  ...models,
  ...chatbots,
  ...writing,
  ...code,
  ...design,
  ...contentCreation,
  ...searchEngines,
  ...finance,
  ...health,
  ...languageLearning,
  ...travel,
  ...home,
  ...music,
  ...video,
  ...academics,
  ...productivity,
  ...meeting,
  ...email,
  ...browserExtensions,
  ...developer,
  ...textGenerators,
  ...localSearch,
  ...socialMedia,
  ...sales,
  ...recruitment,
  ...customerSupport,
  ...translation,
  ...virtualAssistants,
  ...voice,
  ...websiteBuilders,
  ...chatgptExtensions,
];

const validTools = aiTools.filter(tool => tool.name && tool.websiteUrl);

const uniqueTools = Array.from(
  new Map(validTools.map(tool => [tool.name + tool.websiteUrl, tool])).values()
);

export default uniqueTools;