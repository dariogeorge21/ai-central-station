'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search, X } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';

// Blog Image with Fallback
interface BlogImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  [key: string]: any;
}

const BlogImageWithFallback = ({ src, alt, ...props }: BlogImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setError(false);
  }, [src]);

  return (
    <>
      {error ? (
        <div className="w-full h-full blog-image-fallback">AI</div>
      ) : (
        <Image
          src={imgSrc}
          alt={alt}
          {...props}
          onError={() => setError(true)}
        />
      )}
    </>
  );
};

// Blog categories
const blogCategories = [
  'All blogs',
  'Generative AI',
  'Global',
  'Hardware & Architecture',
  'Health & Bioscience',
  'Human-Computer Interaction and Visualization',
  'Machine Intelligence',
  'Machine Perception',
  'Machine Translation',
  'Mobile Systems',
  'Natural Language Processing',
  'Networking',
  'Open Source Models & Datasets',
  'Photography',
  'Product',
  'Programs',
  'Quantum',
  'RAI-HCT Highlights',
  'Responsible AI',
  'Robotics'
];

// Sample blog data
const blogData = [
  {
    id: 1,
    title: 'Generating synthetic data with differentially private LLM inference',
    excerpt: 'Large language models (LLMs) have shown tremendous capabilities in generating human-like text. However, when trained on sensitive data, there\'s a risk of memorization and potential privacy breaches. This research explores techniques for generating synthetic data using LLMs while preserving privacy through differential privacy mechanisms.\n\nOur team developed a novel approach that applies differential privacy guarantees to the inference process of large language models. By carefully calibrating noise addition during token generation, we can ensure that sensitive information from the training data cannot be extracted while still maintaining high utility of the synthetic outputs.\n\nThe challenge with traditional differential privacy approaches when applied to LLMs is the significant degradation in output quality as privacy guarantees increase. Our method addresses this by implementing a dynamic privacy budget allocation system that adapts to the sensitivity of different parts of the generated content. When the model is generating common phrases or general knowledge, less privacy budget is consumed, while more sensitive generations require stronger privacy protections.\n\nExperimental results across multiple domains including healthcare, financial services, and personal communications demonstrate that our approach can generate realistic synthetic datasets that closely match the statistical properties of the original data while providing formal privacy guarantees. In healthcare applications, synthetic patient records retained 94% of the utility for downstream machine learning tasks while ensuring epsilon values below 3.\n\nFurthermore, we conducted extensive adversarial testing where specialized models attempted to extract private information from our synthetic outputs. Even with access to partial information about the training data, these adversarial models failed to extract individually identifiable information beyond random chance.\n\nThis research opens new possibilities for organizations to leverage the power of LLMs on sensitive data without compromising individual privacy. Applications range from improved testing environments for software development to enhanced data sharing capabilities for research and analysis.',
    date: 'March 18, 2024',
    image: '/images/blog/synthetic-data.jpg',
    categories: ['Machine Intelligence', 'Natural Language Processing', 'Security, Privacy and Abuse Prevention'],
  },
  {
    id: 2,
    title: 'From diagnosis to treatment: Advancing AMIE for longitudinal disease management',
    excerpt: 'AMIE (AI for Medical Information Extraction) is an advanced system designed to assist healthcare professionals in diagnosing and treating diseases over time. This research demonstrates how generative AI can help medical practitioners analyze patient histories, identify patterns, and recommend treatment plans with higher accuracy.\n\nOur latest version of AMIE represents a significant advancement in longitudinal healthcare management through AI. Traditional diagnostic systems typically focus on isolated patient encounters, failing to capture the evolution of symptoms and treatment responses over time. AMIE addresses this limitation by maintaining comprehensive temporal models of patient health trajectories.\n\nThe system processes multi-modal inputs including clinical notes, lab results, imaging studies, and even patient-reported outcomes from wearable devices. By integrating these diverse data streams, AMIE constructs a detailed representation of disease progression and treatment efficacy for individual patients. The temporal attention mechanisms we\'ve implemented allow the model to identify subtle patterns that emerge over months or years of patient care.\n\nOne of the key innovations is AMIE\'s ability to distinguish between correlation and causation in longitudinal health data. The system employs causal inference techniques that help clinicians understand whether observed improvements result from specific interventions or from other factors. This capability is particularly valuable for managing chronic conditions like diabetes, cardiovascular disease, and autoimmune disorders where treatment plans frequently require adjustment.\n\nIn a blind evaluation study conducted across three major medical centers involving over 300 clinicians and 10,000 patient cases, AMIE-assisted treatment planning resulted in 26% fewer hospital readmissions and 31% better adherence to evidence-based guidelines compared to standard care. Particularly noteworthy was AMIE\'s performance with complex comorbidities, where it excelled at balancing potentially contradictory treatment requirements.\n\nThe system also features an adaptive learning component that continuously updates its models based on new medical research and observed patient outcomes. This ensures that recommendations remain current with evolving medical knowledge and practices. Importantly, all patient data is processed with rigorous privacy protections, including federated learning approaches that keep sensitive information within hospital systems.',
    date: 'March 6, 2024',
    image: '/images/blog/disease-management.jpg',
    categories: ['Generative AI', 'Health & Bioscience'],
  },
  {
    id: 3,
    title: 'Discovering new words with confidential federated analytics',
    excerpt: 'This research introduces a novel approach to discovering emerging words and phrases across user devices while maintaining strict privacy guarantees. Using federated learning techniques, the system can identify new terminology without collecting individual user data.\n\nLanguage is constantly evolving, with new terms, acronyms, and expressions emerging regularly across different communities and regions. Tracking these linguistic developments is crucial for maintaining effective communication systems, from autocorrect and predictive text to translation services. However, traditional approaches to discovering new vocabulary have relied on centralized data collection, raising significant privacy concerns.\n\nOur research presents a paradigm shift through a confidential federated analytics framework that enables the discovery of emerging terminology while keeping user data securely on their devices. The system works by deploying local language models on user devices that identify potentially novel words or expressions based on usage patterns and context. Instead of uploading these terms directly, devices participate in a secure aggregation protocol that allows only statistically significant new terms to be discovered by the central system.\n\nWe implemented several privacy-enhancing technologies to ensure user confidentiality. First, each device applies local differential privacy by adding calibrated noise to their reports. Second, our secure aggregation protocol ensures that only aggregate statistics across thousands of devices are ever visible to the server, never individual contributions. Third, we employ cryptographic techniques that allow verification of the aggregate results without compromising individual privacy.\n\nThe system was deployed as an opt-in feature across a diverse user base of messaging applications, with over 10 million participating devices. Over a six-month evaluation period, our approach successfully identified more than 18,000 genuinely new terms and expressions, with particular success in tracking rapidly evolving topics in technology, social movements, and popular culture. Importantly, comparative analysis showed that our privacy-preserving approach identified new terminology with only a 7% delay compared to centralized approaches, while providing formal privacy guarantees.\n\nBeyond word discovery, the framework demonstrated unexpected benefits in identifying regional linguistic variations and tracking the geographic spread of new expressions. This additional dimension provides valuable insights for localization services and cultural adaptation of communication tools.',
    date: 'March 4, 2024',
    image: '/images/blog/federated-learning.jpg',
    categories: ['Mobile Systems', 'Security, Privacy and Abuse Prevention', 'Software Systems & Engineering'],
  },
  {
    id: 4,
    title: 'Mind the GAP: Geometry Aware Passthrough mitigates cybersickness',
    excerpt: 'Virtual and augmented reality experiences can cause motion sickness in many users. This research presents Geometry Aware Passthrough (GAP), a technique that aligns virtual content with real-world geometry to reduce discomfort and make immersive experiences more accessible.\n\nCybersickness remains one of the most significant barriers to widespread adoption of virtual and augmented reality technologies. The vestibular conflict between visual motion cues and physical stillness triggers symptoms similar to motion sickness in approximately 40-70% of users, with varying severity. Previous mitigation approaches have typically focused on reducing visual-vestibular mismatch through motion restrictions or artificial reference frames, often at the expense of immersion quality.\n\nGeometry Aware Passthrough (GAP) represents a fundamentally different approach by intelligently blending real-world visual anchors with virtual content based on precise spatial mapping. The system utilizes depth sensors and computer vision algorithms to construct a detailed geometric understanding of the user\'s physical environment in real-time. This spatial map serves as the foundation for selective passthrough of real-world elements that provide subconscious orientation cues to the vestibular system.\n\nUnlike conventional passthrough implementations that simply display camera feeds, GAP selectively reveals portions of the physical environment based on several factors: their potential as orientation anchors, their relevance to the current user attention focus, and their compatibility with the virtual content. The system employs a novel algorithm that identifies optimal anchor points—typically static environmental elements with strong geometric features—and seamlessly integrates them into the virtual experience through controlled transparency layers.\n\nWe conducted extensive user studies with 240 participants across diverse age groups and sensitivity levels to cybersickness. The results demonstrated a 63% reduction in reported discomfort using standardized simulation sickness questionnaires. More importantly, users who previously couldn\'t tolerate VR for more than 10 minutes were able to engage in 45+ minute sessions with minimal discomfort. Eye-tracking data confirmed that users rarely consciously focused on the passthrough elements, suggesting they function as peripheral orientation cues without disrupting immersion.\n\nParticularly notable was GAP\'s performance during virtual locomotion—typically the most challenging aspect for cybersickness. By dynamically adjusting passthrough intensity during acceleration and turning, the system reduced discomfort by 76% during these high-risk movements compared to control conditions.',
    date: 'February 28, 2024',
    image: '/images/blog/vr-research.jpg',
    categories: ['Human-Computer Interaction and Visualization', 'Machine Perception'],
  },
  {
    id: 5,
    title: 'Accelerating scientific breakthroughs with an AI co-scientist',
    excerpt: 'This paper introduces an AI co-scientist system designed to collaborate with human researchers across various scientific disciplines. By analyzing research papers, proposing hypotheses, and designing experiments, the AI assistant helps accelerate the pace of scientific discovery.\n\nThe exponential growth in scientific literature has made it increasingly difficult for researchers to stay current with developments even within narrow specializations. Simultaneously, many scientific challenges require interdisciplinary approaches, demanding expertise across multiple domains. Our AI co-scientist system addresses these challenges by functioning as a collaborative partner capable of bridging knowledge gaps and accelerating the scientific discovery process.\n\nUnlike conventional scientific literature search tools or recommendation systems, our AI co-scientist actively participates in the scientific method. The system is built on a foundation of specialized language models trained on a corpus of over 200 million scientific articles, technical reports, experimental protocols, and datasets across disciplines ranging from molecular biology to astrophysics. These models are augmented with domain-specific reasoning modules calibrated to reflect the methodological standards of different scientific fields.\n\nA distinguishing feature of our system is its ability to identify potential connections between seemingly disparate research areas. In validation experiments, the AI co-scientist successfully reconstructed several historical cross-disciplinary breakthroughs before they occurred, including identifying applications of CRISPR technology based solely on pre-2010 literature. When presented with current research frontiers, the system generated hypotheses that human experts rated as novel and promising in 72% of cases.\n\nBeyond hypothesis generation, the AI co-scientist excels at experimental design optimization. When provided with laboratory constraints and available equipment, it generates detailed experimental protocols that maximize information gain while minimizing resource expenditure. In controlled studies across 14 biochemistry laboratories, experiments designed with AI assistance yielded comparable results while reducing material costs by 31% and experimental time by 26%.\n\nParticularly promising is the system\'s ability to enhance collaborative science. In workshop settings with interdisciplinary teams, groups supported by the AI co-scientist developed research proposals that independent evaluators judged as significantly more innovative and methodologically rigorous than control groups. The system effectively served as a knowledge broker, translating concepts between disciplinary specializations and identifying complementary expertise within the team.',
    date: 'February 19, 2024',
    image: '/images/blog/ai-scientist.jpg',
    categories: ['Generative AI', 'Health & Bioscience', 'Human-Computer Interaction and Visualization'],
  },
  {
    id: 6,
    title: 'Mechanism design for large language models',
    excerpt: 'As large language models become increasingly integrated into economic systems, understanding their incentives and behaviors becomes crucial. This research applies economic mechanism design principles to LLMs, creating frameworks that align AI objectives with human values and economic efficiency.',
    date: 'February 13, 2024',
    image: '/images/blog/mechanism-design.jpg',
    categories: ['Algorithms & Theory', 'Economics & Electronic Commerce', 'Generative AI'],
  },
  {
    id: 7,
    title: 'Building AI for the pluralistic society',
    excerpt: 'This research explores how to design AI systems that respect and incorporate diverse perspectives from different cultures, beliefs, and social backgrounds. The paper presents frameworks for developing more inclusive language models that avoid embedding biases from dominant cultural viewpoints.',
    date: 'February 13, 2024',
    image: '/images/blog/pluralistic-ai.jpg',
    categories: ['Generative AI', 'Natural Language Processing', 'Responsible AI'],
  },
  {
    id: 8,
    title: 'Urban mobility solutions: Calibrating digital twins at scale',
    excerpt: 'This research demonstrates how digital twin technology can model urban transportation systems with unprecedented accuracy. By calibrating these models with real-time data, city planners can optimize traffic flow, reduce congestion, and decrease carbon emissions from vehicles.',
    date: 'February 10, 2024',
    image: '/images/blog/urban-mobility.jpg',
    categories: ['Algorithms & Theory', 'Climate & Sustainability', 'General Science'],
  },
  {
    id: 9,
    title: 'Chain of Agents: Large language models collaborating on long-context tasks',
    excerpt: 'This paper introduces a novel framework where multiple specialized LLM agents collaborate to solve complex tasks that require long-context understanding. Each agent focuses on a specific subtask, with a coordinator agent managing the workflow, significantly improving performance on complex reasoning challenges.',
    date: 'January 23, 2024',
    image: '/images/blog/chain-of-agents.jpg',
    categories: ['Generative AI', 'Machine Intelligence', 'Natural Language Processing'],
  },
  {
    id: 10,
    title: 'Parfait: Enabling private AI with research tools',
    excerpt: 'Parfait is a suite of research tools designed to enhance privacy in AI systems. This paper demonstrates how these tools can be applied to both training and inference processes, allowing developers to build AI solutions that protect user data while maintaining high performance.',
    date: 'January 22, 2024',
    image: '/images/blog/private-ai.jpg',
    categories: ['Distributed Systems & Parallel Computing', 'Generative AI', 'Responsible AI', 'Security, Privacy and Abuse Prevention'],
  },
  {
    id: 11,
    title: 'Zero-shot mono-to-binaural speech synthesis',
    excerpt: 'This research presents a breakthrough in spatial audio processing, enabling the conversion of mono audio recordings to binaural audio without requiring paired training data. The technique creates more immersive audio experiences for virtual reality, gaming, and media consumption.',
    date: 'January 16, 2024',
    image: '/images/blog/speech-synthesis.jpg',
    categories: ['Sound & Accoustics', 'Speech Processing'],
  },
  {
    id: 12,
    title: 'Understanding Transformer reasoning capabilities via graph algorithms',
    excerpt: 'This paper provides theoretical insights into how Transformer models perform reasoning tasks by drawing parallels with graph algorithms. By analyzing attention patterns as graph operations, researchers can better understand the capabilities and limitations of these models on complex reasoning problems.',
    date: 'December 20, 2023',
    image: '/images/blog/transformer-reasoning.jpg',
    categories: ['Algorithms & Theory', 'Data Mining & Modeling'],
  },
  {
    id: 13,
    title: 'Quantum neural networks for materials science',
    excerpt: 'This research combines quantum computing with neural networks to accelerate materials discovery. By leveraging quantum properties to model molecular interactions, researchers can predict new materials with desired properties more efficiently than classical approaches.',
    date: 'December 15, 2023',
    image: '/images/blog/quantum-materials.jpg',
    categories: ['Quantum', 'Machine Intelligence', 'General Science'],
  },
  {
    id: 14,
    title: 'Robotics and reinforcement learning: A new approach to dexterous manipulation',
    excerpt: 'This paper presents advances in robotic manipulation using deep reinforcement learning. The approach enables robots to learn complex hand movements from minimal demonstration data, significantly improving their ability to handle irregularly shaped objects and perform precise tasks.',
    date: 'December 10, 2023',
    image: '/images/blog/robotics-manipulation.jpg',
    categories: ['Robotics', 'Machine Intelligence'],
  },
  {
    id: 15,
    title: 'Improving NLP models for low-resource languages',
    excerpt: 'This research addresses the challenges of developing natural language processing tools for languages with limited digital resources. Using transfer learning and data augmentation techniques, the approach achieves significant performance gains for languages previously underserved by AI technologies.',
    date: 'December 5, 2023',
    image: '/images/blog/nlp-low-resource.jpg',
    categories: ['Natural Language Processing', 'Machine Translation', 'Global'],
  },
];

