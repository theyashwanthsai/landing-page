import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Why Start a Research Lab?",
    excerpt: "Exploring the motivations, challenges, and vision behind starting an independent AI research collective.",
    author: "Sai Yashwanth",
    date: "2025-10-22",
    readTime: "3 min read",
    image: "/images/team.png",
    tags: ["Research Lab", "Vision", "Journey"],
    link: "/blog/why-start-research-lab"
  },
  {
    id: "2",
    title: "Our Research Philosophy",
    excerpt: "The principles and methodologies that guide our research at TuriLabs.",
    author: "Sai Yashwanth",
    date: "2025-10-03",
    readTime: "3 min read",
    image: "/images/philosophy.png",
    tags: ["Philosophy", "Methodology", "Research"],
    link: "/blog/research-philosophy"
  },
  {
    id: "3",
    title: "Our first research. Accepted at neurips workshop",
    excerpt: "Celebrating our debut research acceptance at NeurIPS workshop and what it means for TuriLabs.",
    author: "Sai Yashwanth",
    date: "2025-10-05",
    readTime: "2 min read",
    image: "/images/neurips.jpeg",
    tags: ["NeurIPS", "Publication", "Milestone"],
    link: "/blog/neurips-workshop-acceptance"
  }
];

interface BlogsSectionProps {
  limit?: number;
}

export function BlogsSection({ limit }: BlogsSectionProps) {
  const displayPosts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-5">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-primary">Latest from our Blog</h2>
        <p className="text-secondary max-w-2xl mx-auto">
          Insights, thoughts, and mental models from our research journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {displayPosts.map((post) => (
          <Link
            key={post.id}
            to={post.link}
            className="block hover:scale-105 transition-transform duration-300"
          >
            <article className="glass-card p-6 h-full flex flex-col">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      backgroundColor: 'var(--color-bg-tertiary)',
                      color: 'var(--color-text-muted)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-1 text-primary line-clamp-2 min-h-[3rem]">
                {post.title}
              </h3>
              
              <p className="text-secondary text-sm mb-2 flex-1">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-xs text-muted mt-auto pt-4 border-t border-light">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {limit && (
        <div className="text-center mt-12">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 btn-secondary px-6 py-3"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </section>
  );
}
