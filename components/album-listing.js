import {FaBandcamp, FaGlobe} from 'react-icons/fa';
import BoothSVG from '../public/assets/icons/booth.svg'
import albumsJSON from '/public/assets/discography/albums.json'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

export default function AlbumListing({ slug }) {
    let album = {};
    const { t } = useTranslation('common')

    // if we find an album with the key equal as the slug we are looking for, return the album
    let keys = Object.keys(albumsJSON);
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === slug) {
            album = albumsJSON[keys[i]];
            break;
        }
    }
       
    return (
        <div className="not-prose group relative w-full md:max-w-2xl mx-auto content-center border-solid border border-violet-500/50 hover:border-violet-500 rounded-xl flex flex-col md:flex-row my-5 transition">

            <div className="relative h-52 w-52 my-5 mx-auto md:m-5 md:mr-0 aspect-square rounded-md shadow-lg transition overflow-clip flex-none" style={{ backgroundColor : album.coverColor }}>
                <Image src={album.cover} alt={album.name} layout="fill" sizes="13rem" priority/>
            </div>

            <div className="flex flex-col flex-initial py-5 px-10">
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

                    { album.vgmdb ?
                    <a href={album.vgmdb} className="kodama_btn kodama_btn--primary">
                        VGMDB
                    </a>
                    : null }

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
