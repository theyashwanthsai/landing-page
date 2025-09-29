import React from 'react';
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
    title: "The Future of Agentic AI: Beyond Language Models",
    excerpt: "Exploring how AI agents are evolving from simple language processors to sophisticated reasoning systems that can learn, adapt, and make decisions in complex environments.",
    author: "Sai Yashwanth",
    date: "2024-12-15",
    readTime: "8 min read",
    image: "/images/temp.jpg",
    tags: ["AI Agents", "Machine Learning", "Future Tech"],
    link: "#"
  },
  {
    id: "2",
    title: "Building Effective Multi-Agent Systems",
    excerpt: "A deep dive into the architecture and design patterns that make multi-agent systems effective, including coordination mechanisms and communication protocols.",
    author: "Sai Yashwanth",
    date: "2024-12-10",
    readTime: "12 min read",
    image: "/images/temp.jpg",
    tags: ["Multi-Agent", "Systems Design", "AI"],
    link: "#"
  },
  {
    id: "3",
    title: "Simulation-Based AI Evaluation: A New Paradigm",
    excerpt: "Why traditional benchmarks fall short and how simulation environments provide better insights into AI capabilities and limitations.",
    author: "Sai Yashwanth",
    date: "2024-12-05",
    readTime: "6 min read",
    image: "/images/temp.jpg",
    tags: ["Evaluation", "Simulation", "Research"],
    link: "#"
  }
];

interface BlogsSectionProps {
  limit?: number;
}

export function BlogsSection({ limit }: BlogsSectionProps) {
  const displayPosts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Latest from our Blog</h2>
        <p className="text-secondary max-w-2xl mx-auto">
          Insights, thoughts, and discoveries from our research journey. Exploring the frontiers of AI, one post at a time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {displayPosts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            className="block hover:scale-105 transition-transform duration-300"
          >
            <article className="glass-card p-6 h-full flex flex-col">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
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

              <h3 className="text-xl font-bold mb-3 text-primary line-clamp-2 min-h-[3rem]">
                {post.title}
              </h3>
              
              <p className="text-secondary text-sm mb-4 line-clamp-3 flex-1">
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
          </a>
        ))}
      </div>

      {limit && (
        <div className="text-center mt-12">
          <a
            href="/blogs"
            className="inline-flex items-center gap-2 btn-secondary px-6 py-3"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </section>
  );
}
