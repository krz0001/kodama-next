import {FaBandcamp, FaGlobe} from 'react-icons/fa';

import BoothSVG from '../public/assets/icons/booth.svg'

import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

export default function AlbumListing({ album }) {
    const { t } = useTranslation('common')

    return (
        <div className="group relative max-w-2xl mx-auto content-center border-solid border border-violet-500/50 hover:border-violet-500 rounded-xl grid grid-cols-3 my-5 transition">

            <div className="relative h-5/6 m-5 mr-auto aspect-square rounded-md shadow-lg transition overflow-clip">
                <Image src={album.cover} alt={album.name} layout="fill" sizes="13rem" priority placeholder='blur' blurDataURL={album.coverColor}/>
            </div>

            <div className="col-span-2 flex flex-col py-5 px-10">
                <div>
                    <span className="font-mono text-sm">{album.id}</span>
                    <h2 className="text-2xl font-semibold">{album.name}</h2>
                </div>
                <div className="flex flex-wrap mt-4 gap-4">
                    <a href={album.bandcamp} className="kodama_btn kodama_btn--primary">
                        <FaBandcamp className='h-4 w-4 mr-2'/>
                        Bandcamp
                    </a>

                    <a href={album.booth} className="kodama_btn kodama_btn--primary">
                        <div className='h-4 w-4 mr-2'>
                            <BoothSVG/>
                        </div>
                        BOOTH
                    </a>

                    <a href={album.website} className="kodama_btn kodama_btn--primary">
                        <FaGlobe className='h-4 w-4 mr-2' />
                        Website
                    </a>

                    <a href={album.vgmdb} className="kodama_btn kodama_btn--primary">
                        VGMDB
                    </a>

                    { album.thbwiki ? 
                    <a href={album.thbwiki} className="kodama_btn kodama_btn--primary">
                        THB WIKI
                    </a> 
                    : null }
                </div>
            </div>
        </div>
      )
}
