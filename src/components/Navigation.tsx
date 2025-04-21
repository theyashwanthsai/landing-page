import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navigation.module.css'

export default function Navigation() {
  const router = useRouter()

  const isActive = (path: string) => {
    return router.pathname === path ? styles.active : ''
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Turi Labs
        </Link>
        <div className={styles.links}>
          <Link href="/" className={`${styles.link} ${isActive('/')}`}>
            Home
          </Link>
          <Link href="/about" className={`${styles.link} ${isActive('/about')}`}>
            About
          </Link>
          <Link href="/experiments" className={`${styles.link} ${isActive('/experiments')}`}>
            Experiments
          </Link>
          <Link href="/newsletter" className={`${styles.link} ${isActive('/newsletter')}`}>
            Newsletter
          </Link>
        </div>
      </div>
    </nav>
  )
}