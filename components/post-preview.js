import DateFormatter from '../components/date-formatter'
import Link from 'next/link'

export default function PostPreview({
  title,
  date,
  author,
  slug,
}) {
  return (
    <Link href={`/posts/${slug}`} passHref>
      <a>
        <h3 className="title is-3">
            {title}
        </h3>
        <div className="text-lg mb-4">
          by {author} · <DateFormatter dateString={date} />
        </div>
      </a>
    </Link>
  )
}
