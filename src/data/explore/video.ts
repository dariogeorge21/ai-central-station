import { AITool } from '../types';

export const video: AITool[] = [
  // From specializedAiTools.ts (after category mapping)
  {
    id: 'runwayml',
    name: 'RunwayML',
    description: 'AI-powered creative tools for video editing and generation',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS963-3n2HMFdshUo-2dy9QFo8KcXLBKTuUPA&s',
    categories: ['video', 'content-creation'],
    mainUse: 'AI video editing and generation',
    pricing: 'Free trial with paid plans',
    otherUses: 'Green screen, motion tracking, style transfer',
    userExperience: 'Professional video editing interface',
    websiteUrl: 'https://runwayml.com/',
    rating: 4
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'AI-powered video and audio editing platform',
    logoUrl: 'https://media.licdn.com/dms/image/v2/C560BAQH-JSJoyhfGSQ/company-logo_200_200/company-logo_200_200/0/1632365978881/descript_logo?e=2147483647&v=beta&t=PV2sVuy8wjQXMhgGHC0JkGxZam2YgK81UHVeSuIqSpI',
    categories: ['video', 'content-creation'],
    mainUse: 'Video editing through text',
    pricing: 'Free trial with paid plans from $12/month',
    otherUses: 'Podcast editing, transcription, screen recording',
    userExperience: 'Text-based video editing interface',
    websiteUrl: 'https://www.descript.com/',
    rating: 4
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'AI video generation platform with virtual presenters',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBVPuO6mSZpO-V9reoKRB8vM8h_PUeF1FAQ&s',
    categories: ['video', 'content-creation'],
    mainUse: 'Creating AI-powered video presentations',
    pricing: 'Starting at $30/month',
    otherUses: 'Training videos, marketing content, localization',
    userExperience: 'Simple interface for video creation',
    websiteUrl: 'https://www.synthesia.io/',
    rating: 4
  }
];