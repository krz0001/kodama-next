import Head from 'next/head'

import Layout from '../../components/layout'
import Header from '../../components/header'
import ProseContainer from '../../components/prose-container'



export default function ProjectLayout({ children }) {


    return (
        <Layout>
            <Header />
            <div className="container pt-10 px-6 mx-auto">

                <ProseContainer>
                    { children }
                </ProseContainer>
            </div>
        </Layout>
    )
}


