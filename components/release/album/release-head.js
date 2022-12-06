import Image from "next/image";
import Trans from 'next-translate/Trans'

export default function ReleaseNav({ logo, description, sc_track_id, color}) {
    return (
		<div className='container mx-auto'>
            <div className='relative w-[800px] max-w-full mx-auto'>
                <Image src={logo} height="340" width="1000" alt='Logo' style="object-fit: cover; object-position: center;" />
            </div>

            <div className='my-16'>
                <p className='text-center text-sm my-4'>
                    <Trans i18nKey={description} />
                </p>
		    </div>

            <div>
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + sc_track_id + '&color=%23' + color + '&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'}></iframe>
            </div>
		</div>
	)
}