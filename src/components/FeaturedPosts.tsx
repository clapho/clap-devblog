import { getFeaturedPosts } from '@/api/posts'
import PostGrid from './PostGrid'

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts()
  return (
    <>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </>
  )
}
