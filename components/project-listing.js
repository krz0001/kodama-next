import Link from 'next/link'

export default function ProjectListing({ project }) {
	function statusBadgeStyles(status) {
		let styles = "inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-white rounded-full text-base";
	
		switch (status) {
			case 'Completed':
				styles += " bg-purple-500"
				break;
			case 'In Progress':
			case 'In Development':
			case 'Ongoing':
			case "Currently Going":
				styles += " bg-green-500"
				break;
			case 'Accepting Submissions':
				styles += " bg-yellow-600"
				break;
			case 'Cancelled':
				styles += " bg-red-500"
				break;
			default:
				styles += " bg-gray-500"
				break;
		}
		return styles	
	}

	return (
		<Link href={project.url}>
			<a className="flex flex-col text-center bg-violet-500/25 hover:bg-violet-500/40 no-underline not-prose md:max-w-2xl mx-auto content-center rounded-xl my-5 transition py-5 px-10">
				<h3 className="text-2xl font-semibold mt-0">
					{project.title}
				</h3>
				<p className='font-normal text-base'>
					Theme:
					{' ' +
						project.themes.map(function (theme, index) {
							return (index > 0 ? ' ' : '') + theme
						})}
				</p>
				<p>
					<span className={statusBadgeStyles(project.status)}>{project.status}</span> | {project.percentage}% |{' '}
					{project.duration}
				</p>
				<div className="w-full border border-1 border-white/50 h-2 rounded-full overflow-hidden mt-2">
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
