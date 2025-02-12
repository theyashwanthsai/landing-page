import Navigation from './Navigation'
import Footer from './Footer'
import styles from './Layout.module.css'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <main className={styles.main}>
          {(title || description) && (
            <header className={styles.header}>
              {title && <h1 className={styles.title}>{title}</h1>}
              {description && <p className={styles.description}>{description}</p>}
            </header>
          )}
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}