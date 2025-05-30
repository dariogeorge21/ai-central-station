import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FiArrowLeft, FiExternalLink, FiStar } from 'react-icons/fi';
import { getAllTools, getToolById } from '@/lib/tools';
import { Metadata } from 'next';
import { AITool } from '@/data/exploreIndex';

// Type for the internal parameters
type PageParams = {
  toolid: string;
};

// Type for the component props that satisfies Next.js expectations
type Props = {
  params: PageParams;
};

export async function generateStaticParams(): Promise<Array<PageParams>> {
  const tools: AITool[] = getAllTools();
  return tools.map((tool: AITool) => ({
    toolid: tool.id,
  }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { toolid } = params;
  const tool = getToolById(toolid);
  
  if (!tool) {
    return {
      title: 'Tool Not Found',
      description: 'The requested AI tool could not be found.',
    };
  }
  
  return {
    title: `${tool.name} - AI Tool Summary`,
    description: tool.description,
  };
}

// Define the component with the correct props type
export default async function ToolPage({ params }: Props) {
  const { toolid } = params;
  const tool = getToolById(toolid);
  
  if (!tool) {
    notFound();
  }
  
  const allTools = getAllTools();
  
  // Helper function to format text content - cleans up potential whitespace issues
  const formatTextContent = (content: string) => {
    return content
      .replace(/\n\s+/g, '\n') // Remove excess spaces after newlines
      .replace(/\n{3,}/g, '\n\n') // Replace 3+ consecutive newlines with 2
      .trim();
  };
  
  // Use a default rating of 4.0 if undefined
  const rating = tool.rating ?? 4.0;
  
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-6">
          <Link href="/documentation" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <FiArrowLeft className="mr-2" />
            Back to All AI Tools
        </Link>
        </div>
        
        {/* Tool Header */}
        <header className="mb-10">
          <div className="flex items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold text-white">{tool.name}</h1>
              <div className="flex items-center mt-1">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'} ${i === Math.floor(rating) && rating % 1 > 0 ? 'text-yellow-300/70' : ''}`} 
                    />
                  ))}
                  <span className="ml-2 text-gray-300">{rating}/5</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tool.categories.map((category: string) => (
                    <span key={category} className="px-2 py-1 bg-gray-800 text-xs rounded-md text-gray-300">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <a 
                href={tool.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
              Visit Official Website <FiExternalLink className="ml-2" />
            </a>
            </div>
          </header>
          
        {/* Tool Content */}
        <div className="bg-gray-800 rounded-xl p-8 mb-10 shadow-lg">
          <article className="text-gray-300 space-y-8">
            {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 tech-title">Introduction & Overview</h2>
            <div className="prose prose-invert prose-lg max-w-none text-gray-300" dangerouslySetInnerHTML={{ __html: formatTextContent(getIntroduction(tool)) }} />
          </section>
          
            {/* Core Features */}
          <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 tech-title">Core Features & Capabilities</h2>
            <div className="prose prose-invert prose-lg max-w-none text-gray-300" dangerouslySetInnerHTML={{ __html: formatTextContent(getCoreFeatures(tool)) }} />
          </section>
          
            {/* Use Cases */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 tech-title">Primary Use Cases</h2>
            <div className="prose prose-invert prose-lg max-w-none text-gray-300" dangerouslySetInnerHTML={{ __html: formatTextContent(getPrimaryUseCases(tool)) }} />
          </section>
          
            {/* Pricing */}
          <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 tech-title">Pricing Information</h2>
              <div className="prose prose-invert prose-lg max-w-none text-gray-300" dangerouslySetInnerHTML={{ __html: formatTextContent(getPricingInfo(tool)) }} />
          </section>
          
            {/* Alternatives */}
          <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 tech-title">Alternative Tools</h2>
              <div className="prose prose-invert prose-lg max-w-none text-gray-300" dangerouslySetInnerHTML={{ __html: formatTextContent(getAlternatives(tool, allTools)) }} />
            </section>
          </article>
            </div>
        
        {/* Navigation Button */}
        <div className="flex justify-center mt-8 mb-16">
            <Link 
              href="/documentation" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-lg"
            >
            <FiArrowLeft className="mr-2" />
            Back to All AI Tools
            </Link>
          </div>
      </div>
      </div>
  );
}

// Only keep the functions that are used in the component
function getIntroduction(tool: AITool) {
  const rating = tool.rating ?? 4.0;
  
  return `
    <p class="mb-4 text-lg">${tool.name} is a powerful ${tool.categories.join(' and ')} tool designed for ${tool.mainUse.toLowerCase()}.</p>
    
    <p class="mb-4">${tool.description}</p>
    
    <p class="mb-4">With a rating of ${rating}/5, ${tool.name} has established itself as ${
      rating >= 4.5 ? 'a market-leading solution' : 
      rating >= 4.0 ? 'a highly respected option' : 
      rating >= 3.5 ? 'a solid performer' : 
      'an emerging player'
    } in the ${tool.categories.join(' and ')} space.</p>
  `;
}

function getCoreFeatures(tool: AITool) {
  // Base features in HTML format
  let featuresHtml = `
    <p>${tool.name} offers a rich suite of features designed to maximize efficiency and quality:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li><strong>Primary functionality:</strong> ${tool.mainUse}</li>
      
      <li><strong>User interface:</strong> ${tool.userExperience || 'An intuitive, user-friendly interface designed for accessibility across different user skill levels'}</li>
      
      <li><strong>Integration capabilities:</strong> Seamless connectivity with other tools and platforms in the ${tool.categories.join(' and ')} ecosystem</li>
      
      <li><strong>Performance optimization:</strong> Advanced algorithms that ensure fast processing and high-quality outputs</li>
      
      <li><strong>Customization options:</strong> Settings and parameters that allow users to tailor the experience to their specific needs</li>
    </ul>
  `;
  
  // Add extra features if they exist
  if (tool.otherUses) {
    featuresHtml += `
      <p>Beyond its core functionality, ${tool.name} also excels in these supplementary areas:</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        ${tool.otherUses.split(',').map((use: string) => `<li>${use.trim()}</li>`).join('')}
      </ul>
      
      <p>These additional capabilities expand the tool's utility beyond its primary purpose, making it a versatile solution for a wide range of use cases.</p>
    `;
  }
    
  return featuresHtml;
}

function getPrimaryUseCases(tool: AITool) {
  return `
    <p>Based on our analysis, ${tool.name} excels in the following scenarios:</p>
    
    <div class="mb-6">
      <h3 class="text-lg font-semibold text-white mb-2">Target Audience</h3>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        ${generateAudienceList(tool).map((item: string) => `<li>${item}</li>`).join('')}
      </ul>
    </div>
    
    <div>
      <h3 class="text-lg font-semibold text-white mb-2">Real-world Applications</h3>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        ${generateApplicationsList(tool).map((item: string) => `<li>${item}</li>`).join('')}
      </ul>
    </div>
    
    <p class="mt-4">These use cases leverage ${tool.name}'s strengths in ${tool.categories.join(' and ')}, making it particularly effective for both specialized and general scenarios in these domains.</p>
  `;
}

// Helper function to generate audience list based on tool categories and use case
function generateAudienceList(tool: AITool) {
  const baseAudiences = [
    `Professionals in the ${tool.categories[0]} industry seeking to optimize their workflow`,
    `Teams looking for solutions in ${tool.categories.join(' and ')} domains`,
    // Check if specific categories exist using a type-safe approach
    tool.categories.some(cat => cat === 'productivity') ? 'Anyone looking to improve their productivity and efficiency' : '',
    tool.categories.some(cat => cat === 'writing') ? 'Content creators and writers seeking AI assistance' : '',
    tool.categories.some(cat => cat === 'code') ? 'Developers and programmers looking for coding assistance' : '',
    tool.categories.some(cat => cat === 'academia') ? 'Researchers and academics in need of analytical tools' : '',
    tool.categories.some(cat => cat === 'design') ? 'Designers and creative professionals seeking inspiration' : '',
  ].filter(Boolean); // Remove empty entries
  
  // Additional audience types based on main use
  const mainUse = tool.mainUse.toLowerCase();
  const additionalAudiences = [];
  
  if (mainUse.includes('data') || mainUse.includes('analysis')) {
    additionalAudiences.push('Data analysts and data scientists');
  }
  if (mainUse.includes('learn') || mainUse.includes('education') || mainUse.includes('study')) {
    additionalAudiences.push('Students and educators');
  }
  if (mainUse.includes('business') || mainUse.includes('enterprise')) {
    additionalAudiences.push('Business owners and entrepreneurs');
  }
  
  // Combine base and additional audiences, ensuring no duplicates
  return [...new Set([...baseAudiences, ...additionalAudiences])];
}

// Helper function to generate applications list based on the tool's main use
function generateApplicationsList(tool: AITool) {
  const mainUseCase = tool.mainUse.toLowerCase();
  const applications = [
    `${tool.name} for ${mainUseCase}`,
    `Enhancing productivity in ${tool.categories.join(' and ')} workflows`,
  ];
  
  // Add specific applications based on categories
  if (tool.categories.some(cat => cat === 'writing' || cat === 'content-creation')) {
    applications.push('Creating high-quality content more efficiently');
    applications.push('Overcoming writer\'s block and generating fresh ideas');
  }
  
  if (tool.categories.some(cat => cat === 'code' || cat === 'developer')) {
    applications.push('Accelerating development workflows');
    applications.push('Simplifying debugging and code optimization');
  }
  
  if (tool.categories.some(cat => cat === 'design')) {
    applications.push('Streamlining the design process from concept to execution');
    applications.push('Generating design variations and exploring creative possibilities');
  }
  
  if (tool.categories.some(cat => cat === 'productivity')) {
    applications.push('Automating repetitive tasks to save time');
    applications.push('Organizing information and managing complex projects');
  }
  
  return applications;
}

function getPricingInfo(tool: AITool) {
  // Base pricing information in HTML format
  const pricingHtml = `
    <p class="mb-4">${tool.pricing}</p>
    
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div class="p-4 bg-gray-800/50 rounded-lg">
        <h4 class="font-medium text-blue-400 mb-2">Value Assessment</h4>
        <p class="text-gray-400 text-sm">
          ${
            tool.pricing.toLowerCase().includes('free') ? 'Excellent value with no financial investment required for basic functionality.' : 
            tool.pricing.toLowerCase().includes('trial') ? 'Try before you buy with a risk-free evaluation period.' : 
            'Consider the ROI based on time saved and quality improvements in your workflow.'
          }
        </p>
      </div>
      
      <div class="p-4 bg-gray-800/50 rounded-lg">
        <h4 class="font-medium text-blue-400 mb-2">Pricing Model</h4>
        <p class="text-gray-400 text-sm">
          ${
            tool.pricing.toLowerCase().includes('subscription') || tool.pricing.toLowerCase().includes('month') ? 'Subscription-based with recurring payments.' : 
            tool.pricing.toLowerCase().includes('one-time') ? 'One-time purchase with perpetual access.' : 
            tool.pricing.toLowerCase().includes('free') ? 'Free access with possible premium upgrades.' : 
            'Check the official website for detailed pricing structure.'
          }
        </p>
      </div>
      
      <div class="p-4 bg-gray-800/50 rounded-lg">
        <h4 class="font-medium text-blue-400 mb-2">Business Considerations</h4>
        <p class="text-gray-400 text-sm">
          ${
            tool.pricing.toLowerCase().includes('enterprise') ? 'Enterprise options available with custom pricing and additional features.' : 
            tool.pricing.toLowerCase().includes('team') ? 'Team plans offer collaboration features and volume discounts.' : 
            'Evaluate how this investment scales with your needs and team size.'
          }
        </p>
    </div>
    </div>
    
    <p class="text-gray-300 text-sm">
      <strong>Note:</strong> Pricing information may change over time. Visit the official website for the most current pricing details.
    </p>
  `;
  
  return pricingHtml;
} 

function getAlternatives(tool: AITool, allTools: AITool[]) {
  // Find up to 3 alternative tools in the same category
  const alternatives = allTools.filter(alt => 
    alt.id !== tool.id && // Not the same tool
    // Check if they share at least one category in a type-safe way
    alt.categories.some(altCat => tool.categories.some(toolCat => toolCat === altCat))
  ).slice(0, 3);
  
  if (alternatives.length === 0) {
    return `<p>No direct alternatives found in our database. This may be because ${tool.name} offers unique functionality or is a market leader in its category.</p>`;
  }
  
  return `
    <p>If you're considering alternatives to ${tool.name}, here are some options to explore:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-4">
      ${alternatives.map(alt => `
        <li>
          <strong>${alt.name}</strong> - ${alt.description}
          <div class="mt-1">
            <a href="${alt.websiteUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 inline-flex items-center">
              Visit Website <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </li>
      `).join('')}
    </ul>
    
    <p>Each of these alternatives offers similar functionality to ${tool.name}, but may differ in terms of pricing, feature set, or user experience.</p>
  `;
}