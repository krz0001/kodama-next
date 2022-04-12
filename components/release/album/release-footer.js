import Link from 'next/link'

export default function ReleaseNav({title, slug}) {
	return (
		<footer className='container mx-auto mt-16 mb-8 flex text-[#999] text-sm justify-between align-middle'>
			<div>
				<Link href={"/" + slug}>{title}</Link>
				<br/>
				<span>©2021–2022 </span><Link href="/"> KodamaSoft</Link>
			</div>
			
			<div>
				<span>Design inspired by <Link href="https://sanographix.github.io/tokusetsu3/">SANOGRAPHIX.NET</Link></span>

			</div>
		</footer>
	)
}