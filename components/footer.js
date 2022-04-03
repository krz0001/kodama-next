
import {FaTwitter, FaBandcamp, FaFacebook, FaDiscord} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-slate-500/20 mt-10">
      <div className="container max-w-4xl mx-auto flex py-8 flex-col text-center">
          <div className="w-full mx-auto flex justify-center flex-wrap items-center gap-3">
              <a href="" className='footer_svg_container outline-none'>
                <FaTwitter
                 className='text-slate-500 no-underline hover:text-slate-50 hover:scale-105 w-12 h-12 transition'/>                  
              </a>
              <a href="" className="footer_svg_container outline-none">
                <FaBandcamp className='text-slate-500 no-underline hover:text-slate-50 hover:scale-105 w-12 h-12 transition'/> 
              </a>
              <a href="" className="footer_svg_container outline-none">
                <FaFacebook className='text-slate-500 no-underline hover:text-slate-50 hover:scale-105 w-12 h-12 transition'/> 
              </a>
              <a href="" className="footer_svg_container outline-none">
                <FaDiscord className='text-slate-500 no-underline hover:text-slate-50 hover:scale-105 w-12 h-12 transition'/> 
              </a>
          </div>
          <a data-i18n="footer.source_code" className="text-slate-500 transition hover:text-slate-50 mt-5 hover:underline" href="https://github.com/krz0001/kodama-next" target='_blank' rel="noreferrer">Source code</a>
      </div>  
    </footer>

  )
}
