import Image from "next/image";
import Link from 'next/link'

import descStyles from './release-description.module.scss'
import useTranslation from 'next-translate/useTranslation'


function DtKodama({ children }) {
    return (
        <dt><span className={descStyles.dt_label}>{children}</span></dt>
    )
}

export default function ReleaseDescription({ cover, title, circle, specification, release_date, catalog, price, store }) {
    const { t } = useTranslation('release')

    return (
		<div className='container mx-auto my-16 grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-4'>
            <div className='relative max-w-xs md:max-w-xl lg:max-w-3xl mx-auto mb-4'>
                <Image src={cover} className="rounded" height="768" width="768" alt='Logo' quality={100} priority={true} />
            </div>

            <dl className={descStyles.description}>
                <DtKodama>{t('title')}</DtKodama>
                <dd>{title}</dd>

                <DtKodama>{t('circle')}</DtKodama>
                <dd>
                    <Link href={circle.link}>
                        {circle.name}
                    </Link>
                </dd>

                <DtKodama>{t('specification')}</DtKodama>
                <dd>{specification}</dd>

                <DtKodama>{t('release_date')}</DtKodama>
                <dd>{release_date}</dd>
                
                <DtKodama>{t('catalog')}</DtKodama>
                <dd>{catalog}</dd>

                <DtKodama>{t('price')}</DtKodama>
                <dd>{price}</dd>
                
                <DtKodama>{t('store')}</DtKodama>
                {/* parse store object with name and link and put them into Link elements */}
                <dd><ul>
                    {Object.entries(store).map(storeItem => {
                        return (
                            <li key={storeItem[0]}>
                                <Link href={storeItem[1].link}>
                                    {storeItem[1].name}
                                </Link>
                            </li>
                    )})}
                </ul></dd>
            </dl>
        </div>
    )
}