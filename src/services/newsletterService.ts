import Airtable from 'airtable';

interface Subscriber {
  name: string;
  email: string;
}

export interface NewsletterArticle {
  name: string;
  path: string;
  content?: string;
  date?: string;
  title?: string;
  description?: string;
}

interface NewsletterIndex {
  newsletters: {
    filename: string;
    title: string;
    date: string;
    description: string;
  }[];
}

export class NewsletterService {
  private base: Airtable.Base;
  private table: Airtable.Table<any>;
  private static readonly NEWSLETTER_BASE_URL = '/newsletter';
  
  constructor() {
    // Configure Airtable
    Airtable.configure({
      apiKey: import.meta.env.VITE_AIRTABLE_API_KEY
    });

    this.base = Airtable.base(import.meta.env.VITE_AIRTABLE_BASE_ID);
    this.table = this.base('TuriLabs Newsletter list');
  }


  static async getNewsletterArticles(): Promise<NewsletterArticle[]> {
    try {
      // Import newsletters from the data file
      const { newsletters } = await import('../data/newsletter');
      
      const articles = newsletters.map(item => ({
        name: item.slug,
        path: `${item.slug}.md`,
        date: item.id,
        title: item.title,
        description: '' // No description in the data structure
      }));
      
      return articles;
    } catch (error) {
      console.error('Error fetching newsletter articles:', error);
      throw new Error('Failed to load newsletter articles. Please try again later.');
    }
  }
  
  static async getArticleContent(slug: string): Promise<string> {
    try {
      const response = await fetch(`${this.NEWSLETTER_BASE_URL}/${slug}.md`);
      if (!response.ok) {
        throw new Error(`Failed to fetch article content: ${response.status} ${response.statusText}`);
      }
      
      const content = await response.text();
      console.log(content);
      return content;
    } catch (error) {
      console.error('Error fetching article content:', error);
      throw new Error('Failed to load article content. Please try again later.');
    }
  }
  
  private static extractDateFromFilename(filename: string): string | undefined {
    // Extract date from filename like "2024-01-15-newsletter.html"
    const dateMatch = filename.match(/(\d{4}-\d{2}-\d{2})/);
    return dateMatch ? dateMatch[1] : undefined;
  }
  
  static formatDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString;
    }
  }
}
