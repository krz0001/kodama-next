import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import DateFormatter from '../components/date-formatter'

export default function PostHeader({ title, date, author, twin }) {
  const { t } = useTranslation('common')

  return (
    <div className='max-w-prose	mx-auto border-b pb-4 mb-4 border-slate-500/20 sm:text-center' >
      <h1 className='text-4xl	font-extrabold mb-3'>{title}</h1>
      <p>{t('words.written_by')}<span className="text-violet-500"> {author}</span></p>
      <div className="text-slate-400">
        <DateFormatter dateString={date} />
      </div>
      { twin ? 
      ( <Link href={"/posts/" + twin.slug}>
          <a>Check {twin.locale.toUpperCase()} article ({twin.title})</a>
      </Link> ) : null }
    </div>
  )
}
