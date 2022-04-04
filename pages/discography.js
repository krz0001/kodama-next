import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'


import { getAllPosts } from '../lib/api'
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
          <div className="container pt-10 px-6 mx-auto">
            aaaaaaaaaaa
          </div>
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
