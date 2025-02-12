import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        © {currentYear} Turi Labs. All rights reserved.
      </div>
    </footer>
  )
}