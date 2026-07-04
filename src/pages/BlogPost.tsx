import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';

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
    readTime: '3 min read',
  },
  'research-philosophy': {
    title: 'Our Research Philosophy',
    author: 'Sai Yashwanth',
    date: '2025-10-03',
    readTime: '4 min read',
  },
  'neurips-workshop-acceptance': {
    title: 'Our First Paper, Accepted at a NeurIPS Workshop',
    author: 'Sai Yashwanth',
    date: '2025-10-05',
    readTime: '4 min read',
  },
};

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [blogPost, setBlogPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogPost = async () => {
      const metadata = slug ? blogMetadata[slug] : undefined;
      if (!slug || !metadata) {
        setError('Blog post not found');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/blogs/${slug}.md`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog post');
        }
        const content = await response.text();
        setBlogPost({ ...metadata, content });
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
      <div className="container-page py-20">
        <p className="text-faint">Loading…</p>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="text-3xl font-bold">Blog post not found</h1>
        <p className="mt-4 text-secondary">
          {error || 'The requested blog post could not be found.'}
        </p>
        <Link to="/blogs" className="btn-primary mt-8 inline-flex">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page max-w-3xl py-16 sm:py-20">
      <Link to="/blogs" className="link-underline inline-flex items-center gap-1.5 text-sm">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to blog
      </Link>

      <header className="mt-8 mb-12">
        <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">{blogPost.title}</h1>
        <p className="mt-4 text-sm text-faint">
          {blogPost.author}
          {' · '}
          {new Date(blogPost.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          {' · '}
          {blogPost.readTime}
        </p>
      </header>

      <article className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{blogPost.content}</ReactMarkdown>
      </article>

      <div className="mt-16 border-t pt-12 text-center" style={{ borderColor: 'var(--border)' }}>
        <p className="text-secondary">Enjoyed this post? Read more or get in touch.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link to="/blogs" className="btn-ghost">
            More posts
          </Link>
          <Link to="/contact" className="btn-primary">
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
