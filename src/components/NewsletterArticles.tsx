import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, FileText, RefreshCw } from 'lucide-react';
import { NewsletterService, NewsletterArticle } from '../services/newsletterService';

export function NewsletterArticles() {
  const [articles, setArticles] = useState<NewsletterArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedArticles = await NewsletterService.getNewsletterArticles();
      setArticles(fetchedArticles);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load newsletter articles';
      setError(errorMessage);
      console.error('Error fetching articles:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-400">Loading newsletter articles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <FileText className="w-16 h-16 text-red-400 mx-auto mb-4" />
        <p className="text-red-400 mb-4">{error}</p>
        <button 
          onClick={fetchArticles} 
          className="btn-primary"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="w-16 h-16 text-gray-500 mx-auto mb-4" />
        <p className="text-gray-400">No newsletter articles found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <Link
          key={index}
          to={`/newsletter/article/${encodeURIComponent(article.name)}`}
          state={{ article }}
          className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="flex items-start justify-between mb-4">
            <FileText className="w-8 h-8 text-blue-400" />
          </div>
          
          <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
            {article.title || article.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h3>
          
          {article.description && (
            <p className="text-sm text-gray-400 mb-3 line-clamp-2">
              {article.description}
            </p>
          )}
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <span className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
              Read Article →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
} 