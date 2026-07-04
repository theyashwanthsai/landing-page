import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogPostMeta {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  link: string;
}

const blogPosts: BlogPostMeta[] = [
  {
    id: '1',
    title: 'Why Start a Research Lab?',
    excerpt:
      'Exploring the motivations, challenges, and vision behind starting an independent AI research collective.',
    author: 'Sai Yashwanth',
    date: '2025-10-22',
    readTime: '3 min read',
    link: '/blog/why-start-research-lab',
  },
  {
    id: '2',
    title: 'Our Research Philosophy',
    excerpt: 'The principles and methodologies that guide our research at Turi Labs.',
    author: 'Sai Yashwanth',
    date: '2025-10-03',
    readTime: '3 min read',
    link: '/blog/research-philosophy',
  },
  {
    id: '3',
    title: 'Our First Paper, Accepted at a NeurIPS Workshop',
    excerpt:
      'Celebrating our debut research acceptance at a NeurIPS workshop and what it means for Turi Labs.',
    author: 'Sai Yashwanth',
    date: '2025-10-05',
    readTime: '2 min read',
    link: '/blog/neurips-workshop-acceptance',
  },
];

interface BlogsSectionProps {
  limit?: number;
}

export function BlogsSection({ limit }: BlogsSectionProps) {
  const displayPosts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
      {displayPosts.map((post) => (
        <Link key={post.id} to={post.link} className="group block py-8 first:pt-0 last:pb-0">
          <p className="text-sm text-faint">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            {' · '}
            {post.readTime}
          </p>
          <h3 className="mt-2 inline-flex items-start gap-1.5 text-xl font-bold leading-snug transition-colors group-hover:text-[var(--accent)]">
            {post.title}
            <ArrowRight
              className="mt-1.5 h-4 w-4 flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden="true"
            />
          </h3>
          <p className="mt-2 max-w-2xl text-[0.9375rem] text-secondary">{post.excerpt}</p>
        </Link>
      ))}
    </div>
  );
}
