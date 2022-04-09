import Image from 'next/image'
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
		<div className='container mx-auto my-16 grid grid-cols-2'>
            <div className='relative w-[800px] max-w-full mx-auto'>
                <Image src={cover} height="500" width="500" layout="intrinsic" alt='Logo'/>
            </div>

            <dl className={descStyles.description}>
                <DtKodama>{t('title')}</DtKodama>
                <dd>{title}</dd>

                <DtKodama>{t('circle')}</DtKodama>
                <dd>{circle.name}</dd>

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
                                <a href={storeItem[1].link}>{storeItem[1].name}</a>
                            </li>
                    )})}
                </ul></dd>
            </dl>
        </div>
    )
}