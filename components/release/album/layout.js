import Head from 'next/head'

import ReleaseHead from './release-head'
import ReleaseDescription from './release-description'
import ReleaseCallToAction from './release-call-to-action'
import ReleaseTracklist from './release-tracklist'
import ReleaseYouTubeEmbed from './release-youtube-embed'
import ReleaseCredits from './release-credits'
import ReleaseFooter from './release-footer'

import { createGlobalStyle } from 'styled-components';
import { Noto_Sans_JP } from "next/font/google"

const noto = Noto_Sans_JP({
    subsets: ['latin'],
    weight: ['400', '900'],
    variable: '--font-noto'
});

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
                <link rel="shortcut icon" href="/favicons/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicons/favicon-16x16.png"
                />
                <title>{release.title + " - KodamaSounds"}</title>
                <meta property="og:title" content={release.title + " - KodamaSounds"} />
                <meta name="theme-color" content={'#' + release.color} />
                <meta property="og:image" content={release.cover} />
                <meta property="og:description" content={release.description} />
                <meta property="og:type" content="website" />
            </Head>
            <div className={`${noto.variable} bg-[#232426] font-release text-white min-h-screen pb-1`}>
                <ReleaseHead
                    slug={release.slug}
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