export default function BlogPage() {
  const [text] = useTypewriter({
    words: [
      'Latest AI Breakthroughs',
      'Industry Insights',
      'Tech Innovations',
      'Expert Opinions'
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>('All blogs');
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);

  const filteredCategories = searchQuery 
    ? blogCategories.filter(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
    : blogCategories;

  const filteredBlogs = activeCategory === 'All blogs' 
    ? blogData 
    : blogData.filter(blog => blog.categories.some(cat => cat === activeCategory));

  const scrollToContent = () => {
    const contentSection = document.getElementById('blog-content');
    if (contentSection) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = contentSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-small-black/[0.05] -z-10" />
        
        {/* Gradient Backgrounds */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="relative w-full h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1 }}
              className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[200px]"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[200px]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-jetbrains bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                AI News and Blogs
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 font-jetbrains"
            >
              <span>{text}</span>
              <Cursor cursorStyle="_" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.button
                onClick={scrollToContent}
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center group"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Articles
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Content Section with Sidebar */}
      <section id="blog-content" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4 lg:w-1/5">
              <div className="sticky top-20 pt-2 bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700/30 p-4 h-[calc(100vh-120px)]">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-600 mb-4">
                  Categories
                </h3>
                
                {/* Search Bar */}
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 rounded-lg bg-gray-700/30 border border-gray-600/50 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Search categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                {/* Category List */}
                <div className="space-y-1 h-[calc(100%-110px)] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredCategories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                        activeCategory === category
                          ? 'bg-blue-500/20 text-blue-400 font-medium'
                          : 'text-gray-300 hover:bg-gray-700/30 hover:text-white'
                      }`}
                      whileHover={{
                        backgroundColor: activeCategory === category 
                          ? 'rgba(59, 130, 246, 0.3)'
                          : 'rgba(55, 65, 81, 0.4)'
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className="md:w-3/4 lg:w-4/5">
              <div className="bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700/30 p-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-600 mb-6">
                  {activeCategory === 'All blogs' ? 'Latest Articles' : activeCategory}
                </h2>
                
                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog) => (
                      <div 
                        key={blog.id} 
                        className="bg-gray-800/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-gray-700/50 hover:border-gray-600/50"
                      >
                        <div className="relative h-48 w-full">
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
                          <div className="w-full h-full bg-gray-700 relative">
                            <BlogImageWithFallback 
                              src={blog.image} 
                              alt={blog.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-gray-100 mb-2 line-clamp-2">{blog.title}</h3>
                          <p className="text-gray-400 text-sm mb-3">{blog.date}</p>
                          <div className="mb-4">
                            <p className="text-gray-400 text-xs italic">
                              {blog.categories.join(' • ')}
                            </p>
                          </div>
                          <motion.button
                            onClick={() => setSelectedBlog(blog.id)}
                            className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded transition-colors"
                            whileHover={{ backgroundColor: 'rgba(75, 85, 99, 1)' }}
                            whileTap={{ scale: 0.97 }}
                          >
                            Read
                          </motion.button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-12">
                      <p className="text-gray-400 text-lg">No articles found for this category.</p>
                      <p className="text-gray-500 text-sm mt-2">Try selecting a different category.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Popup */}
      {selectedBlog && (
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar relative"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors z-10"
              aria-label="Close popup"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              {blogData.filter(blog => blog.id === selectedBlog).map(blog => (
                <div key={blog.id}>
                  <h3 className="text-3xl font-bold text-white mb-4">{blog.title}</h3>
                  <p className="text-gray-400 mb-2">{blog.date}</p>
                  <div className="mb-6">
                    <p className="text-gray-400 text-sm italic">
                      {blog.categories.join(' • ')}
                    </p>
                  </div>
                  <div className="relative h-80 w-full mb-8 rounded-xl overflow-hidden">
                    <BlogImageWithFallback 
                      src={blog.image} 
                      alt={blog.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-gray-300 mb-8 leading-relaxed space-y-4">
                    {blog.excerpt.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="flex justify-center mt-12">
                    <motion.button
                      onClick={() => setSelectedBlog(null)}
                      className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 text-white px-10 py-3 rounded-full hover:shadow-lg transition-all duration-300 text-lg font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
