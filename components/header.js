import { WEBSITE_NAME } from '../lib/constants'
import LocaleSwitcher from './locale-switcher'
import headerStyles from './header.module.css'
import Link from 'next/link'

export default function Header() {
	let links = [
		{ href: '/', label: 'Home' },
		{ href: '/discography', label: 'Discography' },
		{ href: '/projects', label: 'Projects' },
		// { href: '/blog', label: 'Blog' }
	];

	return (
		<header className="relative w-100 h-auto text-center flex flex-col select-none bg-[url('/assets/space_background.jpg')] bg-center">
			<h1 className={headerStyles.header_title}>
				<Link href="/"><a>{WEBSITE_NAME}</a></Link>
			</h1>
			<nav className="bg-purple-900/30 backdrop-blur text-white">
				<div id="navbar" className="flex flex-col sm:flex-row justify-center p-4 gap-4">

					{links.map((link, index) => (
						<Link href={link.href} key={index}>
							<a className="text-gray-300 hover:bg-purple-700/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium border-2 border-transparent focus-visible:border-purple-600 focus-visible:outline-none transition">{link.label}</a>
						</Link>
					))}

					<LocaleSwitcher className="w-fit m-0 text-gray-300 bg-gray-900/50 hover:bg-purple-700/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium border-2 border-transparent focus-visible:border-purple-600 focus-visible:outline-none transition"></LocaleSwitcher>
				</div>
			</nav>
		</header>
	)
}