import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import { parse } from 'node-html-parser';
import { mockBlogPosts } from './mockData';

// Define RSS feed sources
const RSS_FEEDS = [
  "https://openai.com/blog/rss/",
  "https://ai.googleblog.com/feeds/posts/default",
  "https://news.mit.edu/topic/artificial-intelligence2/feed", // Changed to HTTPS
  "https://towardsdatascience.com/feed",
  "https://blogs.nvidia.com/blog/category/artificial-intelligence/feed/",
  "https://machinelearningmastery.com/feed/",
  "https://distill.pub/rss.xml",
  "https://www.deepmind.com/blog/rss.xml",
  "https://blogs.microsoft.com/ai/feed/",
  "https://research.facebook.com/blog/rss/",
  "https://aws.amazon.com/blogs/machine-learning/feed/",
  "https://blog.tensorflow.org/feeds/posts/default",
  "https://pytorch.org/blog/feed.xml",
  "https://www.fast.ai/index.xml",
  "https://lexfridman.com/feed/",
  "https://www.analyticsvidhya.com/feed/",
  "https://neptune.ai/blog/feed",
  "https://huggingface.co/blog/feed.xml",
  "https://www.kdnuggets.com/feed",
  "https://www.aidungeon.io/blog/rss.xml"
];

// Keywords for relevance filtering
const RELEVANT_KEYWORDS = [
  "ai", "machine learning", "deep learning", "gpt", "artificial intelligence",
  "neural network", "nlp", "robot", "data science", "transformer", "computer vision",
  "reinforcement learning", "pytorch", "tensorflow", "keras", "ml", "llm",
  "large language model", "stable diffusion", "generative ai"
];

// Custom parser for different RSS feed structures
const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'media'],
      ['content:encoded', 'contentEncoded'],
      ['description', 'description'],
      ['dc:creator', 'creator'],
      ['enclosure', 'enclosure'],
    ],
  },
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'application/rss+xml,application/xml;q=0.9,*/*;q=0.8',
    'Origin': 'https://aicentral.vercel.app', // Add origin for CORS
    'Referer': 'https://aicentral.vercel.app/', // Add referer for CORS
  },
  timeout: 8000, // 8 second timeout per feed (reduced to avoid Vercel timeouts)
  maxRedirects: 5,
});

// Cache the fetched articles to avoid duplicates
let articleCache: Record<string, boolean> = {};
let lastFetchedArticles: Article[] = [];
let lastFetchTime = 0;

// 30 minutes cache time in milliseconds
const CACHE_TIME = 30 * 60 * 1000;

// Article type definition
interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  source: string;
  imageUrl: string;
}

// Helper function to extract image from HTML content
function extractImageFromHTML(content: string): string {
  try {
    if (!content) return '';

    // Parse the HTML content
    const root = parse(content);

    // Try to find the first image
    const img = root.querySelector('img');
    if (img && img.getAttribute('src')) {
      const src = img.getAttribute('src') || '';

      // Ensure image URL is absolute
      if (src.startsWith('http')) {
        return src;
      }
    }

    return '';
  } catch (error) {
    console.error('Error extracting image from HTML:', error);
    return '';
  }
}

// Helper function to clean up HTML content
function cleanDescription(html: string): string {
  try {
    if (!html) return '';

    // Remove all HTML tags and decode entities
    const root = parse(html);
    const text = root.textContent || '';

    // Limit to a reasonable length
    return text.slice(0, 300) + (text.length > 300 ? '...' : '');
  } catch {
    // If HTML parsing fails, remove tags using regex (less reliable but better than nothing)
    const text = html.replace(/<[^>]*>/g, '');
    return text.slice(0, 300) + (text.length > 300 ? '...' : '');
  }
}

// Shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Function to fetch and process RSS feeds
async function fetchRssFeeds(): Promise<Article[]> {
  const articles: Article[] = [];
  articleCache = {}; // Reset cache for new fetch
  const currentTime = Date.now();
  let successfulFeeds = 0;

  // Fetch and parse each RSS feed with a timeout
  await Promise.all(RSS_FEEDS.map(async (feedUrl) => {
    try {
      console.log(`Fetching feed: ${feedUrl}`);
      const feed = await parser.parseURL(feedUrl);
      successfulFeeds++;
      console.log(`Successfully parsed feed: ${feedUrl}, found ${feed.items.length} items`);
      const sourceName = feed.title || new URL(feedUrl).hostname.replace(/^www\./, '');

      // Process each item in the feed
      feed.items.forEach(item => {
        const title = item.title || '';
        const link = item.link || '';
        const pubDate = item.pubDate || item.isoDate || '';

        // Try multiple content fields that might contain the content
        const fullContent =
          item.contentEncoded ||
          item.content ||
          item.description ||
          '';

        // Try to extract image from various sources
        let imageUrl = '';

        // Check for media content
        if (item.media && item.media.$ && item.media.$.url) {
          imageUrl = item.media.$.url;
        }
        // Check for enclosures (attachments, often images)
        else if (item.enclosure && item.enclosure.url) {
          imageUrl = item.enclosure.url;
        }
        // Try to extract from content
        else {
          imageUrl = extractImageFromHTML(fullContent);
        }

        // Clean the description to use as summary
        const description = cleanDescription(fullContent);

        // Format the date consistently
        let formattedDate = 'Unknown date';
        try {
          const date = new Date(pubDate);
          formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        } catch {
          // ignore date parse error
        }

        // Check if article is relevant and not a duplicate
        const contentText = (title + ' ' + description).toLowerCase();
        const isRelevant = RELEVANT_KEYWORDS.some(keyword => contentText.includes(keyword));

        if (isRelevant && !articleCache[link]) {
          articleCache[link] = true;

          // Add article to the results
          articles.push({
            title,
            link,
            pubDate: formattedDate,
            description,
            source: sourceName,
            imageUrl
          });
        }
      });
    } catch (feedError) {
      console.error(`Error fetching feed ${feedUrl}:`, feedError instanceof Error ? feedError.message : feedError);
      // Continue with other feeds
    }
  }));

  // Sort articles by date (newest first) and shuffle within each day
  articles.sort((a, b) => {
    try {
      const dateA = new Date(a.pubDate);
      const dateB = new Date(b.pubDate);
      if (dateA.toDateString() === dateB.toDateString()) {
        // If same day, randomize order
        return Math.random() - 0.5;
      }
      return dateB.getTime() - dateA.getTime();
    } catch {
      return 0;
    }
  });

  console.log(`Successfully fetched ${successfulFeeds} out of ${RSS_FEEDS.length} feeds`);

  // Check if we have any articles
  if (articles.length === 0) {
    console.error('No articles were fetched from any feeds');
    throw new Error('Failed to fetch any articles from RSS feeds');
  }

  // Limit to the most recent 50 articles and shuffle them
  const recentArticles = shuffleArray(articles.slice(0, 50));
  console.log(`Returning ${recentArticles.length} articles`);

  // Update cache
  lastFetchedArticles = recentArticles;
  lastFetchTime = currentTime;

  return recentArticles;
}

export async function GET() {
  try {
    const currentTime = Date.now();

    // Always shuffle the articles when returning them
    if (currentTime - lastFetchTime < CACHE_TIME && lastFetchedArticles.length > 0) {
      console.log('Returning cached articles:', lastFetchedArticles.length);
      return NextResponse.json({ articles: shuffleArray(lastFetchedArticles) });
    }

    // Set a timeout for the entire operation (increased to 30 seconds for Vercel)
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('RSS feed fetching timed out')), 30000);
    });

    // Try to fetch real data with a timeout
    try {
      console.log('Fetching RSS feeds...');
      const fetchPromise = fetchRssFeeds();
      const result = await Promise.race([fetchPromise, timeoutPromise]) as Article[];
      console.log('Successfully fetched articles:', result.length);
      return NextResponse.json({ articles: result });
    } catch (fetchError) {
      console.error('Error or timeout fetching RSS feeds:', fetchError);
      // Fall back to mock data
      console.log('Falling back to mock data due to fetch error');
      return NextResponse.json({
        articles: shuffleArray(mockBlogPosts.articles),
        isMockData: true
      });
    }
  } catch (error) {
    console.error('Error in GET handler:', error);
    // Return mock data instead of an error
    console.log('Falling back to mock data due to general error');
    return NextResponse.json({
      articles: shuffleArray(mockBlogPosts.articles),
      isMockData: true
    });
  }
}