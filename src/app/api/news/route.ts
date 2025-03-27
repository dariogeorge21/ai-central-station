import { NextResponse } from 'next/server';

async function fetchNewsFromAPI(page: number, category: string = 'all') {
  const apiKey = process.env.NEWS_API_KEY;
  if (!apiKey) {
    throw new Error('NEWS_API_KEY is not configured in environment variables');
  }

  // Calculate dates for the last 7 days
  const today = new Date();
  const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

  // Format dates for the API
  const fromDate = sevenDaysAgo.toISOString().split('T')[0];
  const toDate = today.toISOString().split('T')[0];

  // Build the API URL
  const baseUrl = 'https://newsapi.org/v2/everything';
  const pageSize = page === 1 ? 18 : 9; // 18 items for first page, 9 for subsequent pages
  
  // Construct search query based on category
  let query = 'artificial intelligence OR AI technology OR machine learning';
  if (category !== 'all') {
    query += ` AND ${category} AI`;
  }

  const url = new URL(baseUrl);
  url.searchParams.append('q', query);
  url.searchParams.append('from', fromDate);
  url.searchParams.append('to', toDate);
  url.searchParams.append('sortBy', 'publishedAt');
  url.searchParams.append('language', 'en');
  url.searchParams.append('pageSize', pageSize.toString());
  url.searchParams.append('page', page.toString());
  url.searchParams.append('apiKey', apiKey);

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`NewsAPI request failed: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const category = searchParams.get('category') || 'all';

    const newsData = await fetchNewsFromAPI(page, category);

    return NextResponse.json({
      news: newsData.articles,
      hasMore: (page === 1 ? 18 : (page - 1) * 9 + 18) < newsData.totalResults,
    });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
} 