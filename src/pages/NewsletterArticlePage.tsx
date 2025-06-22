import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, FileText, Loader2, RefreshCw } from 'lucide-react';
import { NewsletterService, NewsletterArticle } from '../services/newsletterService';

export function NewsletterArticlePage() {
  const { articleName } = useParams<{ articleName: string }>();
  const location = useLocation();
  const [article, setArticle] = useState<NewsletterArticle | null>(null);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticle = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Get article from location state or fetch from API
      let articleData: NewsletterArticle;
      if (location.state?.article) {
        articleData = location.state.article;
      } else {
        // If no state, fetch the article list and find the specific article
        const articles = await NewsletterService.getNewsletterArticles();
        articleData = articles.find(a => a.name === decodeURIComponent(articleName || '')) || articles[0];
      }
      
      if (!articleData) {
        throw new Error('Article not found');
      }
      
      setArticle(articleData);
      
      // Fetch the article content using the name as the slug
      const articleContent = await NewsletterService.getArticleContent(articleData.name);
      setContent(articleContent);
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load article';
      setError(errorMessage);
      console.error('Error fetching article:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (articleName) {
      fetchArticle();
    }
  }, [articleName, location.state]);

  if (loading) {
    return (
      <div className="min-h-screen text-white relative">
        <div className="container mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <Loader2 className="w-12 h-12 animate-spin text-blue-400 mx-auto mb-4" />
            <p className="text-gray-400">Loading article...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen text-white relative">
        <div className="container mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-gray-400 mb-6">{error || 'The requested article could not be found.'}</p>
            <div className="flex gap-4 justify-center">
              <Link to="/newsletter" className="btn-primary">
                Back to Newsletters
              </Link>
              <button onClick={fetchArticle} className="btn-secondary">
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white relative">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/newsletter" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Newsletters
          </Link>

          {/* Article Header */}
          <div className="glass-card p-8 mb-8">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <FileText className="w-6 h-6" />
              <span className="text-sm font-medium">Newsletter Article</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              {article.title || article.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </h1>
            
            {article.description && (
              <p className="text-gray-400 mb-4 text-lg">
                {article.description}
              </p>
            )}
            
            {article.date && (
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{NewsletterService.formatDate(article.date)}</span>
              </div>
            )}
          </div>

          {/* Article Content */}
          <div className="glass-card p-8">
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
              style={{
                '--tw-prose-body': '#d1d5db',
                '--tw-prose-headings': '#ffffff',
                '--tw-prose-links': '#60a5fa',
                '--tw-prose-bold': '#ffffff',
                '--tw-prose-counters': '#9ca3af',
                '--tw-prose-bullets': '#6b7280',
                '--tw-prose-hr': '#374151',
                '--tw-prose-quotes': '#f3f4f6',
                '--tw-prose-quote-borders': '#e5e7eb',
                '--tw-prose-captions': '#9ca3af',
                '--tw-prose-code': '#ffffff',
                '--tw-prose-pre-code': '#d1d5db',
                '--tw-prose-pre-bg': '#1f2937',
                '--tw-prose-th-borders': '#d1d5db',
                '--tw-prose-td-borders': '#374151',
              } as React.CSSProperties}
            />
          </div>

          {/* Footer Actions */}
          <div className="mt-8 flex justify-between items-center">
            <Link 
              to="/newsletter" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              All Newsletters
            </Link>
            
           
          </div>
        </div>
      </div>
    </div>
  );
} 