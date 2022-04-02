import { WEBSITE_NAME } from '../lib/constants'

import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
	const { locale, locales, asPath } = useRouter()

	return (
		<header className="">
      <div className='text-center '>
        <h1 className="title is-1 mx-auto w">
          <Link href="/"><a>{WEBSITE_NAME}</a></Link>
        </h1>
      </div>
			<nav className="">
				<div id="navbar" className="">
					<div className="">
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
