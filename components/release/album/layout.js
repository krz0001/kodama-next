import Head from 'next/head'

import layoutStyles from './layout.module.scss'
import ReleaseNav from './release-nav'
import ReleaseHead from './release-head'
import ReleaseDescription from './release-description'
import ReleaseCallToAction from './release-call-to-action'
import ReleaseTracklist from './release-tracklist'
import ReleaseYouTubeEmbed from './release-youtube-embed'
import ReleaseCredits from './release-credits'
import ReleaseFooter from './release-footer'

import Meta from '../../meta'
import { createGlobalStyle } from 'styled-components';



export default function ReleaseLayout({ release }) {
    const GlobalStyles = createGlobalStyle`
        :root {
        --release-color: #${release.color};
    }
    `;

    return (
        <>
            <Meta />
            <GlobalStyles />
            <Head>
                <title>{release.title + " - KodamaSounds"}</title>
            </Head>
            <div className={layoutStyles.main}>
                <ReleaseNav />
                <ReleaseHead 
                    logo={release.logo} 
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

