import { AITool } from '../types';

export const video: AITool[] = [
  // From specializedAiTools.ts (after category mapping)
  {
    id: 'runwayml',
    name: 'RunwayML',
    description: 'AI-powered creative tools for video editing and generation',
    logoUrl: 'https://th.bing.com/th/id/OIP.8GYLf7GrAe8nOSXTDqjkpwHaHa?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.V8j9zX3H-rzptTWHbPqvqAAAAA?rs=1&pid=ImgDetMain',
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
    logoUrl: 'https://th.bing.com/th/id/OIP.YxzVJ8QoQQqk_EKjaWOYGwHaHa?rs=1&pid=ImgDetMain',
    categories: ['video', 'content-creation'],
    mainUse: 'Creating AI-powered video presentations',
    pricing: 'Starting at $30/month',
    otherUses: 'Training videos, marketing content, localization',
    userExperience: 'Simple interface for video creation',
    websiteUrl: 'https://www.synthesia.io/',
    rating: 4
  }
];