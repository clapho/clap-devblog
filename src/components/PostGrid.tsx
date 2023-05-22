'use client'

import { Post } from '@/api/posts'
import PostCard from './PostCard'

type Props = { posts: Post[] }

export default function PostGrid({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  )
}
