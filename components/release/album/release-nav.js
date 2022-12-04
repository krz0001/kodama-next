import LocaleSwitcher from '../../locale-switcher'
import Link from 'next/link'
import Image from "next/legacy/image";

export default function ReleaseNav() {
	return (
		<header className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <Link href="/">
                    <a>
                        <Image src="/assets/kodamahead.png" width={100} height={100} alt="KodamaSoft" />
                    </a>
                </Link>
                <LocaleSwitcher/>
            </div>
		</header>
	)
}