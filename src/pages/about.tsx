import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { getMarkdownContent } from '@/utils/markdown'
import Layout from '@/components/Layout'

interface AboutProps {
  content: string
  frontmatter: {
    title: string
    description: string
  }
}

export default function About({ content, frontmatter }: AboutProps) {
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { content, frontmatter } = getMarkdownContent('about.md')

  return {
    props: {
      content,
      frontmatter,
    },
  }
}