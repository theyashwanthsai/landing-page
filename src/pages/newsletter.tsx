// src/pages/newsletter.tsx
import { GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import { getMarkdownContent } from '@/utils/markdown';
import Layout from '@/components/Layout';

interface NewsletterPageProps {
  content: string;
  frontmatter: {
    title: string;
    description: string;
  };
}

export default function NewsletterPage({ content, frontmatter }: NewsletterPageProps) {
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <div className="newsletter-container">
        {/* Newsletter iframe */}
        <iframe 
          width="540" 
          height="305" 
          src="https://sibforms.com/serve/MUIFANOMCMqb7vMOib-LhEjZUMmy22nv3yjtyNfKCyhSbGEZ1IQVNJXUzjZOXKtfKlJsEF8EjoJpeg0hkjAQv1VZzRT5GvVseJwBP6NP2y7OxJm-2a3op3pLgYGMsHAFkq5qPZO0gBhMgAQ_OHf7vaukRxJiPFKViwFufdkcaQZOoceYjnfeoa0TE1Wm-2pZDFey7qP5OT1XnSbd" 
          frameBorder="0" 
          scrolling="auto" 
          allowFullScreen 
          style={{ 
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '100%'
          }}
        />
        
        {/* Newsletter content from newsletter.md */}
        <div className="newsletter-content" style={{ marginTop: '2rem' }}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Fetch the newsletter.md content and frontmatter
  try {
    const { content, frontmatter } = getMarkdownContent('newsletter_page.md');

    return {
      props: {
        content,
        frontmatter,
      },
    };
  } catch (error) {
    console.error(`Error processing newsletter.md:`, error);
    // Fallback if newsletter.md doesn't exist or has issues
    return { 
      props: {
        content: 'Subscribe to our newsletter to receive the latest updates and news directly in your inbox.',
        frontmatter: {
          title: 'Newsletter',
          description: 'Track AI breakthroughs and keep up with the acceleration, Daily Bullet Points, 2 min read',
        },
      },
    };
  }
}