import { useState, useEffect } from 'react';
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
        const response = await fetch('/blogs/one-pager.md');
        if (!response.ok) {
          throw new Error('Failed to fetch pitch content');
        }
        setContent(await response.text());
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
      <div className="container-page py-20">
        <p className="text-faint">Loading…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="text-3xl font-bold">Content not found</h1>
        <p className="mt-4 text-secondary">{error}</p>
        <Link to="/" className="btn-primary mt-8 inline-flex">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page max-w-3xl py-16 sm:py-20">
      <Link to="/" className="link-underline inline-flex items-center gap-1.5 text-sm">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to home
      </Link>

      <article className="prose mt-8">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>

      <div className="mt-16 border-t pt-12 text-center" style={{ borderColor: 'var(--border)' }}>
        <p className="text-secondary">Interested in supporting Turi Labs?</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-primary">
            Get in touch
          </Link>
          <Link to="/about" className="btn-ghost">
            About the lab
          </Link>
        </div>
      </div>
    </div>
  );
}
