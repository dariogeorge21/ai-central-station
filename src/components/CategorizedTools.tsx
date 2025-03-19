import Image from 'next/image';
import { AITool } from '@/data/ai-tools';
import { categoryDescriptions } from './ToolsNavigation';

interface CategorizedToolsProps {
  tools: AITool[];
  category: string;
}

export function CategorizedTools({ tools, category }: CategorizedToolsProps) {
  const filteredTools = tools.filter(tool => tool.categories.includes(category));

  return (
    <div className="container py-8">
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-8 p-4 bg-muted/50 rounded-lg">
          {categoryDescriptions[category]}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTools.map((tool) => (
          <div
            key={tool.id}
            className="group relative rounded-lg bg-background border p-6 hover:shadow-lg transition-all hover:scale-[1.02]"
          >
            <div className="aspect-[4/3] relative mb-4 rounded-md overflow-hidden">
              <Image
                src={tool.thumbnail}
                alt={`${tool.name} interface`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{tool.name}</h3>
              <div className="flex items-center bg-muted px-2 py-1 rounded-full">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="text-sm font-medium">{tool.rating}</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              {tool.shortDescription}
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <span className="font-medium mr-2">Pricing:</span>
                <span className="text-muted-foreground">{tool.pricing.type}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tool.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={tool.documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span className="sr-only">Learn more about {tool.name}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
} 