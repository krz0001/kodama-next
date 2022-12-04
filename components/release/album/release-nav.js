import LocaleSwitcher from '../../locale-switcher'
import Link from 'next/link'
import Image from 'next/legacy/image'

export default function ReleaseNav() {
	return (
		<header className="container mx-auto px-4">
			<div className="flex justify-between items-center">
				<Link href="/">
					<Image
						src="/assets/kodamahead.png"
						width={100}
						height={100}
						alt="KodamaSoft"
					/>
				</Link>
				<LocaleSwitcher />
			</div>
		</header>
	)
}
