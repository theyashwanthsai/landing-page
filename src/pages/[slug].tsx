// src/pages/[slug].tsx
import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown'; // Make sure this is installed: npm install react-markdown
import { getMarkdownContent } from '@/utils/markdown'; // Your existing utility
import Layout from '@/components/Layout'; // Your Layout component

// Define the props type (similar to your AboutProps)
interface ContentPageProps {
  content: string;
  frontmatter: {
    title: string;
    description: string;
    // Add any other frontmatter fields you might use
  };
}

const contentDirectory = path.join(process.cwd(), 'content');

// Tells Next.js which paths (slugs) to pre-render based on your .md files
export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = fs.readdirSync(contentDirectory);
  const paths = filenames
    .filter(filename => filename.endsWith('.md')) // Only include markdown files
    .map(filename => ({
      params: {
        slug: filename.replace(/\.md$/, ''), // Use filename without .md as slug
      },
    }));

  // Filter out 'home' if you don't want a page at /home (index.tsx handles '/')
  const filteredPaths = paths.filter(p => p.params.slug !== 'home');

  return {
    paths: filteredPaths,
    fallback: false, // Routes not generated at build time will 404
  };
}

// Fetches data for a specific slug using your utility function
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  if (!slug) {
    return { notFound: true }; // Should not happen with fallback: false
  }

  const filename = `${slug}.md`;
  const fullPath = path.join(contentDirectory, filename);

  // Check if the markdown file actually exists before trying to fetch it
  if (!fs.existsSync(fullPath)) {
      return { notFound: true }; // Return 404 if markdown file doesn't exist
  }

  // Use your existing function to get content and frontmatter
  try {
    const { content, frontmatter } = getMarkdownContent(filename); // Pass the filename (e.g., 'newsletter.md')

    return {
      props: {
        content,
        frontmatter,
      },
    };
  } catch (error) {
    // Handle potential errors from getMarkdownContent (e.g., file read error, parsing error)
    console.error(`Error processing ${filename}:`, error);
    return { notFound: true }; // Or handle the error differently
  }
}

// The page component - very similar to your About page component
export default function ContentPage({ content, frontmatter }: ContentPageProps) {
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Layout>
  );
}