import Link from 'next/link'
import DateFormatter from '../components/date-formatter'

export default function PostHeader({ title, date, author, twin }) {
  return (
    <div className='max-w-prose	mx-auto border-b pt-10 pb-4 mb-4 border-slate-500/20 sm:text-center' >
      <h1 className='text-4xl	font-extrabold mb-3'>{title}</h1>
      <p>Written by <span className="text-violet-500"> {author}</span></p>
      <div className="text-slate-400">
        <DateFormatter dateString={date} />
      </div>
      { twin ? ( <Link href={"/posts/" + twin}>Twin</Link> ) : null }
    </div>
  )
}
