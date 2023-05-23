import Image from 'next/image'
import { Post } from '@/api/posts'
import Link from 'next/link'
import styles from './PostCard.module.css'

type Props = { post: Post }

export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className={styles.article}>
        <Image
          className={styles.image}
          src={`/images/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className={styles.div}>
          <time className={styles.time}>{date.toString()}</time>
          <h3>{title}</h3>
          <p>{description}</p>
          <span>{category}</span>
        </div>
      </article>
    </Link>
  )
}
