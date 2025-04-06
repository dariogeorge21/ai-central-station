import { aiTools, type ToolCategory } from '@/data/aiTools';

export function getAllTools() {
  return aiTools;
}

export function getToolById(id: string) {
  return aiTools.find(tool => tool.id === id);
}

export function getToolsByCategory(category: ToolCategory) {
  return aiTools.filter(tool => tool.categories.includes(category));
} 