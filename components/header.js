import { WEBSITE_NAME } from '../lib/constants'

import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
	const { locale, locales, asPath } = useRouter()

	return (
		<header className="relative w-100 h-auto text-center flex flex-col select-none">
			<h1 className="text-7xl py-8 grow font-extrabold">
				<Link href="/"><a>{WEBSITE_NAME}</a></Link>
			</h1>
			<nav className="bg-gray-900 text-white backdrop-blur">
				<div id="navbar" className="flex-col sm:flex-row justify-center p-4 gap-4">
					<div className="flex flex-col md:flex-row flex-wrap justify-center gap-4">
						{locales.map((l, i) => {
							return (
								<span key={i} className={l === locale ? 'font-bold' : ''}>
									<Link href={asPath} locale={l}>{l}</Link>
								</span>
							)
						})}
					</div>
				</div>
			</nav>
		</header>
	)
}
