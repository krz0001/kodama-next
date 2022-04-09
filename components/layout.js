import Footer from '../components/footer'
import Meta from '../components/meta'

import layoutStyles from './layout.module.css'


export default function Layout({ children }) {
  return (
    <div className={layoutStyles.main_container}>
      <Meta />
      <div className={layoutStyles.main + " min-h-screen"}>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
