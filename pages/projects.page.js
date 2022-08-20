import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import ProseContainer from '../components/prose-container'

import ProjectListing from '../components/project-listing'
import projectsJson from '/public/assets/projects/projects.json'

import { WEBSITE_NAME } from '../lib/constants'

export default function Projects() {
	const projectsArray = Object.values(projectsJson)
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
							<h2>
								Our current projects
							</h2>
							<p>
								KodamaSounds albums are doujin album projects
								that are constantly growing and ongoing. Our
								main objectives in those albums are:
							</p>

							<ul>
								<li>
									Artists from all places & skills: We ensure
									we maintain a certain balance of skill sets,
									between veteran artists and artists that are
									just starting out. We authorize all people
									to participate in those albums, and we
									believe it is a good way for artists to form
									bonds with others while also permitting
									people to collaborate with people of all
									horizons to improve and create a good
									community experience, with no
									discrimination. Everyone’s objective is to
									create interesting music pieces, and
									everyone can help one another to ensure we
									get the best out of everyone’s skills. No
									popularity contest, no favoritism: You wanna
									hop in? You can! And if you’re struggling,
									we’ll help out.
								</li>

								<li>
									Album ideas you don’t see elsewhere: More
									interesting and ambitious arrange albums for
									lesser-represented series out there. We are
									more than happy and proud to arrange albums
									for more niche & outcast game series.
								</li>

								<li>
									A constant stream of albums throughout the
									years: We ensure to publish as many albums
									as we can, spread out through the many Comic
									Market and M3 events.
								</li>

								<li>
									Crave variety: We make sure to accept all
									kinds of genres for our arrange albums, and
									there are many musically-themed album
									projects planned for our “ECLECTIC
									RESONANCE” original work series. If there’s
									a genre or style of music that is not yet
									represented on these albums, it surely will
									soon.
								</li>
							</ul>

              <p>
              To make things simpler to understand, here’s an explanation of how we generally proceed with our album direction: Each album concept has its own ongoing series, and are almost always constantly going, so long as there are supplied tracks by artists. Both artists and our listeners will be able to check how the album projects are progressing runtime wise on our website on the “Projects” tab, by seeing how many minutes of the album has been “filled” in by artists. The runtime will be calculated based on the sum of all confirmed and completed tracks submitted for the album. Work in project tracks will NOT be calculated to ensure that whoever comes first will still be able to make it on to the next release. Once we reach between 55 minutes and 70 minutes of runtime, we will tick the album as “complete”, and any new submitted tracks will not be able to make it in. Once complete, the finalized album will then be formally announced and made available for the next relevant event (Comic Market and M3 for most albums, and Reitaisai/Comic Market for Touhou related albums). Any new submission will then be added to the next album, which will be a direct sequel to the previous one. And thus, the project begins anew like the previous one. That way, this ensures that our most popular album projects keep on being posted as long as the demand remains.
              </p>
              <p>
              That means that <b>album projects have no deadline whatsoever.</b> You can submit your track at any time, and it will be added to the upcoming album. Due to the nature of how this system works, <b>it’s not really possible to anticipate release dates, even approximately.</b> You may anticipate the general release window by checking the advancement of each project by taking a look at the current runtime or percentage, but please know that it may be more or less random, as track submissions may come up at any time. <b>Albums will have a fixed release date only when the selection has been finalized and the threshold reaches 100%.</b>

              </p>
						</ProseContainer>
						<div className="flex flex-wrap max-w-3xl mx-auto gap-4 mt-5">
							{projectsArray.map(function (project) {
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
