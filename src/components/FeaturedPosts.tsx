import { getFeaturedPosts } from '@/api/posts'
import PostGrid from './PostGrid'
import styles from './FeaturedPosts.module.css'

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts()
  return (
    <>
      <h2 className={styles.title}>Featured Posts</h2>
      <PostGrid posts={posts} />
    </>
  )
}
