import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

import Link from 'next/link';
import { useRouter } from 'next/router';

import { WEBSITE_NAME } from '../lib/constants'

export default function Index({ allPosts }) {
  const { locale, locales, asPath } = useRouter();

  return (
    <>
      <Layout>
        <Head>
          <title>{ WEBSITE_NAME }</title>
        </Head>
        <Container>
          <Intro />
           
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4">
            {locales.map((l, i) => {
              return (
                <span key={i} class={l === locale ? 'font-bold' : ''}>
                  <Link href={asPath} locale={l}>
                    {l}
                  </Link>
                </span>
              );
            })}
          </div>


          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
  ])

  return {
    props: { allPosts },
  }
}
