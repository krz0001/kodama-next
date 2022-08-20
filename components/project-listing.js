import Link from 'next/link'

export default function ProjectListing({ project }) {
	console.log(project)

	return (
		<Link href={project.url}>
			<a className="block w-full no-underline not-prose mb-8">
				<h3 className="text-2xl subpixel-antialiased mt-0">
					{project.title}
				</h3>
				<p>
					Theme:
					{' ' +
						project.themes.map(function (theme, index) {
							return (index > 0 ? ' ' : '') + theme
						})}
				</p>
				<p>
					Status: {project.status} | {project.percentage}% |{' '}
					{project.duration}
				</p>
				<div className="w-full bg-white h-2 rounded-full overflow-hidden ">
					<div
						className="bg-purple-600 h-2 rounded-full"
						style={{ width: project.percentage + '%' }}
					></div>
				</div>
				{project.deadline && <p>Deadline: {project.deadline}</p>}
			</a>
		</Link>
	)
}
