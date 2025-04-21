// src/pages/[[...slug]].tsx
import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import { getMarkdownContent } from '@/utils/markdown'; // Your existing utility
import Layout from '@/components/Layout'; // Your Layout component

// Define the props type (same as before)
interface ContentPageProps {
  content: string;
  frontmatter: {
    title: string;
    description: string;
    // Add any other frontmatter fields you might use
  };
}

const contentDirectory = path.join(process.cwd(), 'content');

// --- Helper function to recursively find all markdown files ---
function getAllMarkdownFiles(dirPath: string, relativePathPrefix = ''): string[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  let files: string[] = [];

  for (const entry of entries) {
    const currentPath = path.join(dirPath, entry.name);
    const relativePath = relativePathPrefix ? `${relativePathPrefix}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      // Recursively search in subdirectories
      files = files.concat(getAllMarkdownFiles(currentPath, relativePath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      // Add markdown file (relative path without .md extension)
      files.push(relativePath.replace(/\.md$/, ''));
    }
  }
  return files;
}
// --- End Helper Function ---


// Tells Next.js which paths (slugs) to pre-render, including nested ones
export const getStaticPaths: GetStaticPaths = async () => {
  const allSlugs = getAllMarkdownFiles(contentDirectory);

  // Filter out 'home' if index.tsx handles it
  const filteredSlugs = allSlugs.filter(slug => slug !== 'home');

  // Map slugs to the required params format (slug becomes an array of segments)
  const paths = filteredSlugs.map(slug => ({
    params: {
      slug: slug.split('/'), // e.g., 'newsletter/post1' becomes ['newsletter', 'post1']
    },
  }));

  return {
    paths: paths,
    fallback: false, // Routes not generated at build time will 404
  };
}

// Fetches data for a specific slug (which is now an array)
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // slug is now an array of path segments, or undefined for the root path
  // Note: The root path '/' should ideally be handled by pages/index.tsx
  const slugArray = params?.slug as string[] | undefined;

  if (!slugArray || slugArray.length === 0) {
    // This case should ideally not be hit if you have pages/index.tsx
    // If you want [[...slug]].tsx to handle '/', you'd load 'home.md' here.
    return { notFound: true };
  }

  // Join the array segments to form the relative path
  const relativePath = slugArray.join('/'); // e.g., ['newsletter', 'post1'] becomes 'newsletter/post1'
  const filename = `${relativePath}.md`; // e.g., 'newsletter/post1.md'
  const fullPath = path.join(contentDirectory, filename);

  // Check if the markdown file actually exists
  if (!fs.existsSync(fullPath)) {
      console.warn(`Markdown file not found at: ${fullPath}`);
      return { notFound: true };
  }

  // Use your existing function to get content and frontmatter
  try {
    // Pass the relative filename (e.g., 'newsletter/post1.md')
    // Ensure getMarkdownContent can handle paths like 'folder/file.md'
    const { content, frontmatter } = getMarkdownContent(filename);

    return {
      props: {
        content,
        frontmatter,
      },
    };
  } catch (error) {
    console.error(`Error processing ${filename}:`, error);
    return { notFound: true };
  }
}

// The page component - NO CHANGES NEEDED HERE
export default function ContentPage({ content, frontmatter }: ContentPageProps) {
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Layout>
  );
}