import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import ProseContainer from '../components/prose-container'

import ProjectListing from '../components/project-listing'
import projectsJson from "/public/assets/projects/projects.json"

import { WEBSITE_NAME } from '../lib/constants'

export default function Projects() {
  const projectsArray = Object.values(projectsJson);
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
              <h2 className='text-center'>Our current projects</h2> 
            </ProseContainer>
            <div className="flex flex-wrap max-w-3xl mx-auto gap-4 mt-5">
              {projectsArray.map(function(project) {
                return (
                  <>
                    <ProjectListing project={project} />
                  </>
                )
              })}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}
