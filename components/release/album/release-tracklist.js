import ReleaseTrack from './release-track'

export default function ReleaseTracklist({ tracklist }) {
	// sort tracklist by track number (track[0]) and turn it into an array
	tracklist = Object.entries(tracklist).sort((a, b) => {
		return a[0] - b[0]
	})

	return (
		<section className="mx-auto my-16">
			<h2 className="text-2xl text-center uppercase mb-8 font-black">
				tracklist
			</h2>

			<div className='w-auto'>
				{tracklist.map((track, index) => {
					return <ReleaseTrack track={track} key={index} />
				})}
			</div>
		</section>
	)
}
