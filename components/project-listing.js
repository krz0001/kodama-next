import Image from 'next/image'
import Link from 'next/link'

export default function ProjectListing({ project }) {
    console.log(project);

    return (
        <Link href={project.url}>
            <a className="relative group w-full rounded-md overflow-hidden h-28">    
                <h3 className="text-2xl  mt-5 subpixel-antialiased">{project.name}</h3>

                <div className="w-auto bg-gray-200 h-2 rounded-full overflow-hidden mt-3">
                    <div className="bg-purple-600 h-2 rounded-full" style={{"width": Math.floor(Math.random() * 100) + "%"}}></div>    
                </div>

            </a>
        </Link>
      )
}
