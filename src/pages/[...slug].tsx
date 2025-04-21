// src/pages/[...slug].tsx
import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import { getMarkdownContent } from '@/utils/markdown';
import Layout from '@/components/Layout';

interface ContentPageProps {
  content: string;
  frontmatter: {
    title: string;
    description: string;
  };
}

// --- Helper function to recursively find all markdown files ---
function getAllMarkdownFiles(dir: string, rootDir: string, fileList: string[] = []): string[] {
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        getAllMarkdownFiles(filePath, rootDir, fileList);
      } else if (file.endsWith('.md')) {
        // Get path relative to content directory and remove .md extension
        const relativePath = path.relative(rootDir, filePath).replace(/\.md$/, '');
        // Replace backslashes with forward slashes for consistency across platforms
        const normalizedPath = relativePath.split(path.sep).join('/');
        fileList.push(normalizedPath);
      }
    });
    
    return fileList;
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
    return fileList;
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const contentDirectory = path.join(process.cwd(), 'content');
  let paths: { params: { slug: string[] } }[] = [];
  
  try {
    // Get all markdown files recursively
    const allSlugs = getAllMarkdownFiles(contentDirectory, contentDirectory);
    
    // Filter out specific slugs that have their own pages
    const filteredSlugs = allSlugs.filter(slug => 
      slug !== 'home' && 
      slug !== 'newsletter' && 
      // Add any other specific pages here
      !slug.startsWith('.') // Skip hidden files
    );
    
    // Map slugs to the required params format
    paths = filteredSlugs.map(slug => ({
      params: {
        slug: slug.split('/'), // Split path into segments for the catch-all route
      },
    }));
    
    // Log paths for debugging during build
    console.log(`Generated ${paths.length} static paths for [...slug]`);
  } catch (error) {
    console.error('Error generating static paths:', error);
    // Return empty paths array if there's an error
    // This will result in no pages being pre-rendered, but won't fail the build
  }
  
  return {
    paths,
    fallback: 'blocking', // Change from 'false' to 'blocking'
  };
}

// In getStaticProps, modify the path resolution:
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slugArray = params?.slug as string[] | undefined;
  
  if (!slugArray || slugArray.length === 0) {
    return { notFound: true };
  }
  
  // Join the array segments to form the relative path
  const relativePath = slugArray.join('/');
  
  // Try multiple potential locations
  const potentialPaths = [
    path.join(process.cwd(), 'content', `${relativePath}.md`),
    // For directory index files (e.g., /newsletter -> /content/newsletter/index.md)
    path.join(process.cwd(), 'content', relativePath, 'index.md'),
    // For nested paths
    path.join(process.cwd(), 'content', `${relativePath}/index.md`)
  ];
  
  let fullPath = '';
  
  // Find the first path that exists
  for (const testPath of potentialPaths) {
    if (fs.existsSync(testPath)) {
      fullPath = testPath;
      break;
    }
  }
  
  if (!fullPath) {
    console.warn(`No markdown file found for: ${relativePath}`);
    return { notFound: true };
  }
  
  try {
    // Get the file content relative to content directory
    const contentRelativePath = path.relative(
      path.join(process.cwd(), 'content'),
      fullPath
    );
    
    const { content, frontmatter } = getMarkdownContent(contentRelativePath);
    
    return {
      props: {
        content,
        frontmatter,
        // Add debug info in development
        ...(process.env.NODE_ENV === 'development' ? {
          debug: {
            path: relativePath,
            fullPath,
            contentRelativePath
          }
        } : {})
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error(`Error processing ${fullPath}:`, error);
    return { notFound: true };
  }
}

export default function ContentPage({ content, frontmatter }: ContentPageProps) {
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Layout>
  );
}