
import {FaTwitter, FaBandcamp, FaDiscord, FaEnvelope} from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-500/20 mt-10">
      <div className="container max-w-4xl mx-auto flex py-8 flex-col text-center">
          <div className="w-full mx-auto flex justify-center flex-wrap items-center gap-3">
              <Link href="http://twitter.com/kodamasoft" className='footer_svg_container outline-none'>
                <FaTwitter
                 className='text-slate-500 no-underline hover:text-slate-50 hover:scale-105 w-12 h-12 transition'/>                  
              </Link>
              <Link href="https://kodamasounds.bandcamp.com/" className="footer_svg_container outline-none">
                <FaBandcamp className='text-slate-500 no-underline hover:text-slate-50 hover:scale-105 w-12 h-12 transition'/> 
              </Link>
              <Link href="/discord" className="footer_svg_container outline-none">
                <FaDiscord className='text-slate-500 no-underline hover:text-slate-50 hover:scale-105 w-12 h-12 transition'/> 
              </Link>
              <Link href="mailto:kodamateam@gmail.com" className="footer_svg_container outline-none">
                <FaEnvelope className='text-slate-500 no-underline hover:text-slate-50 hover:scale-105 w-12 h-12 transition'/>
              </Link>
          </div>
          <a data-i18n="footer.source_code" className="text-slate-500 transition hover:text-slate-50 mt-5 hover:underline" href="https://github.com/krz0001/kodama-next" target='_blank' rel="noreferrer">Source code</a>
          <p className="text-slate-500 mt-5">
            KodamaSoft / KodamaSounds logo by <a href="https://twitter.com/vgmcal" className="text-slate-500 transition hover:text-slate-50 hover:underline">cal</a> <br/>
            Kodama Mascots by Garrrros (KodamaSoft) <br/>
            Website by <a href="https://twitter.com/krz0001" className="text-slate-500 transition hover:text-slate-50 hover:underline">krz</a> (KodamaSoft) <br/>
          </p>
      </div>  
    </footer>

  )
}
