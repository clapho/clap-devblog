'use client'

import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 className={styles.title}>Clap devlog</h1>
      </Link>
      <nav className={styles.nav}>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  )
}
