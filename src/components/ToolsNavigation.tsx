import { cn } from '@/lib/utils';

type Category = {
  id: string;
  name: string;
  description: string;
};

const categories: Category[] = [
  {
    id: 'development',
    name: 'Development & Coding',
    description: 'AI tools for software development, coding assistance, and machine learning'
  },
  {
    id: 'content',
    name: 'Content Creation & Writing',
    description: 'Tools for generating and improving written content'
  },
  {
    id: 'creative',
    name: 'Creative & Design',
    description: 'AI-powered tools for visual content creation and design'
  },
  {
    id: 'ai-assistants',
    name: 'General AI Assistants',
    description: 'Versatile AI assistants for various tasks'
  },
  {
    id: 'research',
    name: 'Research & Education',
    description: 'Tools for academic research and educational purposes'
  },
  {
    id: 'productivity',
    name: 'Productivity & Collaboration',
    description: 'AI tools for improving workflow and team collaboration'
  },
  {
    id: 'language',
    name: 'Language & Translation',
    description: 'AI-powered language translation and processing tools'
  }
];

interface ToolsNavigationProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function ToolsNavigation({ activeCategory, onCategoryChange }: ToolsNavigationProps) {
  return (
    <nav className="flex space-x-1 rounded-lg bg-muted p-1" aria-label="Tools categories">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
            activeCategory === category.id
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
          )}
        >
          {category.name}
        </button>
      ))}
    </nav>
  );
}

export const categoryDescriptions = categories.reduce((acc, category) => ({
  ...acc,
  [category.id]: category.description
}), {} as Record<string, string>); 