import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { getMarkdownContent } from '@/utils/markdown'
import Layout from '@/components/Layout'

interface HomeProps {
  content: string
  frontmatter: {
    title: string
    description: string
  }
}

export default function Home({ content, frontmatter }: HomeProps) {
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { content, frontmatter } = getMarkdownContent('home.md')

  return {
    props: {
      content,
      frontmatter,
    },
  }
}