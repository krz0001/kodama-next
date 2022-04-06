import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LocaleSwitcher() {
	const { locale, locales, asPath } = useRouter()

    return (
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4">
            {locales.map((l, i) => {
                return (
                    <span key={i} className={l === locale ? 'font-bold' : ''}>
                        <Link href={asPath} locale={l}>{l}</Link>
                    </span>
                )
            })}
        </div>
    ) }