import { AITool } from '../types';

export const browserExtensions: AITool[] = [
  {
    id: 'chat-gpt-sidebar',
    name: 'ChatGPT Sidebar',
    description: 'Browser extension that adds ChatGPT to every website you visit',
    logoUrl: 'https://pixelz.cc/wp-content/uploads/2023/12/open-ai-chat-gpt-logo-uhd-4k-wallpaper.jpg',
    categories: ['browser-extensions', 'productivity'],
    mainUse: 'Access AI assistance on any website',
    pricing: 'Free with premium features',
    otherUses: 'Content summarization, translation, research',
    userExperience: 'Convenient sidebar interface for any website',
    websiteUrl: 'https://chatgptsidebar.com/',
    rating: 4
  },
  {
    id: 'truestory',
    name: 'TrueStory',
    description: 'AI fact-checking browser extension for identifying misinformation',
    logoUrl: 'https://th.bing.com/th/id/OIP.eGEIAAaphaa3y2DdOWCKIQHaGk?rs=1&pid=ImgDetMain',
    categories: ['browser-extensions', 'productivity'],
    mainUse: 'AI-powered fact-checking while browsing',
    pricing: 'Free beta',
    otherUses: 'Credibility assessment, source verification',
    userExperience: 'Simple visual indicators for content reliability',
    websiteUrl: 'https://truestory.ai/',
    rating: 4
  },

  {
    id: 'wordtune',
    name: 'Wordtune',
    description: 'AI-powered writing assistant that helps with rephrasing and improving your text.',
    logoUrl: 'https://www.pngall.com/wp-content/uploads/15/WordTune-Logo-PNG-Pic.png',
    categories: ['writing', 'productivity', 'browser-extensions'],
    mainUse: 'Rewriting and improving text in multiple styles.',
    pricing: 'Free plan, Premium starts at $9.99/month',
    otherUses: 'Rephrase, summarize, and adjust the tone of writing.',
    userExperience: 'User-friendly, with helpful rewrite suggestions.',
    websiteUrl: 'https://chrome.google.com/webstore/detail/wordtune/obmhdjdgkjmjfhhagofddhfkpjigcggb',
    rating: 4.5,
  },
  {
    id: 'chatgpt-writer',
    name: 'ChatGPT Writer',
    description: 'Generates email and message drafts using OpenAI’s GPT technology.',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW70zv86MCNnKf86EKOrxO8_XHkOegeEyscg&s',
    categories: ['writing', 'communication', 'browser-extensions'],
    mainUse: 'Email drafting and communication.',
    pricing: 'Free',
    otherUses: 'Generates social media posts and other written content.',
    userExperience: 'Fast and efficient, but can be generic in some responses.',
    websiteUrl: 'https://chat.openai.com',
    rating: 4.6,
  },
  {
    id: 'compose-ai',
    name: 'Compose AI',
    description: 'AI assistant that autocompletes sentences and generates text in real-time.',
    logoUrl: 'https://media.licdn.com/dms/image/v2/C4E0BAQHGs7_CQO3QLQ/company-logo_200_200/company-logo_200_200/0/1630635544740?e=2147483647&v=beta&t=AStqHVimj0XkOfJUtby-tjteN7wR7Ich1bdIjfFFg3A',
    categories: ['writing', 'productivity', 'browser-extensions'],
    mainUse: 'Text autocompletion and generation.',
    pricing: 'Free plan, Pro starts at $9.99/month',
    otherUses: 'Great for drafting emails, messages, and content.',
    userExperience: 'Smooth integration, good for productivity.',
    websiteUrl: 'https://chrome.google.com/webstore/detail/compose-ai/aphkdbjgbjjoeeifkkmabmjbmbkhjgfk',
    rating: 4.7,
  },
  {
    id: 'textcortex',
    name: 'TextCortex',
    description: 'An AI-powered writing tool to help with content creation and language translation.',
    logoUrl: 'https://www.textcortex.com/images/logo.svg',
    categories: ['writing', 'translation', 'browser-extensions'],
    mainUse: 'Writing, paraphrasing, and translation.',
    pricing: 'Free plan, Premium starts at $19/month',
    otherUses: 'Creates summaries and provides AI-driven content ideas.',
    userExperience: 'Intuitive, but some improvements needed for translation accuracy.',
    websiteUrl: 'https://chrome.google.com/webstore/detail/textcortex-ai-writer/ambbmffldfjbclbhnjlmfmolclmlgnhd',
    rating: 4.4,
  },
  {
    id: 'chatgpt-for-google',
    name: 'ChatGPT for Google',
    description: 'Integrates ChatGPT results alongside Google search results.',
    logoUrl: 'https://pbs.twimg.com/profile_images/1611354754403438593/9lSNlhis_400x400.jpg',
    categories: ['search', 'ai-assistant', 'browser-extensions'],
    mainUse: 'Search enhancement with AI-powered summaries and answers.',
    pricing: 'Free',
    otherUses: 'Quick answers and chat-based research assistance.',
    userExperience: 'Makes browsing more efficient with AI insights.',
    websiteUrl: 'https://chrome.google.com/webstore/detail/chatgpt-for-google',
    rating: 4.8,
  },
  {
    id: 'webchatgpt',
    name: 'WebChatGPT',
    description: 'Enhances ChatGPT with web access for more accurate and up-to-date results.',
    logoUrl: 'https://blog.logomyway.com/wp-content/uploads/2023/08/chatgpt-logo.png',
    categories: ['search', 'ai-assistant', 'browser-extensions'],
    mainUse: 'Adds web browsing to ChatGPT for live results.',
    pricing: 'Free',
    otherUses: 'Useful for real-time research and keeping responses current.',
    userExperience: 'Great for getting accurate answers with real-time info.',
    websiteUrl: 'https://chrome.google.com/webstore/detail/webchatgpt',
    rating: 4.7,
  },
  {
    id: 'monica',
    name: 'Monica',
    description: 'A conversational AI assistant that works across any website.',
    logoUrl: 'https://play-lh.googleusercontent.com/imw4zSeaSUa-duDEAGXPjIrpj1boTkZJ3Xc9cr9y0ENJCXInGjWJMN4uFXSdJFxz4Lc',
    categories: ['ai-assistant', 'productivity', 'browser-extensions'],
    mainUse: 'Personal assistant for managing tasks and research.',
    pricing: 'Free',
    otherUses: 'Can help with summarizing articles, generating answers, etc.',
    userExperience: 'Chat-based, easy to use with good accuracy.',
    websiteUrl: 'https://www.monica.ai',
    rating: 4.6,
  },
  {
    id: 'glasp',
    name: 'Glasp',
    description: 'Highlight and summarize web content with AI.',
    logoUrl: 'https://www.glasp.co/images/logo.svg',
    categories: ['productivity', 'research', 'browser-extensions'],
    mainUse: 'Content summarization and highlight extraction.',
    pricing: 'Free plan, Premium starts at $7/month',
    otherUses: 'Capture highlights, create summaries, and organize research.',
    userExperience: 'Works well with articles and research papers.',
    websiteUrl: 'https://chrome.google.com/webstore/detail/glasp-highlighter',
    rating: 4.5,
  },
  {
    id: 'wisdolia',
    name: 'Wisdolia',
    description: 'Generates flashcards and summaries from articles or PDFs.',
    logoUrl: 'https://www.wisdolia.com/logo.png',
    categories: ['learning', 'productivity', 'browser-extensions'],
    mainUse: 'Creates study flashcards and article summaries.',
    pricing: 'Free',
    otherUses: 'Helps in quick learning and revising key points.',
    userExperience: 'Great for students and professionals alike.',
    websiteUrl: 'https://chrome.google.com/webstore/detail/wisdolia',
    rating: 4.4,
  },
  {
    id: 'mailmaestro',
    name: 'MailMaestro',
    description: 'Write professional emails quickly with AI assistance.',
    logoUrl: 'https://media.licdn.com/dms/image/v2/C560BAQFJQeF0zArSPQ/company-logo_200_200/company-logo_200_200/0/1678884901696/maestrolabs_logo?e=2147483647&v=beta&t=lvhXzohdewGgYs3KdxrJDbrTBYomx5HQVW3GIevqqAk',
    categories: ['writing', 'communication', 'browser-extensions'],
    mainUse: 'AI-assisted email drafting for Gmail and Outlook.',
    pricing: 'Free, Premium version available',
    otherUses: 'Streamlines email communication for businesses.',
    userExperience: 'Time-saving and simple interface.',
    websiteUrl: 'https://chrome.google.com/webstore/detail/mailmaestro',
    rating: 4.6,
  },
  {
    id: 'ellie',
    name: 'Ellie',
    description: 'AI that generates quick, personalized email responses.',
    logoUrl: 'https://media.licdn.com/dms/image/v2/C4D0BAQFSMp0bd4sjxg/company-logo_200_200/company-logo_200_200/0/1668613548241/ellie_technologies_logo?e=2147483647&v=beta&t=Ktrq2CgTe1ymKajtM18AM9ifJ73FdWIc1Md3bN9m6gM',
    categories: ['communication', 'productivity', 'browser-extensions'],
    mainUse: 'Personalized email reply generation.',
    pricing: 'Free plan, Pro starts at $9.99/month',
    otherUses: 'Email drafting for customer service or quick responses.',
    userExperience: 'Simple and effective, with great personalization.',
    websiteUrl: 'https://www.ellie.ai',
    rating: 4.5,
  },
  {
    id: 'magical',
    name: 'Magical',
    description: 'Text expander and smart auto-fill powered by AI.',
    logoUrl: 'https://media.licdn.com/dms/image/v2/C560BAQFAiJjx-TqgZQ/company-logo_200_200/company-logo_200_200/0/1638975261846/getmagical_logo?e=2147483647&v=beta&t=2zhj-odgG3FYr0rj_MUGRDqrC7c9X_s9t-nKhAAl_iY',
    categories: ['productivity', 'automation', 'browser-extensions'],
    mainUse: 'Auto-filling repetitive tasks, expanding text.',
    pricing: 'Free, Premium starts at $15/month',
    otherUses: 'Integrates with forms, emails, and other web tasks.',
    userExperience: 'Smooth automation, excellent for busy professionals.',
    websiteUrl: 'https://www.magical.so',
    rating: 4.7,
  },
  {
    id: 'bardeen',
    name: 'Bardeen',
    description: 'Automate tasks and workflows with AI triggers.',
    logoUrl: 'https://media.licdn.com/dms/image/v2/D560BAQEzSXhSE2SQDg/company-logo_200_200/company-logo_200_200/0/1716353067827/bardeen_logo?e=2147483647&v=beta&t=2NTV0weJ8BmajSR2sC3jSde3JZn7aqQiSyFX9-kOrQY',
    categories: ['automation', 'productivity', 'browser-extensions'],
    mainUse: 'Browser automation and task management with AI.',
    pricing: 'Free plan, Pro starts at $15/month',
    otherUses: 'Integrates with various apps and services for automation.',
    userExperience: 'Highly customizable with a learning curve.',
    websiteUrl: 'https://chrome.google.com/webstore/detail/bardeen',
    rating: 4.6,
  },
  {
    id: 'tactiq',
    name: 'Tactiq',
    description: 'AI-powered meeting transcriptions and summaries for Zoom/Google Meet.',
    logoUrl: 'https://ph-files.imgix.net/004e72fb-e5e3-4b1e-86c6-2d6cbcf8cbbc.jpeg?auto=format',
    categories: ['productivity', 'collaboration', 'browser-extensions'],
    mainUse: 'Live transcription and summary of meetings.',
    pricing: 'Free plan, Premium starts at $8/month',
    otherUses: 'Automatic note-taking and key point extraction.',
    userExperience: 'Easy to use, great for remote teams.',
    websiteUrl: 'https://www.tactiq.io',
    rating: 4.7,
  },
  {
    id: 'merlin',
    name: 'Merlin',
    description: 'AI assistant browser extension for research and writing.',
    logoUrl: 'https://ai.bizequals.com/media/com_jbusinessdirectory/pictures/companies/5/merlin-logo-og.webp',
    categories: ['productivity', 'browser-extensions', 'writing'],
    mainUse: 'AI assistance anywhere on the web.',
    pricing: 'Free tier with premium features',
    otherUses: 'Content summarization, writing assistance, research.',
    userExperience: 'Accessible via browser extension with simple interface.',
    websiteUrl: 'https://merlin.foyer.work/',
    rating: 4,
  },
];
