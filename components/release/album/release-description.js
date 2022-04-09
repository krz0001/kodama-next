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
                <dd>Digital Touhou Arrange &amp; Vocal Album</dd>

                <DtKodama>{t('release_date')}</DtKodama>
                <dd>30 Dec. 2020</dd>
                
                <DtKodama>{t('catalog')}</DtKodama>
                <dd>KSDL-0001</dd>

                <DtKodama>{t('price')}</DtKodama>
                <dd>7€</dd>
                
                <DtKodama>{t('store')}</DtKodama>
                    <dd>
                        <ul>
                            <li>
                                <a href="https://kodamasounds.bandcamp.com/album/gensokyo-party-vol-1-2" target="_blank" rel="noreferrer">Bandcamp</a>
                            </li>
                            
                            
                            <li>
                                <a href="https://booth.pm/en/items/2433797" target="_blank" rel="noreferrer">BOOTH</a>
                            </li>
                        </ul>
                    </dd>
            </dl>
		</div>
	)
}