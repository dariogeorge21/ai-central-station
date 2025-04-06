import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiExternalLink, FiStar } from 'react-icons/fi';
import { getAllTools, getToolById } from '@/lib/tools';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const tools = getAllTools();
  return tools.map(tool => ({
    toolId: tool.id,
  }));
}

export async function generateMetadata({ params }: { params: { toolId: string } }): Promise<Metadata> {
  const tool = getToolById(params.toolId);
  
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

export default function ToolPage({ params }: { params: { toolId: string } }) {
  const tool = getToolById(params.toolId);
  
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

// Helper functions to generate content for each section based on the tool
function getIntroduction(tool: any) {
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

function getCoreFeatures(tool: any) {
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

function getPrimaryUseCases(tool: any) {
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

// Helper function to generate target audience based on tool categories and use case
function generateAudienceList(tool: any) {
  const baseAudiences = [
    `Professionals in the ${tool.categories[0]} industry seeking to optimize their workflow`,
    `Teams looking for collaborative ${tool.categories.join('/')} solutions`,
  ];
  
  // Add more specific audiences based on categories
  if (tool.categories.includes('productivity')) {
    baseAudiences.push('Knowledge workers managing multiple projects or tasks');
    baseAudiences.push('Remote teams requiring centralized workflow management');
  }
  
  if (tool.categories.includes('writing')) {
    baseAudiences.push('Content creators needing assistance with drafting or editing');
    baseAudiences.push('Marketing professionals developing various types of written content');
  }
  
  if (tool.categories.includes('research') || tool.categories.includes('education')) {
    baseAudiences.push('Researchers gathering and analyzing information');
    baseAudiences.push('Students working on academic assignments and projects');
  }
  
  if (tool.categories.includes('creative') || tool.categories.includes('design')) {
    baseAudiences.push('Designers seeking AI assistance for ideation or execution');
    baseAudiences.push('Creative professionals exploring new artistic possibilities');
  }

  return baseAudiences;
}

// Helper function to generate applications list based on the tool's main use
function generateApplicationsList(tool: any) {
  const mainUseCase = tool.mainUse.toLowerCase();
  const applications = [
    `Enhancing efficiency in ${mainUseCase}`,
    `Integrating AI capabilities into existing ${tool.categories.join('/')} workflows`,
  ];
  
  // Add more specific applications based on the tool's main use
  if (mainUseCase.includes('writing') || mainUseCase.includes('content')) {
    applications.push('Creating and refining written content across various formats');
    applications.push('Ensuring consistency and clarity in communication materials');
  }
  
  if (mainUseCase.includes('analysis') || mainUseCase.includes('data')) {
    applications.push('Extracting insights from complex datasets');
    applications.push('Generating actionable reports from raw information');
  }
  
  if (mainUseCase.includes('design') || mainUseCase.includes('creative')) {
    applications.push('Generating visual assets for marketing or product materials');
    applications.push('Streamlining design processes through AI assistance');
  }
  
  if (mainUseCase.includes('communication') || mainUseCase.includes('translation')) {
    applications.push('Facilitating cross-language communication in global teams');
    applications.push('Improving accessibility of content across different languages');
  }
  
  return applications;
}

function getDetailedPricing(tool: any) {
  const pricingInfo = tool.pricing || 'Pricing information not available';
  
  // Generate pricing tiers based on basic info
  let pricingText = '';
  
  if (pricingInfo.toLowerCase().includes('free')) {
    pricingText += `
      <p class="text-gray-300 mb-4">
        <strong class="text-white">Free Tier:</strong> ${tool.name} offers a free option that provides access to basic features, allowing users to explore the tool's capabilities without financial commitment.
      </p>
    `;
  }
  
  if (pricingInfo.toLowerCase().includes('premium') || pricingInfo.match(/\$\d+/)) {
    pricingText += `
      <p class="text-gray-300 mb-4">
        <strong class="text-white">Premium Plans:</strong> For users requiring more advanced features or higher usage limits, ${tool.name} offers premium subscription options. ${pricingInfo}
      </p>
    `;
  }
  
  if (pricingInfo.toLowerCase().includes('enterprise') || pricingInfo.toLowerCase().includes('custom')) {
    pricingText += `
      <p class="text-gray-300 mb-4">
        <strong class="text-white">Enterprise Solutions:</strong> For organizations with specific requirements or larger teams, ${tool.name} provides custom enterprise packages with tailored pricing and features.
      </p>
    `;
  }
  
  if (pricingInfo.toLowerCase().includes('api') || tool.categories.includes('developer')) {
    pricingText += `
      <p class="text-gray-300 mb-4">
        <strong class="text-white">API Access:</strong> Developers looking to integrate ${tool.name} into their applications can access the API with appropriate pricing based on usage volume and requirements.
      </p>
    `;
  }
  
  return pricingText || `
    <p class="text-gray-300 mb-4">
      For the most current and detailed pricing information, users are encouraged to visit the official ${tool.name} website. Pricing structures may include free trials, monthly or annual subscription options, and special rates for educational or non-profit organizations.
    </p>
  `;
}

function getUserExperience(tool: any) {
  const userExp = tool.userExperience || 'The user experience is designed to be intuitive and accessible';
  
  return `
    <p class="text-gray-300 mb-4">
      ${userExp}. Users of ${tool.name} generally report a positive experience with the platform, noting its ${tool.rating && tool.rating >= 4 ? 'high-quality outputs' : 'functional interface'} and ${tool.rating && tool.rating >= 4 ? 'efficient workflow' : 'useful features'}.
    </p>
    
    <p class="text-gray-300 mb-4">
      The community around ${tool.name} has grown steadily, with users sharing insights, templates, and best practices across various forums and social media platforms. ${tool.rating && tool.rating >= 4 ? 'The tool has received particularly positive feedback for its ' + tool.mainUse.toLowerCase() + ' capabilities.' : 'User feedback has helped shape the tool\'s development, with regular updates addressing common requests and concerns.'}
    </p>
    
    <p class="text-gray-300 mb-4">
      In terms of performance, ${tool.name} ${tool.rating && tool.rating >= 4 ? 'excels' : 'performs adequately'} in handling typical tasks within its domain, with ${tool.rating && tool.rating >= 4 ? 'minimal latency' : 'reasonable response times'} and ${tool.rating && tool.rating >= 4 ? 'high-quality' : 'satisfactory'} outputs. The interface is designed to accommodate both beginners and advanced users, with a learning curve that most find manageable given the tool's capabilities.
    </p>
  `;
}

function getDevelopmentHistory(tool: any) {
  return `
    <p class="text-gray-300 mb-4">
      ${tool.name} emerged as part of the growing wave of specialized AI tools designed to address specific needs in the ${tool.categories.join(' and ')} space. While the exact launch date isn't specified in our data, the tool has evolved substantially since its initial release.
    </p>
    
    <p class="text-gray-300 mb-4">
      The development trajectory of ${tool.name} reflects the broader trends in AI advancement, with regular updates enhancing its core capabilities and expanding its feature set. The team behind the tool has demonstrated a commitment to continuous improvement, responding to user feedback and incorporating technological innovations to keep the platform relevant and competitive.
    </p>
    
    <p class="text-gray-300 mb-4">
      Notable milestones in the tool's evolution likely include:
    </p>
    
    <ul class="text-gray-300 list-disc pl-6 mb-4 space-y-1">
      <li>Initial launch with core ${tool.categories[0]} capabilities</li>
      <li>Expansion of features to include ${tool.otherUses || 'additional functionalities'}</li>
      <li>Interface refinements to enhance usability and accessibility</li>
      <li>Performance optimizations to improve speed and reliability</li>
      <li>Integration capabilities with complementary tools and platforms</li>
    </ul>
    
    <p class="text-gray-300 mb-4">
      As the AI landscape continues to evolve, ${tool.name} is positioned to adapt to emerging trends and technologies, ensuring its continued relevance for users in the ${tool.categories.join(' and ')} domains.
    </p>
  `;
}

function getTechnicalInsights(tool: any) {
  let technicalContent = `
    <p class="text-gray-300 mb-4">
      ${tool.name} leverages advanced AI technologies to deliver its core functionality. While specific details about the underlying architecture aren't provided in our data, we can infer that the tool likely employs state-of-the-art approaches relevant to its domain.
    </p>
    
    <p class="text-gray-300 mb-4">
      For a tool focused on ${tool.categories.join(' and ')}, the technical foundation probably includes:
    </p>
    
    <ul class="text-gray-300 list-disc pl-6 mb-6 space-y-1">
  `;
  
  // Add domain-specific technical details
  if (tool.categories.includes('code') || tool.categories.includes('developer')) {
    technicalContent += `
      <li>Code analysis algorithms and pattern recognition for intelligent suggestions</li>
      <li>Language-specific parsers and syntax understanding</li>
      <li>Context-aware code completion systems</li>
    `;
  }
  
  if (tool.categories.includes('writing') || tool.categories.includes('content-creation')) {
    technicalContent += `
      <li>Natural language processing models for text generation and analysis</li>
      <li>Semantic understanding capabilities for contextual awareness</li>
      <li>Style and tone analysis for tailored content creation</li>
    `;
  }
  
  if (tool.categories.includes('design')) {
    technicalContent += `
      <li>Computer vision algorithms for image analysis and generation</li>
      <li>Pattern recognition for design element identification</li>
      <li>Style transfer capabilities for creative applications</li>
    `;
  }
  
  if (tool.categories.includes('productivity')) {
    technicalContent += `
      <li>Task prioritization algorithms for efficient workflow management</li>
      <li>Pattern recognition for identifying optimization opportunities</li>
      <li>Automation frameworks for repetitive task handling</li>
    `;
  }
  
  // Add general technical points if nothing specific was added
  if (!tool.categories.includes('code') && !tool.categories.includes('developer') && 
      !tool.categories.includes('writing') && !tool.categories.includes('content-creation') &&
      !tool.categories.includes('design') && !tool.categories.includes('productivity')) {
    technicalContent += `
      <li>AI algorithms specialized for ${tool.categories[0]} applications</li>
      <li>Data processing pipelines optimized for relevant use cases</li>
      <li>User interaction models that facilitate intuitive usage</li>
    `;
  }
  
  technicalContent += `
    </ul>
    
    <p class="text-gray-300 mb-4">
      The technical architecture likely includes a combination of proprietary algorithms and established AI models, optimized for performance and reliability. The system architecture is designed to balance computational efficiency with output quality, ensuring responsive performance across different use cases.
    </p>
    
    <p class="text-gray-300 mb-4">
      For developers interested in integrating with ${tool.name}, the platform ${tool.categories.includes('developer') ? 'likely' : 'may'} offer API access with appropriate documentation, enabling custom implementations and extensions of the core functionality.
    </p>
  `;
  
  return technicalContent;
}

function getAssessment(tool: any) {
  const rating = tool.rating ? Math.round(tool.rating * 2) : 7; // Convert 5-star to 10-star or default to 7
  
  return `
    <p class="text-gray-300 mb-4">
      Based on its features, performance, and user feedback, ${tool.name} earns a rating of <span class="text-blue-400 font-semibold">${rating}/10</span>. This score reflects its ${rating >= 8 ? 'excellent' : rating >= 6 ? 'solid' : 'adequate'} performance in its core functionality areas and its ${rating >= 8 ? 'exceptional' : rating >= 6 ? 'good' : 'reasonable'} value proposition for its target audience.
    </p>
    
    <div class="bg-gray-800/30 rounded-lg p-5 border border-gray-700/50 mb-6">
      <h3 class="text-xl font-semibold text-white mb-3">Who Would Benefit Most</h3>
      
      <p class="text-gray-300 mb-2">
        ${tool.name} is particularly well-suited for:
      </p>
      
      <ul class="text-gray-300 list-disc pl-6 mb-2 space-y-1">
        ${tool.categories.map((category: string) => {
          switch(category) {
            case 'writing':
              return '<li>Writers and content creators seeking to enhance their productivity and content quality</li>';
            case 'productivity':
              return '<li>Professionals looking to optimize their workflow and automate routine tasks</li>';
            case 'chatbots':
              return '<li>Businesses requiring conversational AI for customer interactions or internal processes</li>';
            case 'code':
            case 'developer':
              return '<li>Developers seeking to accelerate their coding process and improve code quality</li>';
            case 'design':
              return '<li>Designers looking for AI assistance in creating and refining visual content</li>';
            case 'content-creation':
              return '<li>Content creators and marketers producing various forms of digital media</li>';
            case 'search-engines':
              return '<li>Researchers and professionals needing advanced information retrieval capabilities</li>';
            case 'finance':
              return '<li>Individuals and professionals managing financial data and transactions</li>';
            case 'health':
              return '<li>Health-conscious individuals and healthcare professionals</li>';
            default:
              return `<li>Professionals in the ${category} field seeking specialized AI assistance</li>`;
          }
        }).join('')}
      </ul>
    </div>
    
    <div class="bg-gray-800/30 rounded-lg p-5 border border-gray-700/50 mb-6">
      <h3 class="text-xl font-semibold text-white mb-3">Potential Limitations</h3>
      
      <p class="text-gray-300 mb-2">
        While ${tool.name} offers significant value, potential users should be aware of these limitations:
      </p>
      
      <ul class="text-gray-300 list-disc pl-6 space-y-1">
        <li>As with many AI tools, outputs may require human review and refinement</li>
        <li>The learning curve may be steeper for users without previous experience in similar tools</li>
        <li>Certain advanced features may only be available in premium pricing tiers</li>
        <li>Integration capabilities may be limited to specific platforms or ecosystems</li>
      </ul>
    </div>
    
    <p class="text-gray-300 mb-4">
      <strong class="text-white">Final Verdict:</strong> ${tool.name} represents a ${rating >= 8 ? 'leading' : rating >= 6 ? 'solid' : 'functional'} option in the ${tool.categories.join(' and ')} space, offering a compelling combination of ${rating >= 8 ? 'advanced features, excellent performance, and user-friendly design' : rating >= 6 ? 'useful features, reliable performance, and accessible design' : 'core features, adequate performance, and functional design'}. For professionals and organizations working in related domains, it merits serious consideration as part of their technology toolkit.
    </p>
  `;
}

function getAdditionalResources(tool: any) {
  return `
    <p class="text-gray-300 mb-4">
      To learn more about ${tool.name} and maximize your experience with the tool, consider exploring these resources:
    </p>
    
    <ul class="text-gray-300 list-none space-y-3 pl-0 mb-4">
      <li>
        <strong class="text-white">Official Website:</strong> 
        <a href="${tool.websiteUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 transition-colors">
          ${tool.name}
        </a> - The primary source for the most current information, documentation, and access options
      </li>
      
      <li>
        <strong class="text-white">Documentation and Guides:</strong> 
        Most likely available through the official website, offering detailed instructions on features and best practices
      </li>
      
      <li>
        <strong class="text-white">Community Forums:</strong> 
        Look for user communities on platforms like Reddit, Stack Overflow, or dedicated forums where users share experiences and tips
      </li>
      
      <li>
        <strong class="text-white">Tutorial Videos:</strong> 
        Search YouTube for walkthroughs and demonstrations of ${tool.name} in action
      </li>
      
      <li>
        <strong class="text-white">Blog Articles and Reviews:</strong> 
        Independent assessments can provide additional perspectives on the tool's strengths and limitations
      </li>
      
      <li>
        <strong class="text-white">Social Media:</strong> 
        Follow ${tool.name} on platforms like Twitter, LinkedIn, or Facebook for announcements and usage tips
      </li>
    </ul>
    
    <p class="text-gray-300 mb-4">
      For developers interested in technical integration, look for API documentation, SDKs, and code examples that may be available through the official channels.
    </p>
  `;
} 

function getPricingInfo(tool: any) {
  // Base pricing information in HTML format
  let pricingHtml = `
    <p>${tool.name} offers the following pricing structure:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-2">
  `;
  
  // Format pricing based on available information
  if (tool.pricing) {
    const pricingOptions = tool.pricing.split(',');
    
    pricingOptions.forEach((option: string) => {
      const trimmedOption = option.trim();
      
      if (trimmedOption.toLowerCase().includes('free')) {
        pricingHtml += `<li><strong>Free tier:</strong> ${trimmedOption}</li>`;
      } else if (trimmedOption.toLowerCase().includes('trial')) {
        pricingHtml += `<li><strong>Trial option:</strong> ${trimmedOption}</li>`;
      } else if (trimmedOption.toLowerCase().includes('premium') || 
                trimmedOption.toLowerCase().includes('pro') ||
                trimmedOption.toLowerCase().includes('business')) {
        pricingHtml += `<li><strong>Premium plan:</strong> ${trimmedOption}</li>`;
      } else {
        pricingHtml += `<li><strong>Additional option:</strong> ${trimmedOption}</li>`;
      }
    });
  } else {
    pricingHtml += `<li>Pricing information not available. Please visit the official website for current pricing details.</li>`;
  }
  
  pricingHtml += `
    </ul>
    
    <p>For the most current and detailed pricing information, we recommend visiting the <a href="${tool.websiteUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">official ${tool.name} website</a>.</p>
  `;
  
  return pricingHtml;
} 

function getAlternatives(tool: any, allTools: any[]) {
  // Find up to 3 alternative tools in the same category
  const alternatives = allTools.filter(alt => 
    alt.id !== tool.id && 
    alt.categories.some((cat: string) => tool.categories.includes(cat))
  ).slice(0, 3);
  
  if (alternatives.length === 0) {
    return `
      <p>While ${tool.name} offers a unique feature set, the AI tools landscape is constantly evolving. 
      Check back later for comparable alternatives as we continue to expand our database.</p>
    `;
  }
  
  // Format alternatives as HTML with list
  let alternativesHtml = `
    <p>If you're exploring options similar to ${tool.name}, consider these alternative tools that offer comparable functionality:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-4">
  `;
  
  alternatives.forEach(alt => {
    alternativesHtml += `
      <li>
        <strong>${alt.name}</strong> - ${alt.description.substring(0, 120)}... 
        <a href="/tools/${alt.id}" class="text-blue-500 hover:underline">Learn more</a>
      </li>
    `;
  });
  
  alternativesHtml += `
    </ul>
    
    <p>Each alternative offers its own unique strengths and focus areas, which may better align with your specific needs 
    or preferences.</p>
  `;
  
  return alternativesHtml;
} 