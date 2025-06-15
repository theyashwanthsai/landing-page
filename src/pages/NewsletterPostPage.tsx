import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { newsletters } from '../data/newsletter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeRaw from 'rehype-raw';

const NewsletterPostPage: React.FC = () => {
  const { slug } = useParams();
  const post = newsletters.find(p => p.slug === slug);
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (post) {
      fetch(`/content/newsletters/${post.slug}.md`)
        .then(res => res.text())
        .then(text => {
          // Better frontmatter handling
          const parts = text.split('---');
          const content = parts.length >= 3 ? parts[2] : text;
          setContent(content.trim());
        })
        .catch(err => console.error('Error loading markdown:', err));
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/newsletter" replace />;
  }

  return (
    <main className="min-h-[calc(100vh-64px)] py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* <h1>hello</h1> */}
        <article className="prose prose-invert prose-lg mx-auto">
          <h1 className="text-4xl md:text-5xl font-display bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-500 mb-4">
            {post.title}
          </h1>
          <br />
          <div className="markdown-content">
            <div className="backdrop-filter backdrop-blur-md bg-blue-500/10 border border-purple-500/50 rounded-lg p-6 shadow-lg">
              <ReactMarkdown
                className="text-gray-300"
                remarkPlugins={[remarkGfm, remarkBreaks]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-2" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal pl-6 space-y-2" {...props} />,
                  li: ({node, ...props}) => <li className="mb-1" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4" {...props} />
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default NewsletterPostPage;