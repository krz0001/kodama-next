import Head from 'next/head'

import layoutStyles from './layout.module.scss'
import ReleaseHead from './release-head'
import ReleaseDescription from './release-description'
import ReleaseCallToAction from './release-call-to-action'
import ReleaseTracklist from './release-tracklist'
import ReleaseYouTubeEmbed from './release-youtube-embed'
import ReleaseCredits from './release-credits'
import ReleaseFooter from './release-footer'

import { createGlobalStyle } from 'styled-components';


export default function ReleaseLayout({ release }) {
    const GlobalStyles = createGlobalStyle`
        :root {
        --release-color: #${release.color};
    }
    `;

    return (
        <>
            <GlobalStyles />
            <Head>
                <title>{release.title + " - KodamaSounds"}</title>
                <meta property="og:title" content={release.title + " - KodamaSounds"} />
                <meta name="theme-color" content={'#' + release.color} />
                <meta property="og:image" content={release.logo} />
                <meta property="og:description" content={release.description} />
                <meta property="og:type" content="website" />            
            </Head>
            <div className={layoutStyles.main}>
                <ReleaseHead 
                    logo={release.logo} 
                    background={release.background}
                    description={release.description} 
                    sc_track_id={release.soundcloud_track_id} 
                    color={release.color}
                />
                <ReleaseDescription 
                    cover={release.cover}
                    title={release.title}
                    circle={release.circle}
                    specification={release.specification}
                    release_date={release.release_date}
                    catalog={release.catalog}
                    price={release.price}
                    store={release.store}
                />
                <ReleaseCallToAction
                    store={release.store}
                />
                <ReleaseTracklist tracklist={release.tracklist} />
                <ReleaseYouTubeEmbed youtube={release.youtube_id} />
                <ReleaseCredits credits={release.credits} />
                <ReleaseFooter 
                    slug={release.slug}
                    footer_string={release.footer}
                    title={release.title}
                />
            </div>
        </>
    )
}


/*
REF
- https://gensokyo-party-vol1.tumblr.com/
- https://moonstruck-analogy.tumblr.com/
- https://gensokyo-party-2-vantablack.tumblr.com/

DATA NEEDED FOR ALBUM LISTING
* = multi language
- logo
- color
- description*
- cover
- title
- circle
- specification
- release date
- catalog
- price
- store links


TODO
- get fonts for release website
- add metadata
- add header
- add soundcloud embed
- add album info
- add call to action
- add tracklist
- add youtube embed
- add credits
- add copyrights 
*/

