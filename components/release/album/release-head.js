import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import ReleaseNav from './release-nav'
import styles from './release-head.module.css'

export default function ReleaseHead({
	slug,
	logo,
	background,
	sc_track_id,
	color,
}) {
	const { t } = useTranslation('release')

	return (
		<>
			<div className={background ? 'mx-auto' : 'container mx-auto'}>
				{background ? (
					<div className='relative overflow-hidden'>
						<Image
							src={background}
							alt="Background"
							fill={true}
							style={{ objectFit: 'cover', filter: 'blur(25px) brightness(0.5)' }}
							quality={50}
						/>
						<div className='md:container relative mx-auto z-10'>
							<ReleaseNav className="bg-[#232426] md:bg-transparent"/>
							<div className="relative w-[800px] max-w-full mx-auto">
								<Image
									src={logo}
									height="340"
									width="1000"
									alt="Logo"
									className='object-cover object-center p-6 md:relative -top-14'
									quality={100}
									style={{ filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.75))' }}
								/>
							</div>
						</div>
					</div>
				) : (
					<>
						<ReleaseNav />
						<div className="relative w-[800px] max-w-full mx-auto">
							<Image
								src={logo}
								height="340"
								width="1000"
								alt="Logo"
								style="object-fit: cover; object-position: center;"
								quality={100}
							/>
						</div>
					</>
				)}
			</div>

			<div className="container mx-auto">
				<div className="my-16">
					<p className="text-center text-sm my-4">
						{t(slug + '.desc')}
					</p>
				</div>

				<div>
					<iframe
						width="100%"
						height="166"
						scrolling="no"
						frameBorder="no"
						allow="autoplay"
						src={
							'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' +
							sc_track_id +
							'&color=%23' +
							color +
							'&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
						}
					></iframe>
				</div>
			</div>
		</>
	)
}
