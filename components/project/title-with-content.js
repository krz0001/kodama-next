/* https://github.com/samselikoff/2022-06-09-resizable-panel/commit/fe04a842367657b4acb1058c454d3eca739c419d */

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import useMeasure from 'react-use-measure'

let duration = 0.25

export default function WrappableParagraph({ title, children }) {
	let [opened, setOpened] = useState(true)

	// function to copy link to a specific header anchor
	async function copyLink(id) {
		let link = window.location.href + id

		try {
			await navigator.clipboard.writeText(link)
			console.log('Page URL copied to clipboard')
		} catch (err) {
			console.error('Failed to copy: ', err)
		}

		navigator.clipboard.writeText(link)
	}

	return (
		<MotionConfig transition={{ duration }}>
			<>
				<h2
					onClick={() => setOpened(!opened)}
					className="mb-0 mt-4 inline-block"
					id={title.toLowerCase().replace(/ /g, '-')}
				>
					{title}
				</h2>
				{/* // click to copy link to title, only show on hover, no underline */}
				<button
					onClick={async () => {
						copyLink(`${title.toLowerCase().replace(/ /g, '-')}`)
					}}
					className="ml-2 text-violet-500 opacity-20 hover:opacity-100 focus:opacity-100 transition-opacity no-underline text-2xl"
				>
					#
				</button>
			</>
			<ResizablePanel isOpened={opened}>
				{opened ? children : null}
			</ResizablePanel>
		</MotionConfig>
	)
}

function ResizablePanel({ isOpened, children }) {
	let [ref, { height }] = useMeasure()

	return (
		<motion.div
			animate={{ height: isOpened ? height : 0 || 'auto' }}
			className="relative overflow-hidden"
		>
			<AnimatePresence initial={false}>
				<motion.div
					key={JSON.stringify(children, ignoreCircularReferences())}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<div
						ref={ref}
						className={`${height ? 'absolute' : 'relative'}`}
					>
						{children}
					</div>
				</motion.div>
			</AnimatePresence>
		</motion.div>
	)
}

/*
  Replacer function to JSON.stringify that ignores
  circular references and internal React properties.

  https://github.com/facebook/react/issues/8669#issuecomment-531515508
*/
const ignoreCircularReferences = () => {
	const seen = new WeakSet()
	return (key, value) => {
		if (key.startsWith('_')) return // Don't compare React's internal props.
		if (typeof value === 'object' && value !== null) {
			if (seen.has(value)) return
			seen.add(value)
		}
		return value
	}
}
