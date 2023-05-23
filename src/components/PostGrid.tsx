'use client'

import { Post } from '@/api/posts'
import PostCard from './PostCard'
import styles from './PostGrid.module.css'

type Props = { posts: Post[] }

export default function PostGrid({ posts }: Props) {
  return (
    <ul className={styles.ul}>
      {posts.map((post) => (
        <li key={post.path} className={styles.list}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  )
}
