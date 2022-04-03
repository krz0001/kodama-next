import { WEBSITE_NAME } from '../lib/constants'
import ProseContainer from '../components/prose-container'

export default function Intro() {
	return (
		<ProseContainer>
			<h2>Welcome to {WEBSITE_NAME}!</h2>
			<p>
				<b>KodamaSoft</b> is a small french amateur community crafting
				video games, visual novels, and music! A multitude of young
				writers, programmers, sound and visual artists are part of this
				group to create ambitious and interesting amateur projects! You
				can join us on Discord now and see all that for yourself, where
				we also organize community music albums where anyone can
				participate!
			</p>

			<p>
				For now, you can check out our growing Discography, and Once
				Upon a Child, a visual novel made and written by Dream! Stellar
				Sanctuary is another project in development, scheduled to
				release someday!
			</p>
		</ProseContainer>
	)
}
