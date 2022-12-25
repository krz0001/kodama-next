import LocaleSwitcher from '../../locale-switcher'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function ReleaseNav({...props}) {
	return (
		<div { ...props}>
			<header className="container mx-auto px-4">
				<div className="flex justify-between items-center">
					<Link href="/">
						<Image
							src="/assets/kodamamusic.png"
							style={{ objectFit: 'cover', objectPosition: 'center' }}
							width={100}
							height={100}
							alt="KodamaSoft"
						/>
					</Link>
					<div className="flex items-center bg-neutral-700/50 rounded-lg p-2">
						<LocaleSwitcher />
					</div>
				</div>
			</header>
		</div>
	)
}
