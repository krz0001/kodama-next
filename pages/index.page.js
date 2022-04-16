import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import ProseContainer from '../components/prose-container'
import MoreStories from '../components/more-stories'
import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'

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
              <p> 
                <Trans
                  i18nKey="common:home.content.1"
                  components={{
                    strong : <strong />
                  }}
                />
              </p>
              <p>{t('home.content.2')}</p>
              <p>{t('home.content.3')}</p>
              <p>{t('home.content.4')}</p>
            </ProseContainer>
            {/* {allPosts.length > 0 && <MoreStories posts={allPosts} />} */}
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
