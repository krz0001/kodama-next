import Link from 'next/link'

import tracklistStyles from './release-credits.module.scss'

export default function ReleaseTracklist({ credits }) {
	return (
		<section className='container mx-auto my-16'>
            <h2 className="text-2xl text-center uppercase mb-8 font-black"> credit </h2>
            <ul className='flex justify-between flex-wrap'>
                {Object.entries(credits).map(creditJSON => {
                    return (
                        <li key={creditJSON[0]} className="text-center w-1/3">
                            <span className='block text-sm text-[#999]'>
                                {creditJSON[1].role}
                            </span>

                            <span className='block text-xl font-bold my-2'>
                                {creditJSON[1].name}
                            </span>

                            <span className={tracklistStyles.button}>
                                <Link href={creditJSON[1].website} passHref>
                                    <a target="_blank">
                                        website
                                    </a>
                                </Link>                            
                            </span>
                        
                        </li>
                    )
                })}
            </ul>

        </section>
	)
}