import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import LinkIcon from '../components/link-icon'
import ProseContainer from '../components/prose-container'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import Image from "next/image";

import { WEBSITE_NAME } from '../lib/constants'

import teamJson from "/public/assets/team/team.json"
import collaboratorsJson from '/_collaborators.json'


export default function Team() {
    const { t } = useTranslation('common')

    return (
        <>
            <Layout>

                <Head>
                    <title>{WEBSITE_NAME}</title>
                </Head>

                <Container>
                    <Header />

                    <div className="container pt-10 px-6 mx-auto">
                        <ProseContainer>
                            <h2>Team</h2>
                        </ProseContainer>
                            <div className='mx-auto mt-6 max-w-4xl'>
                                {teamJson.map((member, index) => {
                                    
                                    let collaboratorInfo = collaboratorsJson[member.collaboratorID]

                                    if (collaboratorInfo === undefined) {
                                        return;
                                    }

                                    return <div key={index} className={' mb-5 flex flex-col items-center text-center md:flex-row ' + (index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : 'md:flex-row md:text-left')}>
                                        <Image src={member.image} className='w-32 h-32 object-cover mx-8 flex-shrink-0' alt={collaboratorInfo.name} width={128} height={128} />
                                        
                                        <div className={'flex flex-col items-center ' + (index % 2 === 0 ? 'md:items-end' : 'md:items-start')}>
                                            <h3 className='w-full font-bold text-xl'>
                                                
                                                {collaboratorInfo.name}</h3>
                                            <p className='text-lg mb-2 '>{member.role}</p>
                                            {member.bio && <p className='text-base '>{member.bio}</p>}
                                            <div className='flex flex-row items-center justify-center mt-4 space-x-4'>
                                            {collaboratorInfo.links &&
											Object.entries(
												collaboratorInfo.links
											).sort((a, b) => {
												if (a[0] < b[0]) { return -1 }
												if (a[0] > b[0]) { return 1 }
												return 0
											}).map((link) => {
												return (
													<Link
														href={link[1]}
														passHref
														target="_blank"
														key={link[0]}
													>
														<LinkIcon
															className="min-w-6 w-auto h-6 transition-all duration-300 ease-in-out font-black hover:text-violet-500"
															linkObj={link[1]}
														/>
													</Link>
												)
											})}    
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                    </div>
                </Container>
            </Layout>
        </>
    )
}
