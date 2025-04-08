// Mock data for when the News API is unavailable
export const mockNewsData = {
  articles: [
    {
      title: "OpenAI Introduces GPT-5 with Enhanced Reasoning Capabilities",
      description: "OpenAI has unveiled GPT-5, the latest iteration of its language model with significantly improved reasoning capabilities, better factual accuracy, and reduced hallucinations. The new model demonstrates remarkable performance across various benchmarks.",
      author: "AI Research Team",
      source: {
        id: "openai",
        name: "OpenAI Blog"
      },
      urlToImage: "https://images.unsplash.com/photo-1677442135968-6db3b0025e95?q=80&w=1932&auto=format&fit=crop",
      publishedAt: "2025-04-15T09:30:00Z",
      url: "https://openai.com/blog/gpt-5"
    },
    {
      title: "Google DeepMind Achieves Breakthrough in Protein Folding Prediction",
      description: "Google DeepMind researchers have announced a significant advancement in protein structure prediction, enabling more accurate modeling of complex protein interactions. This breakthrough could accelerate drug discovery and our understanding of biological processes.",
      author: "DeepMind Research",
      source: {
        id: "deepmind",
        name: "DeepMind Blog"
      },
      urlToImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
      publishedAt: "2025-04-12T14:15:00Z",
      url: "https://deepmind.google/discover/blog/alphafold-3/"
    },
    {
      title: "Microsoft Introduces AI-Powered Development Environment",
      description: "Microsoft has launched a new AI-powered development environment that can understand natural language instructions and generate code across multiple programming languages. The tool aims to boost developer productivity and make coding more accessible.",
      author: "Microsoft AI",
      source: {
        id: "microsoft",
        name: "Microsoft AI Blog"
      },
      urlToImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop",
      publishedAt: "2025-04-10T11:45:00Z",
      url: "https://blogs.microsoft.com/ai/"
    },
    {
      title: "Anthropic Releases Claude 3.5 with Multimodal Capabilities",
      description: "Anthropic has released Claude 3.5, featuring enhanced multimodal capabilities that allow the AI to process and reason about images, documents, and text simultaneously. The model demonstrates improved performance on complex reasoning tasks.",
      author: "Anthropic Research",
      source: {
        id: "anthropic",
        name: "Anthropic Blog"
      },
      urlToImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
      publishedAt: "2025-04-08T16:20:00Z",
      url: "https://www.anthropic.com/news"
    },
    {
      title: "Meta AI Introduces Advanced Translation Model Supporting 200 Languages",
      description: "Meta AI has unveiled a new translation model capable of translating between 200 languages with state-of-the-art accuracy. The model aims to bridge language barriers and make content more accessible globally.",
      author: "Meta AI Research",
      source: {
        id: "meta",
        name: "Meta AI Blog"
      },
      urlToImage: "https://images.unsplash.com/photo-1546146830-2cca9512c68e?q=80&w=2080&auto=format&fit=crop",
      publishedAt: "2025-04-05T10:00:00Z",
      url: "https://ai.meta.com/blog/"
    },
    {
      title: "New Research Shows AI Can Predict Climate Patterns with 95% Accuracy",
      description: "A team of climate scientists and AI researchers have developed a model that can predict climate patterns with 95% accuracy, potentially revolutionizing our ability to forecast and mitigate extreme weather events.",
      author: "Climate AI Initiative",
      source: {
        id: "science",
        name: "Science Daily"
      },
      urlToImage: "https://images.unsplash.com/photo-1569503689347-a5dbdaca7c69?q=80&w=1974&auto=format&fit=crop",
      publishedAt: "2025-04-03T13:10:00Z",
      url: "https://www.sciencedaily.com/news/climate/"
    },
    {
      title: "AI Ethics Board Proposes New Guidelines for Generative AI",
      description: "An international AI ethics board has proposed new guidelines for generative AI development and deployment, addressing concerns about misinformation, copyright, and privacy. The guidelines aim to promote responsible AI innovation.",
      author: "AI Ethics Coalition",
      source: {
        id: "ethics",
        name: "AI Ethics Journal"
      },
      urlToImage: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=2070&auto=format&fit=crop",
      publishedAt: "2025-04-01T09:45:00Z",
      url: "https://aiethics.org/guidelines"
    },
    {
      title: "Researchers Develop AI System That Can Identify Early Signs of Alzheimer's",
      description: "A team of medical researchers has developed an AI system that can identify early signs of Alzheimer's disease from brain scans with high accuracy, potentially enabling earlier intervention and treatment.",
      author: "Medical AI Research",
      source: {
        id: "medical",
        name: "Medical AI Journal"
      },
      urlToImage: "https://images.unsplash.com/photo-1559757175-7cb057fba93c?q=80&w=2071&auto=format&fit=crop",
      publishedAt: "2025-03-29T15:30:00Z",
      url: "https://medicalai.org/research"
    },
    {
      title: "NVIDIA Unveils Next-Generation AI Chips with 5x Performance Boost",
      description: "NVIDIA has announced its next-generation AI chips, offering a 5x performance boost over previous models while consuming less power. The new chips are designed to accelerate AI training and inference for large-scale models.",
      author: "NVIDIA Research",
      source: {
        id: "nvidia",
        name: "NVIDIA Blog"
      },
      urlToImage: "https://images.unsplash.com/photo-1642142799187-71555a9a934c?q=80&w=2070&auto=format&fit=crop",
      publishedAt: "2025-03-27T11:20:00Z",
      url: "https://blogs.nvidia.com/"
    },
    {
      title: "AI-Generated Art Wins Major International Competition",
      description: "For the first time, an AI-generated artwork has won a major international art competition, sparking debates about creativity, authorship, and the future of art in the age of artificial intelligence.",
      author: "Art & Technology Review",
      source: {
        id: "art",
        name: "Art & Technology"
      },
      urlToImage: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop",
      publishedAt: "2025-03-25T14:00:00Z",
      url: "https://artandtechnology.com/ai-art"
    },
    {
      title: "Autonomous Vehicles Achieve New Safety Milestone with AI Navigation",
      description: "A leading autonomous vehicle company has announced that its AI navigation system has achieved a new safety milestone, with over 10 million miles driven without human intervention or accidents.",
      author: "Autonomous Tech Today",
      source: {
        id: "auto",
        name: "Autonomous Tech"
      },
      urlToImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
      publishedAt: "2025-03-23T10:15:00Z",
      url: "https://autonomoustech.com/milestone"
    },
    {
      title: "AI-Powered Education Platform Shows Significant Improvement in Student Outcomes",
      description: "A new study reveals that students using an AI-powered education platform showed significant improvements in learning outcomes across multiple subjects, particularly in mathematics and science.",
      author: "Education Technology Review",
      source: {
        id: "edu",
        name: "EdTech Review"
      },
      urlToImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032&auto=format&fit=crop",
      publishedAt: "2025-03-21T09:30:00Z",
      url: "https://edtechreview.com/ai-education"
    }
  ]
};
