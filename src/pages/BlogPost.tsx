import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

interface BlogPostData {
  title: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
}

const blogMetadata: { [key: string]: Omit<BlogPostData, 'content'> } = {
  'why-start-research-lab': {
    title: 'Why Start a Research Lab?',
    author: 'Sai Yashwanth',
    date: '2025-10-22',
    readTime: '3 min read'
  },
  'research-philosophy': {
    title: 'Our Research Philosophy',
    author: 'Sai Yashwanth',
    date: '2025-10-03',
    readTime: '4 min read'
  },
  'neurips-workshop-acceptance': {
    title: 'Our first research. Accepted at neurips workshop',
    author: 'Sai Yashwanth',
    date: '2025-10-05',
    readTime: '4 min read'
  }
};

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [blogPost, setBlogPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogPost = async () => {
      if (!slug) {
        setError('Blog post not found');
        setLoading(false);
        return;
      }

      const metadata = blogMetadata[slug];
      if (!metadata) {
        setError('Blog post not found');
        setLoading(false);
        return;
      }

      try {
        // Fetch the markdown file from public directory
        const response = await fetch(`/blogs/${slug}.md`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog post');
        }
        
        const content = await response.text();
        
        setBlogPost({
          ...metadata,
          content
        });
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    loadBlogPost();
  }, [slug]);

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

  if (error || !blogPost) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Blog Post Not Found</h1>
          <p className="text-secondary mb-8">{error || 'The requested blog post could not be found.'}</p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 btn-primary px-6 py-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Back to blogs link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-primary hover:text-accent mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>

        {/* Blog post header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
            {blogPost.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{blogPost.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(blogPost.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{blogPost.readTime}</span>
            </div>
          </div>
        </header>

        {/* Blog post content */}
        <article className="max-w-none markdown-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 style={{ color: 'var(--color-text-primary)', fontSize: '1.875rem', fontWeight: 'bold', marginTop: '3rem', marginBottom: '1.5rem' }}>
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 style={{ color: 'var(--color-text-primary)', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2.5rem', marginBottom: '1rem' }}>
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 style={{ color: 'var(--color-text-primary)', fontSize: '1.25rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '0.75rem' }}>
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-secondary leading-relaxed mb-6">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="text-secondary mb-6 pl-6 space-y-2 list-disc">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="text-secondary mb-6 pl-6 space-y-2 list-decimal">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="leading-relaxed text-secondary">
                  {children}
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-accent pl-6 my-6 italic text-secondary">
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
                  className="text-accent hover:text-primary transition-colors underline"
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
              // Add table support
              table: ({ children }) => (
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-light">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-gray-50">
                  {children}
                </thead>
              ),
              tbody: ({ children }) => (
                <tbody>
                  {children}
                </tbody>
              ),
              tr: ({ children }) => (
                <tr className="border-b border-light">
                  {children}
                </tr>
              ),
              th: ({ children }) => (
                <th className="border border-light px-4 py-2 text-left font-bold text-primary">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-light px-4 py-2 text-secondary">
                  {children}
                </td>
              ),
              // Handle task lists
              input: ({ type, checked, disabled }) => {
                if (type === 'checkbox') {
                  return (
                    <input
                      type="checkbox"
                      checked={checked}
                      disabled={disabled}
                      className="mr-2"
                      readOnly
                    />
                  );
                }
                return <input type={type} />;
              }
            }}
          >
            {blogPost.content}
          </ReactMarkdown>
        </article>

        {/* Call to action */}
        <div className="mt-16 pt-8 border-t border-light">
          <div className="text-center">
            <p className="text-secondary mb-6">
              Enjoyed this post? Check out our other blog posts or get in touch with our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/blogs"
                className="btn-secondary px-6 py-3"
              >
                More Blog Posts
              </Link>
              <Link
                to="/contact"
                className="btn-primary px-6 py-3"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
