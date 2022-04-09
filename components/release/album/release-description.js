import Image from 'next/image'
import descStyles from './release-description.module.scss'

export default function ReleaseDescription({ cover }) {
    return (
		<div className='container mx-auto my-16 grid grid-cols-2'>
            <div className='relative w-[800px] max-w-full mx-auto'>
                <Image src={cover} height="500" width="500" layout="intrinsic" alt='Logo'/>
            </div>

            <dl className={descStyles.description}>
                <dt>TITLE</dt>
                <dd>Gensokyo Party Vol. 1</dd>

                <dt>CIRCLE</dt>
                <dd>KodamaSounds</dd>

                <dt>SPECIFICATION</dt>
                <dd>Digital Touhou Arrange &amp; Vocal Album</dd>

                <dt>RELEASE DATE</dt>
                <dd>30 Dec. 2020</dd>
                
                <dt>CATALOG</dt>
                <dd>KSDL-0001</dd>

                <dt>PRICE</dt>
                <dd>7€</dd>
                
                <dt>STORE</dt>
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