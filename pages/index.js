import Container from '../components/container'
import Header from '../components/header'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

import { useRouter } from 'next/router';


import { WEBSITE_NAME } from '../lib/constants'

export default function Index({ allPosts }) {

  return (
    <>
      <Layout>
        <Head>
          <title>{ WEBSITE_NAME }</title>
        </Head>
        <Container>
          <Header />
          
          <Intro /> 
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'locale'
  ], locale)

  return {
    props: { allPosts },
  }
}
