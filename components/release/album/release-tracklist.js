import ReleaseTrack from './release-track';

export default function ReleaseTracklist({tracklist}) {
	return (
		<section className='mx-auto my-16'>
            <h2 className="text-2xl text-center uppercase mb-8 font-black"> tracklist </h2>

            {Object.entries(tracklist).map(trackJSON => {
                console.log(trackJSON);

                return (
                    <ReleaseTrack track={trackJSON} key={trackJSON[0]} />
                )
            })}
        </section>
	)
}
