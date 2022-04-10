import Link from 'next/link'
import Trans from 'next-translate/Trans'
import callToActionStyles from './release-call-to-action.module.scss'

export default function ReeleaseCallToAction({store}) {
	return (
		<section className='bg-[#333335] mt-16 py-8'>
            <h2 className='text-2xl text-center uppercase mb-8'>
                <Trans i18nKey="release:available_now" />
            </h2>

            <div className='text-center'>
                {Object.entries(store).map(storeItem => {
                    return (
                        <Link key={storeItem[0]} href={storeItem[1].link}>
                            <a className={callToActionStyles.button}>
                                {storeItem[1].name}
                            </a>
                        </Link>
                    )
                })}
            </div>


        </section>
	)
}