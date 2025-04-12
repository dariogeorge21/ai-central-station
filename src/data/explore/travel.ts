import { AITool } from '../types';

export const travel: AITool[] = [
    {
      id: 'wanderlog',
      name: 'Wanderlog',
      description: 'AI travel planner that helps create itineraries and discover places',
      logoUrl: 'https://th.bing.com/th/id/OIP.9O3YgY4fQouUxiAiRuF7OgHaEK?rs=1&pid=ImgDetMain',
      categories: ['productivity', 'virtual-assistants', 'travel'],
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
      logoUrl: 'https://th.bing.com/th/id/OIP.rmHH_Hk08i1tzoac0QTo_QHaFj?rs=1&pid=ImgDetMain',
      categories: ['productivity', 'virtual-assistants', 'travel'],
      mainUse: 'Price prediction for travel bookings',
      pricing: 'Free with commission on bookings',
      otherUses: 'Flight tracking, hotel deals, travel advice',
      userExperience: 'Simple app with color-coded calendar for best prices',
      websiteUrl: 'https://www.hopper.com/',
      rating: 4
    }
  ];