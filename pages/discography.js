import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'

import AlbumListing from '../components/album-listing'
import albumsJson from "/public/assets/discography/albums.json"



import { getAllPosts } from '../lib/api'
import { WEBSITE_NAME } from '../lib/constants'

export default function Discography() {
  const albumsArray = Object.values(albumsJson);
  console.log(albumsArray);

  return (
    <>
      <Layout>
        <Head>
          <title>{ WEBSITE_NAME }</title>
        </Head>
        <Container>
          <Header />
          <div className="container pt-10 px-6 mx-auto">
            <div className='flex flex-wrap'>
              {albumsArray.map(function(album) {
                return (
                  <>
                    <AlbumListing album={album} />
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
