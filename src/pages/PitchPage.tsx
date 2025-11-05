import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';

export function PitchPage() {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPitchContent = async () => {
      try {
        // Fetch the one-pager markdown file from public directory
        const response = await fetch('/blogs/one-pager.md');
        if (!response.ok) {
          throw new Error('Failed to fetch pitch content');
        }
        
        const markdownContent = await response.text();
        setContent(markdownContent);
      } catch (err) {
        console.error('Error loading pitch content:', err);
        setError('Failed to load pitch content');
      } finally {
        setLoading(false);
      }
    };

    loadPitchContent();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Content Not Found</h1>
          <p className="text-secondary mb-8">{error}</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 btn-primary px-6 py-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Back to home link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-accent mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Pitch content */}
        <article className="max-w-none markdown-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 style={{ color: 'var(--color-text-primary)', fontSize: '2.25rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1.5rem' }}>
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 style={{ color: 'var(--color-text-primary)', fontSize: '1.875rem', fontWeight: 'bold', marginTop: '2.5rem', marginBottom: '1rem' }}>
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 style={{ color: 'var(--color-text-primary)', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '0.75rem' }}>
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-secondary leading-relaxed mb-6 text-lg">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="text-secondary mb-6 pl-6 space-y-2 list-disc text-lg">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="text-secondary mb-6 pl-6 space-y-2 list-decimal text-lg">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="leading-relaxed text-secondary">
                  {children}
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-accent pl-6 my-6 italic text-secondary bg-gray-50 py-4 rounded-r-lg">
                  {children}
                </blockquote>
              ),
              code: ({ children, className }) => {
                const isInline = !className;
                if (isInline) {
                  return (
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-primary">
                      {children}
                    </code>
                  );
                }
                return (
                  <code className={className}>
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => (
                <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
                  {children}
                </pre>
              ),
              a: ({ children, href }) => (
                <a
                  href={href}
                  className="text-accent hover:text-primary transition-colors underline font-medium"
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {children}
                </a>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-primary">
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em className="italic text-secondary">
                  {children}
                </em>
              ),
              hr: () => (
                <hr className="border-t border-light my-12" />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

        {/* Call to action */}
        <div className="mt-16 pt-8 border-t border-light">
          <div className="text-center">
            <p className="text-secondary mb-6 text-lg">
              Interested in supporting Turilabs? Get in touch with our team to learn more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary px-8 py-4 text-lg"
              >
                Get in Touch
              </Link>
              <Link
                to="/about"
                className="btn-secondary px-8 py-4 text-lg"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
