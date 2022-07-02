import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import ProseContainer from '../components/prose-container'
import MoreStories from '../components/more-stories'
import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

import { getAllPosts } from '../lib/api'
import { WEBSITE_NAME } from '../lib/constants'


export default function Index({ allPosts }) {
  const { t } = useTranslation('common')

  return (
    <>
      <Layout>

        <Head>
          <title>{ WEBSITE_NAME }</title>
        </Head>

        <Container>
          <Header />
          
          <div className="container pt-10 px-6 mx-auto">
            <ProseContainer>
              <h2>{t('home.title')}</h2>
              
              <p>{t('home.content.1')}</p>
              <p> 
                <Trans
                  i18nKey="common:home.content.2"
                  components={{
                    ul : <ul/>,
                    li : <li/>
                  }}
                />
              </p>
              <p> 
                <Trans
                  i18nKey="common:home.content.3"
                  components={{
                    bandcamp : <Link href="https://kodamasounds.bandcamp.com/"/>,
                    booth : <Link href="https://kodamasoft.booth.pm/"/>
                  }}
                />
              </p>
            </ProseContainer>
             {allPosts.length > 0 && <MoreStories posts={allPosts} />} 
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ locale }) {
  let allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'locale',
    'public'
  ], locale)

  allPosts = allPosts.filter((post) => post.public !== false);
  
  return {
    props: { allPosts },
  }
}
