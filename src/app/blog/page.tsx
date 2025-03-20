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
    excerpt: 'This research introduces a novel approach to discovering emerging words and phrases across user devices while maintaining strict privacy guarantees. Using federated learning techniques, the system can identify new terminology without collecting individual user data.\n\nLanguage is constantly evolving, with new terms, acronyms, and expressions emerging regularly across different communities and regions. Tracking these linguistic developments is crucial for maintaining effective communication systems, from autocorrect and predictive text to translation services. However, traditional approaches to discovering new vocabulary have relied on centralized data collection, raising significant privacy concerns.\n\nOur research presents a paradigm shift through a confidential federated analytics framework that enables the discovery of emerging terminology while keeping user data securely on their devices. The system works by deploying local language models on user devices that identify potentially novel words or expressions based on usage patterns and context. Instead of uploading these terms directly, devices participate in a secure aggregation protocol that allows only statistically significant new terms to be discovered by the central system.\n\nWe implemented several privacy-enhancing technologies to ensure user confidentiality. First, each device applies local differential privacy by adding calibrated noise to their reports. Second, our secure aggregation protocol ensures that only aggregate statistics across thousands of devices are ever visible to the server, never individual contributions. Third, we employed cryptographic techniques that allow verification of the aggregate results without compromising individual privacy.\n\nThe system was deployed as an opt-in feature across a diverse user base of messaging applications, with over 10 million participating devices. Over a six-month evaluation period, our approach successfully identified more than 18,000 genuinely new terms and expressions, with particular success in tracking rapidly evolving topics in technology, social movements, and popular culture. Importantly, comparative analysis showed that our privacy-preserving approach identified new terminology with only a 7% delay compared to centralized approaches, while providing formal privacy guarantees.\n\nBeyond word discovery, the framework demonstrated unexpected benefits in identifying regional linguistic variations and tracking the geographic spread of new expressions. This additional dimension provides valuable insights for localization services and cultural adaptation of communication tools.',
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
    excerpt: 'As large language models become increasingly integrated into economic systems, understanding their incentives and behaviors becomes crucial. This research applies economic mechanism design principles to LLMs, creating frameworks that align AI objectives with human values and economic efficiency.\n\nTraditional mechanism design theory, a branch of economics and game theory, provides tools for creating systems where participants are incentivized to act in ways that achieve desired outcomes. Our research extends these principles to the domain of large language models, which present unique challenges due to their probabilistic nature, emergent capabilities, and the complex relationship between their training objectives and downstream behaviors.\n\nA central contribution of our work is the development of a formal framework for analyzing LLM interactions within economic systems. We introduce the concept of "bounded rational equilibria" which accounts for the imperfect optimization capabilities of these models while still allowing for predictive modeling of their behaviors in multi-agent settings. This framework enables system designers to anticipate how LLMs will respond to various incentive structures and interaction protocols.\n\nWe demonstrate several applications of our theoretical framework through practical implementations. First, we designed a market mechanism for LLM-based services that dynamically adjusts computational resource allocation based on task complexity and user value, resulting in a 47% improvement in overall utility compared to fixed-pricing schemes. Second, we developed a novel approach to preference elicitation that uses strategic information revelation to more accurately capture user preferences while requiring fewer explicit queries.\n\nPerhaps most significantly, our research addresses the challenge of aligning multiple AI systems that may have divergent objectives. By applying cooperative mechanism design principles, we created protocols that enable different LLMs to negotiate mutually beneficial outcomes even when their underlying utility functions differ. In experimental settings with independently developed models, these protocols reduced the incidence of adversarial behaviors by 82% and increased collaborative problem-solving performance by 63%.\n\nThe theoretical insights from this research have important implications for the governance of AI systems. As LLMs increasingly participate in economic activities—whether serving as agents for human principals, operating as autonomous economic actors, or mediating transactions between humans—mechanism design principles provide essential tools for ensuring these interactions remain beneficial, fair, and aligned with human values.\n\nOur findings also suggest new directions for AI safety research. Traditional approaches to alignment focus primarily on aligning a single AI system with human values. Our mechanism design perspective highlights the importance of considering interactions between multiple AI systems and how these interactions might be structured to promote beneficial outcomes even when individual systems are imperfectly aligned.\n\nIn collaboration with economists and policy researchers, we explored the implications of these findings for AI governance frameworks. The growing ecosystem of AI systems interacting with each other and with human institutions requires new regulatory approaches that account for strategic behavior and complex incentives. Our research provides a theoretical foundation for developing these governance structures, offering both analytical tools and practical design patterns for building robust, beneficial AI ecosystems.',
    date: 'February 13, 2024',
    image: '/images/blog/mechanism-design.jpg',
    categories: ['Algorithms & Theory', 'Economics & Electronic Commerce', 'Generative AI'],
  },
  {
    id: 7,
    title: 'Building AI for the pluralistic society',
    excerpt: 'This research explores how to design AI systems that respect and incorporate diverse perspectives from different cultures, beliefs, and social backgrounds. The paper presents frameworks for developing more inclusive language models that avoid embedding biases from dominant cultural viewpoints.\n\nThe homogenization of AI systems around dominant cultural frameworks represents one of the most significant challenges for global AI deployment. Our research addresses this challenge by developing methodologies for creating pluralistic AI systems that appropriately represent and respond to diverse worldviews, ethical frameworks, and cultural contexts.\n\nWe began by conducting a comprehensive audit of current language models across 42 distinct cultural contexts, revealing significant disparities in performance, representation, and value alignment. Models consistently performed better when handling queries aligned with Western, educated, industrialized, rich, and democratic (WEIRD) perspectives, while struggling with cultural nuances, ethical frameworks, and contextual understanding from non-WEIRD societies.\n\nBased on these findings, we developed a novel training framework called Cultural Context Encoding (CCE) that explicitly represents cultural perspectives as embeddings within the model architecture. Rather than attempting to find a single "neutral" perspective—which our research demonstrates is mathematically impossible for many types of questions—CCE allows models to represent multiple valid viewpoints simultaneously and to reason about their applications in different contexts.\n\nImplementation of CCE required several innovations in data collection and annotation. We assembled a diverse team of 87 cultural consultants spanning 28 countries who developed a dataset of 1.3 million culturally-situated examples covering topics from ethical dilemmas to social customs and linguistic expressions. Each example was annotated with cultural context metadata rather than being treated as universal ground truth.\n\nEvaluation of our pluralistic model showed remarkable improvements in cultural sensitivity metrics. When presented with culturally nuanced queries, the model demonstrated a 78% improvement in appropriately acknowledging different valid perspectives compared to baseline models. Importantly, the model learned to recognize when questions involve culturally-dependent answers versus those with more universal responses.\n\nBeyond technical performance, our research explored the deeper philosophical and ethical implications of pluralistic AI design. We conducted extensive stakeholder engagement across cultural contexts to develop frameworks for balancing respect for cultural diversity with commitment to fundamental human rights. The resulting ethical guidelines provide practical approaches for navigating tensions between cultural relativism and universal values in AI development.\n\nOne particularly challenging area was developing appropriate methodologies for handling deeply contested issues where different cultural perspectives may be in direct opposition. We found that rather than attempting to resolve these tensions through model design, a more productive approach involves transparent presentation of diverse viewpoints coupled with clear attribution of the sources and contexts for these perspectives. This approach respects the agency of users while avoiding the imposition of any single cultural framework as definitive.\n\nOur research also examined how pluralistic AI systems might function in cross-cultural communication contexts. Models incorporating CCE demonstrated promising capabilities as cultural mediators, helping users understand unfamiliar cultural contexts and facilitating more productive cross-cultural dialogue. This suggests potential applications beyond simply improving model performance to actively fostering greater intercultural understanding and cooperation.',
    date: 'February 13, 2024',
    image: '/images/blog/pluralistic-ai.jpg',
    categories: ['Generative AI', 'Natural Language Processing', 'Responsible AI'],
  },
  {
    id: 8,
    title: 'Urban mobility solutions: Calibrating digital twins at scale',
    excerpt: 'This research demonstrates how digital twin technology can model urban transportation systems with unprecedented accuracy. By calibrating these models with real-time data, city planners can optimize traffic flow, reduce congestion, and decrease carbon emissions from vehicles.\n\nUrban mobility challenges continue to intensify as cities grow, placing immense pressure on transportation infrastructure and contributing significantly to carbon emissions. Our research introduces a novel approach to urban mobility optimization through high-fidelity digital twins calibrated with multi-modal data sources at unprecedented scale.\n\nTraditionally, urban transportation modeling has relied on simplified abstractions that fail to capture the complex interdependencies between different mobility systems and human behavior patterns. Our digital twin framework overcomes these limitations by incorporating real-time data from over 20 different sources, including traffic sensors, public transit systems, ride-sharing platforms, parking management systems, and anonymized mobile phone movement patterns.\n\nA key innovation in our approach is the development of a hierarchical calibration methodology that operates across multiple temporal and spatial scales simultaneously. At the microscale, the system captures individual intersection dynamics and pedestrian-vehicle interactions. At the mesoscale, it models neighborhood traffic patterns and public transit operations. At the macroscale, it represents city-wide commuting patterns and infrastructure dependencies. This multi-scale approach enables both detailed operational optimizations and strategic infrastructure planning within a unified framework.\n\nWe deployed this system in collaboration with three major metropolitan areas over an 18-month period. In each city, we created a comprehensive digital twin incorporating the complete road network, public transportation routes, parking infrastructure, and historical mobility patterns. The system ingests approximately 1.2 terabytes of new data daily, continuously recalibrating its predictive models to maintain accuracy within 94% of observed conditions, even during unexpected events like weather disruptions or public gatherings.\n\nThe practical impact of these deployments has been substantial. In the first implementation city, strategic interventions informed by the digital twin resulted in a 23% reduction in average commute times and a 17% decrease in carbon emissions from urban mobility. These improvements came from a combination of traffic signal optimization, public transit schedule adjustments, and targeted infrastructure modifications identified through simulation-based scenario analysis.\n\nBeyond operational improvements, our research demonstrates how these digital twins enable more equitable mobility planning. By explicitly modeling accessibility metrics across different socioeconomic groups and neighborhoods, the system helped identify and address mobility gaps that disproportionately affected disadvantaged communities.\n\nOur approach also proved particularly valuable in supporting the transition toward more sustainable transportation options. The digital twins allowed planners to model the potential impact of various interventions promoting active transportation (walking, cycling) and public transit use. In one city, simulations guided the development of a new bicycle infrastructure network that increased cycling mode share by 34% within six months of implementation.\n\nA significant technical challenge we overcame was integrating the real-time calibration process with simulation capabilities that could scale to entire metropolitan regions. Using distributed computing techniques and hierarchical model architectures, we achieved simulation speeds 40 times faster than previous urban mobility models of comparable detail, enabling rapid iteration and exploration of mobility interventions.',
    date: 'February 10, 2024',
    image: '/images/blog/urban-mobility.jpg',
    categories: ['Algorithms & Theory', 'Climate & Sustainability', 'General Science'],
  },
  {
    id: 9,
    title: 'Chain of Agents: Large language models collaborating on long-context tasks',
    excerpt: 'This paper introduces a novel framework where multiple specialized LLM agents collaborate to solve complex tasks that require long-context understanding. Each agent focuses on a specific subtask, with a coordinator agent managing the workflow, significantly improving performance on complex reasoning challenges.\n\nAs language models continue to advance, there remains a fundamental tension between model specialization and generalization. Even the most capable models struggle with complex tasks requiring both breadth and depth of expertise. Our Chain of Agents (CoA) framework addresses this limitation by orchestrating collaboration between specialized language model instances, each focused on distinct aspects of a complex problem.\n\nUnlike previous approaches to LLM collaboration that rely on fixed, predetermined workflows, CoA implements a dynamic, adaptive collaboration structure. At the core of this system is a coordinator agent that functions as both task decomposer and workflow manager. When presented with a complex task, the coordinator analyzes requirements, identifies necessary specialized roles, and establishes a preliminary execution plan. Crucially, this plan evolves as the task progresses, with the coordinator continuously reassessing and redirecting efforts based on intermediate results.\n\nWe implemented specialized agents across several categories: research agents for information gathering and synthesis, reasoning agents for logical analysis and inference, creative agents for generating novel solutions, critique agents for identifying flaws or inconsistencies, and implementation agents for producing executable outputs like code or structured plans. Each agent utilizes the same base language model architecture but with specialized instruction tuning and context augmentation relevant to its role.\n\nEvaluation across diverse domains demonstrated significant performance improvements compared to single-model approaches. On complex programming tasks requiring both domain understanding and implementation skills, CoA achieved a 64% success rate compared to 37% for equivalent-sized single models. For scientific reasoning problems, the improvement was even more pronounced, with CoA solving 72% of problems compared to 29% for single models. Particularly notable was performance on tasks requiring integration of multiple knowledge domains, where the collaborative approach showed an 83% improvement over single-model baselines.\n\nDetailed analysis of agent interactions revealed several emergent behaviors that contribute to successful outcomes. We observed spontaneous decomposition of tasks into appropriate subtasks, effective handoffs between agents with clear communication of relevant context, and constructive debate when agents reached conflicting conclusions. These behaviors emerged without explicit programming, suggesting that the framework effectively leverages capabilities already present but not fully expressed in individual models.\n\nA significant advantage of the Chain of Agents approach is its ability to overcome context window limitations inherent in current LLMs. By distributing different components of a problem across multiple agents, the effective context capacity of the system expands dramatically. In long-document analysis tasks, CoA demonstrated the ability to maintain coherent reasoning across documents exceeding 500 pages—far beyond the capacity of any single model.\n\nThe framework also shows promising applications for human-AI collaboration. When human experts were integrated into the agent chain for specialized tasks, overall performance improved further, with the system effectively leveraging human expertise while minimizing repetitive or mechanical work. Participants in these collaborative sessions reported high satisfaction with the division of labor, noting that the system allowed them to focus on aspects where human judgment provided greatest value.',
    date: 'January 23, 2024',
    image: '/images/blog/chain-of-agents.jpg',
    categories: ['Generative AI', 'Machine Intelligence', 'Natural Language Processing'],
  },
  {
    id: 10,
    title: 'Parfait: Enabling private AI with research tools',
    excerpt: 'Parfait is a suite of research tools designed to enhance privacy in AI systems. This paper demonstrates how these tools can be applied to both training and inference processes, allowing developers to build AI solutions that protect user data while maintaining high performance.\n\nAs artificial intelligence becomes increasingly integrated into sensitive domains like healthcare, finance, and personal communications, the tension between leveraging data for model performance and preserving individual privacy has become a central challenge. Parfait addresses this challenge through a comprehensive toolkit that implements privacy-enhancing technologies across the entire AI development lifecycle.\n\nAt the foundation of Parfait is a modular architecture that separates privacy mechanisms from model implementation, allowing researchers and developers to experiment with different approaches without redesigning their entire systems. The toolkit includes implementations of state-of-the-art privacy techniques including differential privacy, federated learning, secure multi-party computation, homomorphic encryption, and trusted execution environments—each with standardized interfaces and configurable privacy-utility tradeoffs.\n\nA key innovation in Parfait is the introduction of "privacy composition protocols" that enable effective combination of multiple privacy-enhancing technologies. Traditional approaches often apply a single privacy mechanism, which either provides inadequate protection or severely impacts model utility. Our composition protocols allow for strategic application of different mechanisms at different stages of the AI pipeline, optimizing for both privacy and performance based on specific data sensitivity and computational constraints.\n\nWe evaluated Parfait across diverse applications including medical image analysis, financial fraud detection, and natural language processing. In medical imaging, our differentially private training combined with federated evaluation achieved 94% of the accuracy of non-private baselines while providing formal privacy guarantees. For financial applications, secure multi-party computation protocols enabled cross-institutional fraud detection without revealing sensitive transaction data, improving detection rates by 27% compared to institution-specific models.\n\nParticularly promising was Parfait\'s performance in language model applications. Using a combination of local differential privacy for tokenization and secure aggregation for model updates, we trained language models that preserved user privacy while achieving perplexity scores within 8% of non-private equivalents—a significant improvement over previous privacy-preserving approaches that typically sacrifice 20-30% of performance.\n\nBeyond technical implementations, Parfait includes comprehensive documentation, privacy analysis tools, and visualization components that make privacy-enhancing technologies more accessible to AI practitioners without specialized cryptographic expertise. This focus on usability addresses a critical gap in current privacy tooling, where implementation complexity often prevents adoption even when privacy is a priority.\n\nThe toolkit also features a novel privacy budget management system that helps organizations track and allocate their privacy expenditure across multiple applications and datasets. This system enables responsible use of sensitive data by providing clear visibility into cumulative privacy risks and helping enforce organizational privacy policies.\n\nIn collaboration with industry partners, we conducted several real-world deployments of Parfait in production environments. These case studies demonstrated not only technical efficacy but also practical integration with existing development workflows and compliance frameworks. Organizations reported that the modular nature of Parfait significantly reduced the barrier to adopting privacy-enhancing technologies, enabling privacy-by-design approaches that were previously considered too resource-intensive.',
    date: 'January 22, 2024',
    image: '/images/blog/private-ai.jpg',
    categories: ['Distributed Systems & Parallel Computing', 'Generative AI', 'Responsible AI', 'Security, Privacy and Abuse Prevention'],
  },
  {
    id: 11,
    title: 'Zero-shot mono-to-binaural speech synthesis',
    excerpt: 'This research presents a breakthrough in spatial audio processing, enabling the conversion of mono audio recordings to binaural audio without requiring paired training data. The technique creates more immersive audio experiences for virtual reality, gaming, and media consumption.\n\nSpatial audio plays a crucial role in creating immersive experiences, but the vast majority of existing audio content is recorded in mono or simple stereo formats that lack true spatial characteristics. Our research presents a novel approach to synthesizing convincing binaural audio from mono recordings without requiring paired examples for training, effectively solving a challenging zero-shot learning problem.\n\nTraditional approaches to spatial audio synthesis rely heavily on paired training data—recordings of the same content in both mono and binaural formats—which is scarce and expensive to produce. Our method overcomes this limitation by leveraging the physical principles of acoustic propagation combined with self-supervised learning techniques that extract spatial cues from unpaired mono and binaural datasets.\n\nAt the core of our system is a neural network architecture that separates the audio conversion process into two distinct stages. First, a physical modeling component estimates how sound would propagate in different spatial environments, generating intermediate representations that encode directional and environmental properties. Second, a perceptual refinement network adjusts these representations to match the psychoacoustic characteristics of human spatial hearing, focusing on subtle cues that contribute to convincing spatial perception.\n\nTo train this system without paired data, we developed a novel adversarial training approach. The model learns to generate binaural outputs that are indistinguishable from real binaural recordings according to a discriminator network specifically designed to assess spatial audio characteristics. Additionally, we incorporated self-supervised consistency losses that ensure the generated binaural audio correctly preserves the original mono content while adding plausible spatial information.\n\nEvaluation through both objective metrics and perceptual studies demonstrated the effectiveness of our approach. In blind listening tests with 120 participants, our zero-shot binaural synthesis was rated as convincingly spatial as recordings made with actual binaural microphones in 76% of cases. Particularly noteworthy was the system\'s ability to generalize across diverse acoustic environments and sound sources, including speech, music, and environmental sounds.\n\nThe practical applications of this technology are far-reaching. For virtual reality content, it enables the conversion of existing audio libraries to spatial formats without re-recording. In telecommunications, it can enhance telepresence by spatializing voice communications based on virtual participant positions. For accessibility applications, it can provide spatial audio cues to visually impaired users from conventional audio sources, improving navigational assistance and environmental awareness.\n\nA significant technical challenge we addressed was the accurate modeling of Head-Related Transfer Functions (HRTFs) without subject-specific measurements. Our approach uses a generalizable HRTF model that combines anatomical priors with perceptual adaptation, achieving spatial localization accuracy comparable to individualized HRTF recordings for most listeners. For users requiring more precise spatial rendering, the system includes an efficient calibration process that can personalize the spatial representation with just 2-3 minutes of interaction.\n\nBeyond the technical contributions, our research demonstrates the potential of self-supervised learning to solve problems previously considered to require extensive paired training data. The principles developed here may be applicable to other modality conversion tasks where paired examples are difficult to obtain.',
    date: 'January 16, 2024',
    image: '/images/blog/speech-synthesis.jpg',
    categories: ['Sound & Accoustics', 'Speech Processing'],
  },
  {
    id: 12,
    title: 'Understanding Transformer reasoning capabilities via graph algorithms',
    excerpt: 'This paper provides theoretical insights into how Transformer models perform reasoning tasks by drawing parallels with graph algorithms. By analyzing attention patterns as graph operations, researchers can better understand the capabilities and limitations of these models on complex reasoning problems.\n\nWhile Transformer-based language models have demonstrated impressive reasoning capabilities across various domains, the theoretical understanding of how these models represent and manipulate abstract relationships remains limited. Our research establishes a novel framework for analyzing Transformer reasoning through the lens of graph theory, providing both explanatory and predictive power regarding these models\' capabilities and limitations.\n\nWe begin by formalizing the attention mechanism in Transformers as operations on implicit graphs, where tokens represent nodes and attention weights represent edge strengths. Through this formalization, we demonstrate that multi-head self-attention layers can implement fundamental graph algorithms including breadth-first search, shortest path finding, and transitive closure computation. These algorithmic capabilities emerge naturally from the Transformer architecture and explain the model\'s ability to capture complex relational patterns in data.\n\nTo validate this theoretical framework, we designed a series of synthetic reasoning tasks with known graph-theoretic complexity. Our experiments revealed strong correlations between a task\'s graph-algorithmic requirements and Transformer performance. Tasks requiring only local propagation of information (analogous to single-step graph operations) were learned efficiently even with limited data. In contrast, tasks requiring global information propagation (analogous to multi-step graph traversals) showed performance strongly dependent on model depth, with each layer effectively implementing one step of graph propagation.\n\nParticularly revealing was our analysis of attention patterns when models solved reasoning tasks. Using visualization techniques and statistical measures, we identified specialized attention heads that implemented specific graph operations. Some heads focused on adjacent relations, while others specialized in longer-range dependencies, effectively forming a computational graph that solved the reasoning task in stages.\n\nThis graph-theoretic perspective yields practical insights for model design. We found that performance on complex reasoning tasks improved significantly when model architecture was aligned with the underlying graph structure of the problem. For example, by analyzing a range of logical reasoning benchmarks in terms of their graph properties, we developed targeted architectural modifications that improved accuracy by 12-18% without increasing model size.\n\nOur framework also provides new explanations for known limitations of Transformer models. The difficulty these models face with certain types of mathematical reasoning, for instance, can be understood through the lens of graph algorithms that are fundamentally challenging to implement via attention mechanisms. This analysis suggests specific architectural enhancements that might address these limitations in future designs.\n\nWe extended our analysis to investigate how Transformers handle compositional reasoning tasks that require combining multiple types of graph operations. The results indicate that the architecture can learn to compose basic graph operations to solve more complex problems, but often struggles when the necessary composition pattern isn\'t represented in the training data. This finding has important implications for training data design, suggesting that explicit coverage of compositional patterns may be as important as raw quantity of examples.\n\nThe graph-theoretic framework also enabled us to perform detailed error analysis on reasoning benchmarks. By tracing the flow of information through attention patterns, we could identify specific points of failure in the reasoning process rather than simply observing incorrect outputs. This diagnostic capability proved valuable for targeted model improvements, allowing us to address specific weaknesses in reasoning capabilities.',
    date: 'December 20, 2023',
    image: '/images/blog/transformer-reasoning.jpg',
    categories: ['Algorithms & Theory', 'Data Mining & Modeling'],
  },
  {
    id: 13,
    title: 'Quantum neural networks for materials science',
    excerpt: 'This research combines quantum computing with neural networks to accelerate materials discovery. By leveraging quantum properties to model molecular interactions, researchers can predict new materials with desired properties more efficiently than classical approaches.\n\nThe discovery of novel materials with specific properties represents one of the grand challenges at the intersection of chemistry, physics, and engineering. Traditional computational approaches often struggle with the inherent quantum mechanical nature of molecular interactions, leading to trade-offs between accuracy and computational feasibility. Our research presents a breakthrough hybrid approach that leverages quantum neural networks (QNNs) to significantly accelerate materials discovery while maintaining quantum mechanical accuracy.\n\nConventional machine learning approaches to materials science rely on handcrafted features or approximations that may miss subtle quantum effects crucial for accurately predicting material properties. Conversely, pure quantum mechanical simulations provide high accuracy but scale poorly with system size, limiting their applicability to complex materials. Our quantum neural network framework bridges this gap by embedding quantum circuits within a neural network architecture, allowing the model to learn quantum mechanical patterns directly from data.\n\nThe core innovation in our approach is a variational quantum circuit architecture specifically designed to capture electronic structure information. The circuit implements a series of entangling operations that mirror the correlation patterns in molecular electron clouds, allowing it to represent quantum states far more efficiently than classical neural networks. This quantum component is then integrated with classical neural network layers that handle larger-scale structural patterns and property prediction.\n\nWe trained this hybrid model on a combination of experimental data from materials databases and quantum mechanical simulations of smaller molecular systems. The QNN effectively learned to generalize from these examples to predict properties of novel materials, including band gaps, formation energies, and mechanical characteristics. Remarkably, the model achieved accuracy comparable to density functional theory calculations while requiring orders of magnitude less computational time for predictions.\n\nTo validate our approach, we applied the QNN to discover new candidates for solid-state battery electrolytes—a critical technology for renewable energy storage. The model screened over 50,000 potential materials and identified 37 promising candidates with optimal combinations of ionic conductivity, electrochemical stability, and mechanical properties. Subsequent experimental synthesis and testing of the top five candidates confirmed that three exhibited performance superior to current commercial electrolytes.\n\nBeyond specific materials discovery, our research demonstrates a pathway for quantum advantage in scientific machine learning. By focusing quantum resources on the components of a problem that most benefit from quantum processing—in this case, electronic structure calculations—while using classical computation for other aspects, we achieve practical quantum enhancement without requiring large-scale fault-tolerant quantum computers.\n\nOur methodology also addresses a key challenge in quantum machine learning: the limited availability of quantum hardware and the variability in quantum computing architectures. By developing a hardware-agnostic approach that can be compiled to different quantum backends, from superconducting qubits to trapped ions, we ensure that our models can be deployed across evolving quantum technologies while maintaining consistent performance.\n\nThe implications of this work extend beyond materials science to other scientific domains where quantum effects play a crucial role, such as drug discovery, catalysis research, and the development of novel quantum materials. In each case, the ability to efficiently model quantum mechanical interactions while maintaining classical integration with existing scientific workflows offers a practical path to accelerating scientific discovery through quantum-enhanced computation.',
    date: 'December 15, 2023',
    image: '/images/blog/quantum-materials.jpg',
    categories: ['Quantum', 'Machine Intelligence', 'General Science'],
  },
  {
    id: 14,
    title: 'Robotics and reinforcement learning: A new approach to dexterous manipulation',
    excerpt: 'This paper presents advances in robotic manipulation using deep reinforcement learning. The approach enables robots to learn complex hand movements from minimal demonstration data, significantly improving their ability to handle irregularly shaped objects and perform precise tasks.\n\nDexterous manipulation remains one of the most challenging frontiers in robotics, requiring precise control of multi-fingered hands to interact with diverse objects in unstructured environments. Our research introduces a novel approach that combines advanced reinforcement learning techniques with innovative simulation methods to achieve unprecedented manipulation capabilities with minimal human demonstration.\n\nTraditional approaches to robotic manipulation typically rely either on extensive hand-engineered control systems or large datasets of human demonstrations. Both approaches have significant limitations—engineering-based approaches struggle to generalize across diverse objects and tasks, while demonstration-based methods require prohibitive amounts of training data. Our framework overcomes these limitations through a hierarchical reinforcement learning approach that efficiently learns from limited demonstrations while generalizing broadly.\n\nAt the foundation of our system is a physics simulation environment that accurately models contact dynamics between robotic fingers and diverse objects. We developed specialized techniques for modeling friction, deformation, and contact stability that achieve 94% correlation with real-world interaction measurements—a significant improvement over previous simulation approaches. This high-fidelity simulation enables effective transfer of policies from simulated to physical environments.\n\nThe learning architecture consists of three hierarchical levels. At the lowest level, a set of primitive controllers manage basic contact relationships between fingers and object surfaces. At the mid-level, compositional action modules sequence these primitives to achieve basic manipulation operations like pinching, rolling, or controlled sliding. At the highest level, a task planning module selects and parameterizes these compositional actions based on the current state and goal.\n\nA key innovation in our approach is the adaptive demonstration augmentation technique we developed. Starting with just 20 human demonstrations of diverse manipulation tasks, the system automatically generates thousands of synthetic demonstrations by systematically varying object properties, hand configurations, and environmental conditions. These synthetic demonstrations, combined with adversarial training methods, enable the model to learn robust policies that generalize across objects and tasks not seen during training.\n\nWe evaluated our approach on a physical 5-finger robotic hand across 22 manipulation tasks involving objects with varying shapes, sizes, weights, and material properties. The system successfully completed 86% of tasks on novel objects, compared to 34% for the previous state-of-the-art methods. Particularly impressive was the system\'s ability to manipulate challenging objects like eggs, paper clips, and deformable materials like fabric—tasks that typically require delicate force control and adaptive strategies.\n\nBeyond the task completion metrics, our approach demonstrated several qualitative improvements in manipulation capabilities. The learned policies exhibited human-like adaptability, automatically adjusting grip forces and finger positions in response to unexpected object movements or properties. The system could recover from manipulation failures, such as an object slipping, by dynamically replanning and adjusting its strategy—a capability rarely seen in previous robotic manipulation systems.\n\nWe also conducted extensive ablation studies to understand the contribution of different components of our approach. These experiments revealed that the hierarchical structure was particularly important for enabling generalization to new tasks, while the physics simulation fidelity was critical for successful sim-to-real transfer. The adaptive demonstration augmentation provided the greatest performance improvement on challenging objects with complex physical properties.',
    date: 'December 10, 2023',
    image: '/images/blog/robotics-manipulation.jpg',
    categories: ['Robotics', 'Machine Intelligence'],
  },
  {
    id: 15,
    title: 'Improving NLP models for low-resource languages',
    excerpt: 'This research addresses the challenges of developing natural language processing tools for languages with limited digital resources. Using transfer learning and data augmentation techniques, the approach achieves significant performance gains for languages previously underserved by AI technologies.\n\nLanguage technologies have advanced dramatically in recent years, but these advances have primarily benefited major world languages with abundant digital resources. More than 6,000 languages are spoken globally, yet fewer than 100 have sufficient resources for effective NLP model development. Our research addresses this critical gap through novel techniques that enable high-performance language models for low-resource languages without requiring large-scale text corpora or expensive annotation efforts.\n\nOur approach combines three complementary strategies: cross-lingual transfer learning, linguistically-informed data augmentation, and community-centered data collection. For cross-lingual transfer, we developed a novel architecture that identifies and leverages deep structural similarities between languages even when they appear superficially different. By mapping languages to a universal linguistic structure space rather than relying on lexical similarities, our models can effectively transfer knowledge between languages that traditional approaches would consider too distant for productive transfer.\n\nThe data augmentation component employs a generative approach guided by linguistic principles specific to each target language. Instead of applying generic transformations, the system analyzes the morphological, syntactic, and phonological patterns of each language and generates synthetic examples that reflect authentic linguistic variations. This linguistically-informed approach produced augmented datasets that native speakers judged as natural and representative in 89% of cases, compared to 42% for previous augmentation methods.\n\nParticularly innovative is our community-centered data collection framework, which empowers native speaker communities to efficiently create high-value datasets. Rather than attempting to collect large general corpora, we identified the highest-leverage data types for each language and developed lightweight annotation tools that non-technical community members could use on mobile devices. This approach yielded datasets of 8,000-15,000 annotated examples per language—small by conventional standards but strategically composed to maximize learning signal.\n\nWe evaluated our approach across 16 low-resource languages spanning 11 language families and diverse geographical regions. For basic NLP tasks like part-of-speech tagging and named entity recognition, our models achieved average performance within 86% of equivalent models for high-resource languages—a dramatic improvement over the previous gap of 53%. For machine translation, our approach improved BLEU scores by an average of 14 points compared to the best previous approaches for low-resource language pairs.\n\nBeyond technical performance, our research emphasizes the importance of community involvement and linguistic expertise in developing inclusive language technologies. The collaborative methodology we established not only produced better models but also ensured their cultural appropriateness and practical utility for the communities they serve.\n\nWe also conducted a detailed error analysis to understand the remaining challenges in low-resource NLP. This analysis revealed that certain linguistic phenomena, particularly those involving complex discourse structures or culture-specific references, remain challenging even with our enhanced approaches. These findings point to important directions for future research, suggesting the need for models that can more effectively incorporate cultural and pragmatic knowledge alongside linguistic patterns.\n\nAn important practical outcome of this research has been the establishment of sustainable community partnerships for ongoing language technology development. In several cases, the tools and methodologies we developed have been adopted by language communities and integrated into their own digital preservation and revitalization efforts, creating positive feedback loops that continue to improve resource availability and model performance.',
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
      <section id="blog-content" className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-small-black/[0.05] -z-10" />
        
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#101727] to-black -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl relative py-20">
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
