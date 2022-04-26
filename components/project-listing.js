import Image from 'next/image'
import Link from 'next/link'

export default function ProjectListing({ project }) {
    console.log(project);

    return (
        <Link href={project.url}>
            <a className="relative group bg-slate-800 w-full text-center rounded-md overflow-hidden h-28">    
                <div className="relative h-full inset-0 group-hover:scale-105 transition grid place-content-center">
                    <h3 className="font-mono text-2xl mx-10 subpixel-antialiased">{project.name}</h3>
                </div>
            </a>
        </Link>
      )
}
