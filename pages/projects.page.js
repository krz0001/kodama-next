import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'

import Container from '../components/container'
import Header from '../components/header'
import ProseContainer from '../components/prose-container'

import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'

import ProjectListing from '../components/project-listing'
import projectsJson from '/public/assets/projects/projects.json'

import { WEBSITE_NAME } from '../lib/constants'


export default function Projects({ filteredPosts }) {

  const { t, lang } = useTranslation();

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
              <h2>{t('common:projects.presentation.title')}</h2>
              <p>{t('common:projects.presentation.description')}</p>

              <div>
                {projectsJson.map(function (group) {
                    return (
                        <>
                            <h2>{group.name}</h2>
                            <>{group.desc ? <p>{group.desc}</p> : null}</>

                            {group.projects.map(function (project) {
                                return (
                                    <ProjectListing project={project} key={project.slug} />
                                )
                            }
                            )}
                        </>)
                })}
              </div>

              <ul><li>{t('common:projects.goals.points.1.title')}</li></ul>
              <p>{t('common:projects.goals.points.1.description')}</p>
              <ul><li>{t('common:projects.goals.points.2.title')}</li></ul>
              <p>{t('common:projects.goals.points.2.description')}</p>
              <ul><li>{t('common:projects.goals.points.3.title')}</li></ul>
              <p>{t('common:projects.goals.points.3.description')}</p>
              <ul><li>{t('common:projects.goals.points.4.title')}</li></ul>
              <p>{t('common:projects.goals.points.4.description')}</p>

              <hr/>

              <p>
              <Trans
                  i18nKey="common:projects.goals.points.closure"
                  components={{
                    link : <Link href="/projects/faq"/>,
                  }}
                />
              </p>
            </ProseContainer>
          </div>
        </Container>
      </Layout>
    </>
  )
}
