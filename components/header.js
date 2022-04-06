import { WEBSITE_NAME } from '../lib/constants'
import LocaleSwitcher from './locale-switcher'
import headerStyles from './header.module.css'
import Link from 'next/link'

export default function Header() {

	return (
		<header className="relative w-100 h-auto text-center flex flex-col select-none bg-[url('/assets/space_background.jpg')] bg-center">
			<h1 className={headerStyles.header_title}>
				<Link href="/"><a>{WEBSITE_NAME}</a></Link>
			</h1>
			<nav className="bg-purple-900/30 backdrop-blur text-white">
				
				<div id="navbar" className="flex-col sm:flex-row justify-center p-4 gap-4">
					<LocaleSwitcher></LocaleSwitcher>
				</div>
			</nav>
		</header>
	)
}