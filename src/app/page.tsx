import FeaturedPosts from '@/components/FeaturedPosts'

export default function HomePage() {
  return (
    <section>
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
    </section>
  )
}
