import { NextResponse } from 'next/server';

// This is a mock implementation. Replace with actual API integration
const mockNews = [
  {
    id: '1',
    title: 'OpenAI Announces GPT-5 Development Progress',
    description: 'OpenAI shares insights into the development of GPT-5, promising unprecedented advances in natural language processing and reasoning capabilities.',
    source: 'AI Tech News',
    imageUrl: 'https://source.unsplash.com/random/800x600?ai,technology',
    timestamp: new Date().toISOString(),
    url: 'https://example.com/news/1',
    category: 'research',
    region: 'na',
  },
  {
    id: '2',
    title: 'Google DeepMind Achieves Breakthrough in Protein Folding',
    description: 'New AI model demonstrates unprecedented accuracy in predicting protein structures, potentially revolutionizing drug discovery and biological research.',
    source: 'Science Daily',
    imageUrl: 'https://source.unsplash.com/random/800x600?science,laboratory',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    url: 'https://example.com/news/2',
    category: 'research',
    region: 'eu',
  },
  {
    id: '3',
    title: 'AI Startup Raises $100M for Autonomous Manufacturing',
    description: 'Revolutionary startup secures major funding to develop AI-powered manufacturing solutions, promising to transform industrial automation.',
    source: 'Tech Crunch',
    imageUrl: 'https://source.unsplash.com/random/800x600?robot,manufacturing',
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    url: 'https://example.com/news/3',
    category: 'startups',
    region: 'na',
  },
  {
    id: '4',
    title: 'EU Unveils New AI Regulation Framework',
    description: 'European Union announces comprehensive regulations for artificial intelligence development and deployment, setting global standards.',
    source: 'Policy Watch',
    imageUrl: 'https://source.unsplash.com/random/800x600?europe,government',
    timestamp: new Date(Date.now() - 10800000).toISOString(),
    url: 'https://example.com/news/4',
    category: 'policy',
    region: 'eu',
  },
  {
    id: '5',
    title: 'Microsoft Launches Advanced AI Development Platform',
    description: 'New platform combines cloud computing and AI capabilities to accelerate enterprise AI adoption and development.',
    source: 'Tech Review',
    imageUrl: 'https://source.unsplash.com/random/800x600?cloud,computing',
    timestamp: new Date(Date.now() - 14400000).toISOString(),
    url: 'https://example.com/news/5',
    category: 'products',
    region: 'na',
  },
  {
    id: '6',
    title: 'Asian Tech Giants Collaborate on AI Chip Development',
    description: 'Major Asian technology companies announce joint venture to develop next-generation AI processors.',
    source: 'Asia Tech Today',
    imageUrl: 'https://source.unsplash.com/random/800x600?microchip,electronics',
    timestamp: new Date(Date.now() - 18000000).toISOString(),
    url: 'https://example.com/news/6',
    category: 'industry',
    region: 'asia',
  },
  {
    id: '7',
    title: 'AI Model Achieves Human-Level Performance in Medical Diagnosis',
    description: 'Revolutionary AI system demonstrates exceptional accuracy in diagnosing complex medical conditions across multiple specialties.',
    source: 'Healthcare Innovation',
    imageUrl: 'https://source.unsplash.com/random/800x600?medical,hospital',
    timestamp: new Date(Date.now() - 21600000).toISOString(),
    url: 'https://example.com/news/7',
    category: 'research',
    region: 'eu',
  },
  {
    id: '8',
    title: 'AI Ethics Board Established by Major Tech Companies',
    description: 'Leading technology companies form joint ethics board to address AI development concerns and establish industry standards.',
    source: 'Tech Ethics Journal',
    imageUrl: 'https://source.unsplash.com/random/800x600?meeting,business',
    timestamp: new Date(Date.now() - 25200000).toISOString(),
    url: 'https://example.com/news/8',
    category: 'policy',
    region: 'na',
  },
  {
    id: '9',
    title: 'Breakthrough in AI-Powered Climate Modeling',
    description: 'Scientists develop advanced AI system for accurate climate prediction and environmental impact assessment.',
    source: 'Environmental Science Weekly',
    imageUrl: 'https://source.unsplash.com/random/800x600?climate,earth',
    timestamp: new Date(Date.now() - 28800000).toISOString(),
    url: 'https://example.com/news/9',
    category: 'research',
    region: 'eu',
  },
  {
    id: '10',
    title: 'AI Startup Revolutionizes Natural Language Processing',
    description: 'Innovative startup unveils groundbreaking NLP technology that promises to transform human-computer interaction.',
    source: 'Startup Insider',
    imageUrl: 'https://source.unsplash.com/random/800x600?startup,office',
    timestamp: new Date(Date.now() - 32400000).toISOString(),
    url: 'https://example.com/news/10',
    category: 'startups',
    region: 'asia',
  },
  {
    id: '11',
    title: 'AI-Powered Educational Platform Launches Globally',
    description: 'Revolutionary learning platform uses AI to provide personalized education experience for students worldwide.',
    source: 'EdTech Monthly',
    imageUrl: 'https://source.unsplash.com/random/800x600?education,learning',
    timestamp: new Date(Date.now() - 36000000).toISOString(),
    url: 'https://example.com/news/11',
    category: 'products',
    region: 'other',
  },
  {
    id: '12',
    title: 'Quantum Computing Breakthrough Enhances AI Capabilities',
    description: 'Researchers achieve significant advancement in quantum computing, promising exponential improvements in AI processing power.',
    source: 'Quantum Tech Review',
    imageUrl: 'https://source.unsplash.com/random/800x600?quantum,computer',
    timestamp: new Date(Date.now() - 39600000).toISOString(),
    url: 'https://example.com/news/12',
    category: 'research',
    region: 'na',
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const category = searchParams.get('category') || 'all';
  const region = searchParams.get('region') || 'all';

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Filter news based on category and region
  let filteredNews = [...mockNews];
  if (category !== 'all') {
    filteredNews = filteredNews.filter((item) => item.category === category);
  }
  if (region !== 'all') {
    filteredNews = filteredNews.filter((item) => item.region === region);
  }

  // Paginate results
  const itemsPerPage = 9;
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedNews = filteredNews.slice(start, end);

  return NextResponse.json({
    news: paginatedNews,
    hasMore: end < filteredNews.length,
  });
} 