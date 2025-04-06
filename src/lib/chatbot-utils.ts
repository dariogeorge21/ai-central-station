import { aiTools, ToolCategory, categoryLabels } from '@/data/aiTools';

// Function to get tools by category
export function getToolsByCategory(category: ToolCategory) {
  return aiTools.filter(tool => tool.categories.includes(category));
}

// Function to get tools by search term
export function searchTools(searchTerm: string) {
  const lowercaseTerm = searchTerm.toLowerCase();
  return aiTools.filter(tool => 
    tool.name.toLowerCase().includes(lowercaseTerm) || 
    tool.description.toLowerCase().includes(lowercaseTerm) ||
    tool.mainUse.toLowerCase().includes(lowercaseTerm) ||
    (tool.otherUses && tool.otherUses.toLowerCase().includes(lowercaseTerm))
  );
}

// Function to get tools by multiple categories
export function getToolsByCategories(categories: ToolCategory[]) {
  return aiTools.filter(tool => 
    categories.some(category => tool.categories.includes(category))
  );
}

// Function to get popular tools
export function getPopularTools(limit = 5) {
  // Sort by rating and return top N
  return [...aiTools]
    .filter(tool => tool.rating !== undefined)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, limit);
}

// Function to parse user query and return relevant tool categories
export function parseQueryForCategories(query: string): ToolCategory[] {
  const query_lower = query.toLowerCase();
  const relevantCategories: ToolCategory[] = [];
  
  // Map common terms to categories
  const termToCategoryMap: Record<string, ToolCategory[]> = {
    'writing': ['writing', 'content-creation', 'text-generators'],
    'write': ['writing', 'content-creation', 'text-generators'],
    'text': ['text-generators', 'writing'],
    'content': ['content-creation'],
    'article': ['writing', 'content-creation'],
    'blog': ['writing', 'content-creation'],
    'email': ['email', 'writing'],
    'code': ['code', 'developer'],
    'coding': ['code', 'developer'],
    'programming': ['code', 'developer'],
    'develop': ['developer', 'code'],
    'development': ['developer', 'code'],
    'design': ['design'],
    'ui': ['design'],
    'ux': ['design'],
    'graphic': ['design'],
    'image': ['design'],
    'picture': ['design'],
    'chat': ['chatbots'],
    'conversation': ['chatbots'],
    'productivity': ['productivity'],
    'efficient': ['productivity'],
    'organize': ['productivity'],
    'search': ['search-engines'],
    'find': ['search-engines'],
    'research': ['search-engines', 'academia'],
    'academic': ['academia'],
    'student': ['academia'],
    'study': ['academia'],
    'meeting': ['meeting'],
    'voice': ['voice-cloning'],
    'speech': ['voice-cloning'],
    'audio': ['voice-cloning', 'music'],
    'website': ['website-builders'],
    'webpage': ['website-builders'],
    'assistant': ['virtual-assistants'],
    'translate': ['translation'],
    'language': ['translation', 'language-learning'],
    'learn language': ['language-learning'],
    'social': ['social-media'],
    'social media': ['social-media'],
    'sales': ['sales'],
    'selling': ['sales'],
    'recruit': ['recruitment'],
    'hiring': ['recruitment'],
    'hr': ['recruitment'],
    'customer': ['customer-support'],
    'support': ['customer-support'],
    'browser': ['browser-extensions'],
    'extension': ['browser-extensions'],
    'plugin': ['browser-extensions', 'chatgpt-extensions'],
    'finance': ['finance'],
    'money': ['finance'],
    'financial': ['finance'],
    'health': ['health'],
    'wellness': ['health'],
    'travel': ['travel'],
    'trip': ['travel'],
    'vacation': ['travel'],
    'home': ['home'],
    'house': ['home'],
    'music': ['music'],
    'song': ['music'],
    'melody': ['music'],
    'video': ['video'],
    'film': ['video'],
    'movie': ['video'],
  };
  
  // Check for terms in the query
  for (const [term, categories] of Object.entries(termToCategoryMap)) {
    if (query_lower.includes(term)) {
      categories.forEach(category => {
        if (!relevantCategories.includes(category)) {
          relevantCategories.push(category);
        }
      });
    }
  }
  
  return relevantCategories;
}

// Function to format tools into a readable message
export function formatToolsForChat(tools: typeof aiTools, maxTools = 4) {
  if (tools.length === 0) {
    return "I couldn't find any tools matching your criteria.";
  }
  
  // Limit the number of tools to avoid long messages
  const limitedTools = tools.slice(0, maxTools);
  
  const formattedTools = limitedTools.map(tool => {
    const categories = tool.categories.map(cat => categoryLabels[cat]).join(', ');
    const pricingInfo = tool.pricing || 'Pricing information not available';
    const rating = tool.rating ? `Rating: ${tool.rating}/5` : '';
    
    return `**${tool.name}**
• ${tool.description}
• Main use: ${tool.mainUse}
• Pricing: ${pricingInfo}
• Categories: ${categories}
${rating ? '• ' + rating : ''}
• Website: ${tool.websiteUrl}`;
  }).join('\n\n');
  
  const moreToolsText = tools.length > maxTools 
    ? `\n\nI found ${tools.length} tools matching your criteria. These are the ${maxTools} most relevant ones. You can explore more tools in our /explore section.`
    : '';
  
  return formattedTools + moreToolsText;
} 