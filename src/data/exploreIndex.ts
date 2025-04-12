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

export const AllTools = [
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
  ...websiteBuilders
];

const uniqueTools = Array.from(
  new Map(AllTools.map(tool => [tool.name + tool.websiteUrl, tool])).values()
);

export default uniqueTools;

// Export a function to get tools by category
// // import { AITool } from '../explore/'; // Adjusted the path to the correct location

// export const getToolsByCategory = (category: ToolCategory): AITool[] => {
//   return exploreIndex.filter(tool => tool.categories.includes(category));
// };

// // Export a function to get tool by ID
// export const getToolById = (id: string): AITool | undefined => {
//   return exploreIndex.find(tool => tool.id === id);
// };