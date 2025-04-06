import React from 'react';
import { getToolById } from '@/data/aiTools';
import Link from 'next/link';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Define dynamic metadata
export async function generateMetadata({ params }: { params: { toolId: string } }): Promise<Metadata> {
  const tool = getToolById(params.toolId);
  
  if (!tool) {
    return {
      title: 'Tool Not Found'
    };
  }
  
  return {
    title: `${tool.name} - AI Tools Summary`,
    description: `Comprehensive summary and guide for ${tool.name}. Learn about features, pricing, use cases, and technical insights.`,
  };
}

export default function ToolSummaryPage({ params }: { params: { toolId: string } }) {
  const tool = getToolById(params.toolId);
  
  // If tool doesn't exist, show 404
  if (!tool) {
    notFound();
  }
  
  // Calculate rating visualization (out of 10 stars)
  const ratingOutOfTen = tool.rating ? Math.round(tool.rating * 2) : 7; // Convert 5-star to 10-star or default to 7
  
  return (
    <main className="min-h-screen circuit-bg py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/documentation" 
          className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mb-8"
        >
          <FiArrowLeft className="w-4 h-4" /> Back to Tools
        </Link>
        
        <article className="glassmorphic-card-content p-6 md:p-8 rounded-xl">
          <header className="mb-8 pb-6 border-b border-gray-700/50">
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4 tech-title">
              {tool.name}
            </h1>
            
            <div className="flex flex-wrap gap-3 mb-4">
              {tool.categories.map(category => (
                <span 
                  key={category}
                  className="bg-blue-900/30 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-500/20"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <p className="text-gray-300 text-lg">{tool.description}</p>
            
            <div className="mt-4 flex items-center">
              <Link 
                href={tool.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition-colors"
              >
                Visit Website <FiExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </header>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 tech-title">Introduction & Overview</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                {getSummaryIntroduction(tool)}
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 tech-title">Core Features</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                {getCoreFeatures(tool)}
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 tech-title">Primary Use Cases</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                {getPrimaryUseCases(tool)}
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 tech-title">Pricing & Access Information</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                <strong className="text-white">Pricing:</strong> {tool.pricing}
              </p>
              {getDetailedPricing(tool)}
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 tech-title">User Experience & Community Response</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                {getUserExperience(tool)}
              </p>
              
              <div className="flex items-center mt-4">
                <div className="mr-2 text-white">Rating:</div>
                <div className="flex">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <span 
                      key={i}
                      className={`w-4 h-4 mx-0.5 rounded-full ${i < ratingOutOfTen ? 'bg-blue-500' : 'bg-gray-700'}`}
                    ></span>
                  ))}
                </div>
                <span className="ml-2 text-white">{ratingOutOfTen}/10</span>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 tech-title">Development History & Evolution</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                {getDevelopmentHistory(tool)}
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 tech-title">Developer & Technical Insights</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                {getTechnicalInsights(tool)}
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 tech-title">Overall Assessment & Recommendations</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                {getAssessment(tool)}
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 tech-title">Additional Resources</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                {getAdditionalResources(tool)}
              </p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

// Helper functions to generate content for each section based on the tool
function getSummaryIntroduction(tool: any) {
  return `
    ${tool.name} is a powerful AI tool developed to ${tool.mainUse.toLowerCase()}. 
    This innovative solution stands out in the ${tool.categories.join(', ')} space, 
    offering users a comprehensive set of features designed to enhance productivity and creativity.
    
    Launched as a response to growing demand for specialized AI solutions in the ${tool.categories[0]} sector, 
    ${tool.name} has quickly established itself as a go-to resource for professionals and enthusiasts alike. 
    Its core purpose is to provide users with ${tool.description.toLowerCase()}, filling an important niche 
    in today's rapidly evolving technological landscape.
    
    What makes ${tool.name} particularly noteworthy is its focus on user experience and practical application. 
    As we'll explore throughout this summary, this tool combines sophisticated AI capabilities with an 
    intuitive interface, making advanced technology accessible to users regardless of their technical expertise.
  `;
}

function getCoreFeatures(tool: any) {
  const baseFeatures = `
    ${tool.name} offers a rich suite of features designed to maximize efficiency and quality:
    
    • Primary functionality: ${tool.mainUse}
    
    • User interface: ${tool.userExperience || 'An intuitive, user-friendly interface designed for accessibility across different user skill levels'}
    
    • Integration capabilities: Seamless connectivity with other tools and platforms in the ${tool.categories.join(' and ')} ecosystem
    
    • Performance optimization: Advanced algorithms that ensure fast processing and high-quality outputs
    
    • Customization options: Settings and parameters that allow users to tailor the experience to their specific needs
  `;
  
  const extraFeatures = tool.otherUses 
    ? `
    
    Beyond its core functionality, ${tool.name} also excels in these supplementary areas:
    
    • ${tool.otherUses.split(',').map((use: string) => use.trim()).join('\n    • ')}
    
    These additional capabilities expand the tool's utility beyond its primary purpose, making it a versatile solution for a wide range of use cases.
    `
    : '';
    
  return baseFeatures + extraFeatures;
}

function getPrimaryUseCases(tool: any) {
  return `
    ${tool.name} is particularly valuable for users in the following domains:
    
    **Target Audience:**
    ${tool.categories.map((category: string) => {
      switch(category) {
        case 'writing':
          return '• Content creators, copywriters, and authors looking to enhance their writing workflow';
        case 'productivity':
          return '• Professionals seeking to optimize their workflow and increase efficiency';
        case 'chatbots':
          return '• Businesses and individuals requiring conversational AI solutions';
        case 'code':
        case 'developer':
          return '• Software developers and engineering teams seeking to accelerate their development process';
        case 'design':
          return '• Designers and creative professionals looking for AI-assisted design capabilities';
        case 'content-creation':
          return '• Content creators, marketers, and media producers creating digital assets';
        case 'search-engines':
          return '• Researchers and information professionals requiring advanced information retrieval';
        case 'finance':
          return '• Financial professionals and individuals managing personal or business finances';
        case 'health':
          return '• Healthcare providers, wellness professionals, and individuals managing health concerns';
        case 'language-learning':
          return '• Language learners, educators, and translation professionals';
        case 'meeting':
          return '• Business professionals who regularly conduct or participate in meetings';
        case 'academia':
          return '• Researchers, students, and educators in academic settings';
        case 'email':
          return '• Professionals managing high email volumes and communication workflows';
        default:
          return `• Users in the ${category} sector seeking specialized AI solutions`;
      }
    }).join('\n    ')}
    
    **Real-World Applications:**
    
    • ${tool.mainUse}
    ${tool.otherUses ? '\n    • ' + tool.otherUses.split(',').map((use: string) => use.trim()).join('\n    • ') : ''}
    
    Users typically integrate ${tool.name} into their workflow to address specific challenges related to ${tool.categories.join(', ')}, resulting in measurable improvements in efficiency, quality, and innovation.
  `;
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
    ${userExp}. Users of ${tool.name} generally report a positive experience with the platform, noting its ${tool.rating && tool.rating >= 4 ? 'high-quality outputs' : 'functional interface'} and ${tool.rating && tool.rating >= 4 ? 'efficient workflow' : 'useful features'}.
    
    The community around ${tool.name} has grown steadily, with users sharing insights, templates, and best practices across various forums and social media platforms. ${tool.rating && tool.rating >= 4 ? 'The tool has received particularly positive feedback for its ' + tool.mainUse.toLowerCase() + ' capabilities.' : 'User feedback has helped shape the tool\'s development, with regular updates addressing common requests and concerns.'}
    
    In terms of performance, ${tool.name} ${tool.rating && tool.rating >= 4 ? 'excels' : 'performs adequately'} in handling typical tasks within its domain, with ${tool.rating && tool.rating >= 4 ? 'minimal latency' : 'reasonable response times'} and ${tool.rating && tool.rating >= 4 ? 'high-quality' : 'satisfactory'} outputs. The interface is designed to accommodate both beginners and advanced users, with a learning curve that most find manageable given the tool's capabilities.
  `;
}

function getDevelopmentHistory(tool: any) {
  return `
    ${tool.name} emerged as part of the growing wave of specialized AI tools designed to address specific needs in the ${tool.categories.join(' and ')} space. While the exact launch date isn't specified in our data, the tool has evolved substantially since its initial release.
    
    The development trajectory of ${tool.name} reflects the broader trends in AI advancement, with regular updates enhancing its core capabilities and expanding its feature set. The team behind the tool has demonstrated a commitment to continuous improvement, responding to user feedback and incorporating technological innovations to keep the platform relevant and competitive.
    
    Notable milestones in the tool's evolution likely include:
    
    • Initial launch with core ${tool.categories[0]} capabilities
    • Expansion of features to include ${tool.otherUses || 'additional functionalities'}
    • Interface refinements to enhance usability and accessibility
    • Performance optimizations to improve speed and reliability
    • Integration capabilities with complementary tools and platforms
    
    As the AI landscape continues to evolve, ${tool.name} is positioned to adapt to emerging trends and technologies, ensuring its continued relevance for users in the ${tool.categories.join(' and ')} domains.
  `;
}

function getTechnicalInsights(tool: any) {
  return `
    ${tool.name} leverages advanced AI technologies to deliver its core functionality. While specific details about the underlying architecture aren't provided in our data, we can infer that the tool likely employs state-of-the-art approaches relevant to its domain.
    
    For a tool focused on ${tool.categories.join(' and ')}, the technical foundation probably includes:
    
    ${tool.categories.includes('code') || tool.categories.includes('developer') ? `
    • Code analysis algorithms and pattern recognition for intelligent suggestions
    • Language-specific parsers and syntax understanding
    • Context-aware code completion systems
    ` : ''}
    
    ${tool.categories.includes('writing') || tool.categories.includes('content-creation') ? `
    • Natural language processing models for text generation and analysis
    • Semantic understanding capabilities for contextual awareness
    • Style and tone analysis for tailored content creation
    ` : ''}
    
    ${tool.categories.includes('design') ? `
    • Computer vision algorithms for image analysis and generation
    • Pattern recognition for design element identification
    • Style transfer capabilities for creative applications
    ` : ''}
    
    ${tool.categories.includes('productivity') ? `
    • Task prioritization algorithms for efficient workflow management
    • Pattern recognition for identifying optimization opportunities
    • Automation frameworks for repetitive task handling
    ` : ''}
    
    The technical architecture likely includes a combination of proprietary algorithms and established AI models, optimized for performance and reliability. The system architecture is designed to balance computational efficiency with output quality, ensuring responsive performance across different use cases.
    
    For developers interested in integrating with ${tool.name}, the platform ${tool.categories.includes('developer') ? 'likely' : 'may'} offer API access with appropriate documentation, enabling custom implementations and extensions of the core functionality.
  `;
}

function getAssessment(tool: any) {
  const rating = tool.rating ? Math.round(tool.rating * 2) : 7; // Convert 5-star to 10-star or default to 7
  
  return `
    Based on its features, performance, and user feedback, ${tool.name} earns a rating of ${rating}/10. This score reflects its ${rating >= 8 ? 'excellent' : rating >= 6 ? 'solid' : 'adequate'} performance in its core functionality areas and its ${rating >= 8 ? 'exceptional' : rating >= 6 ? 'good' : 'reasonable'} value proposition for its target audience.
    
    **Who Would Benefit Most:**
    
    ${tool.name} is particularly well-suited for:
    
    • ${tool.categories.map((category: string) => {
      switch(category) {
        case 'writing':
          return 'Writers and content creators seeking to enhance their productivity and content quality';
        case 'productivity':
          return 'Professionals looking to optimize their workflow and automate routine tasks';
        case 'chatbots':
          return 'Businesses requiring conversational AI for customer interactions or internal processes';
        case 'code':
        case 'developer':
          return 'Developers seeking to accelerate their coding process and improve code quality';
        case 'design':
          return 'Designers looking for AI assistance in creating and refining visual content';
        case 'content-creation':
          return 'Content creators and marketers producing various forms of digital media';
        case 'search-engines':
          return 'Researchers and professionals needing advanced information retrieval capabilities';
        case 'finance':
          return 'Individuals and professionals managing financial data and transactions';
        case 'health':
          return 'Health-conscious individuals and healthcare professionals';
        default:
          return `Professionals in the ${category} field seeking specialized AI assistance`;
      }
    }).join('\n    • ')}
    
    **Potential Limitations:**
    
    While ${tool.name} offers significant value, potential users should be aware of these limitations:
    
    • As with many AI tools, outputs may require human review and refinement
    • The learning curve may be steeper for users without previous experience in similar tools
    • Certain advanced features may only be available in premium pricing tiers
    • Integration capabilities may be limited to specific platforms or ecosystems
    
    **Final Verdict:**
    
    ${tool.name} represents a ${rating >= 8 ? 'leading' : rating >= 6 ? 'solid' : 'functional'} option in the ${tool.categories.join(' and ')} space, offering a compelling combination of ${rating >= 8 ? 'advanced features, excellent performance, and user-friendly design' : rating >= 6 ? 'useful features, reliable performance, and accessible design' : 'core features, adequate performance, and functional design'}. For professionals and organizations working in related domains, it merits serious consideration as part of their technology toolkit.
  `;
}

function getAdditionalResources(tool: any) {
  return `
    To learn more about ${tool.name} and maximize your experience with the tool, consider exploring these resources:
    
    • **Official Website**: [${tool.name}](${tool.websiteUrl}) - The primary source for the most current information, documentation, and access options
    
    • **Documentation and Guides**: Most likely available through the official website, offering detailed instructions on features and best practices
    
    • **Community Forums**: Look for user communities on platforms like Reddit, Stack Overflow, or dedicated forums where users share experiences and tips
    
    • **Tutorial Videos**: Search YouTube for walkthroughs and demonstrations of ${tool.name} in action
    
    • **Blog Articles and Reviews**: Independent assessments can provide additional perspectives on the tool's strengths and limitations
    
    • **Social Media**: Follow ${tool.name} on platforms like Twitter, LinkedIn, or Facebook for announcements and usage tips
    
    For developers interested in technical integration, look for API documentation, SDKs, and code examples that may be available through the official channels.
  `;
} 