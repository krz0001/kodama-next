import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'

import gamesJson from "/public/assets/games/releases.json"

import { WEBSITE_NAME } from '../lib/constants'

export default function Discography() {
  return (
    <>
      <Layout>
        <Head>
          <title>{ WEBSITE_NAME }</title>
        </Head>
        <Container>
          <Header />
          <div className="container pt-10 px-6 mx-auto">
            <div className='grid grid-cols-4 gap-4'>
              {Object.keys(gamesJson).map((key) => (
                <ul key={key} className="border-2 border-gray-300 p-4 rounded-md text-center">
                    <li className='text-xl font-semibold mb-4'>{gamesJson[key].title}</li>
                    <li>{gamesJson[key].release_date}</li>
                    {gamesJson[key].links ? (
                        <li>
                            <ul>
                            {Object.keys(gamesJson[key].links).map((link, index) => (
                                <a key={index} className="bg-gray-200 text-gray-800 p-2 rounded-md inline-block" href={gamesJson[key].links[link]}>{link}</a>
                            ))}
                            </ul>
                        </li>
                        ) : null}
                </ul>
              ))}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}