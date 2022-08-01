import tracklistStyles from './release-tracklist.module.scss'

export default function ReleaseTracklist({tracklist}) {
	return (
		<section className='container mx-auto my-16 max-w-screen-lg'>
            <h2 className="text-2xl text-center uppercase mb-8 font-black"> tracklist </h2>
            {Object.entries(tracklist).map(trackJSON => {
                console.log(trackJSON);

                return (
                    <div key={trackJSON[0]} className={tracklistStyles.track_container}>
                        <div className={tracklistStyles.track_number}>
                            {trackJSON[0].padStart(2, '0')}
                        </div>
                        <div className={tracklistStyles.track_content} data-accordion="open">
                            <button type="button" className='text-xl font-bold text-left' data-accordion-target={"accordion-arrow-icon-body-"+ trackJSON[0]} aria-expanded="false">
                                {trackJSON[1].title}
                            </button>

                            <div id={"accordion-arrow-icon-body-"+ trackJSON[0]} className="hidden">
                                {trackJSON[1].description.map((descParagraph, index)  => {
                                    return (
                                        <p key={index} className="text-[#999] mb-4 text-sm	">
                                            {descParagraph}
                                        </p>
                                    )
                                })}  
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
	)
}