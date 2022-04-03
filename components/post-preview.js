import DateFormatter from '../components/date-formatter'
import Link from 'next/link'

export default function PostPreview({
  title,
  date,
  author,
  slug,
}) {
  return (
    <Link href={`/posts/${slug}`}>
      <a className='block bg-violet-900/20 hover:bg-violet-900/70 transition p-4 my-4 rounded-md no-underline'>
          <h3 className="mt-0">{title}</h3>
          <div className="text-lg mb-4">
            {author} · <DateFormatter dateString={date} />
          </div>
      </a>
    </Link>
  )
}
