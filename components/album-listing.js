import {FaBandcamp, FaGlobe} from 'react-icons/fa';
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

export default function AlbumListing({ album }) {
    const { t } = useTranslation('common')

    return (
        <div className="overflow-visible group relative max-w-xl mx-auto border-solid border border-violet-500/50 hover:border-violet-500 rounded-xl flex items-center gap-6 my-5 transition">
            <div className="absolute -left-6 w-52 h-52 rounded-md shadow-lg group-hover:scale-105 transition overflow-clip">
                <Image src={album.cover} alt={album.name} layout="fill" sizes="13rem" priority placeholder='blur' blurDataURL={album.coverColor}/>
            </div>
            <div className="flex flex-col py-5 pl-52">
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
