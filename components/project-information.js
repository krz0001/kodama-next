import projectsJSON from '/public/assets/projects/projects.json'

export default function ProjectInfo({ slug, children }) {
    let project = {};

    // iterate trough the array of sections in the projectsJSON file
    for (let i = 0; i < projectsJSON.length; i++) {
        // if in the projects array, we find a project with the same slug as the one we are looking for, return the project
        for (let j = 0; j < projectsJSON[i].projects.length; j++) {
            // if the project has the same slug as the one we are looking for, return the project
            if (projectsJSON[i].projects[j].slug === slug) {
                project = projectsJSON[i].projects[j];
                break;
            }
        }
    }

	return (
		<p>
            <strong>Album Title:</strong> {project.title ? project.title : " ??? "}<br/>
            <strong>Status:</strong> { project.status ? project.status : " ??? "}<br/>
            <strong>Approximate Completion:</strong> { project.percentage ? project.percentage : " ??? "}<br/>
            <strong>Current Duration:</strong> { project.duration ? project.duration : " ??? "}<br/>
            <strong>Current Number of Finished Tracks:</strong> { project.finished_tracks ? project.finished_tracks : " ??? "}<br/>
            <strong>Mastering:</strong> { project.mastering ? project.mastering : " ??? "}<br/>
            <strong>Artwork Commission:</strong> { project.artwork_comission ? project.artwork_comission : " ??? "}<br/>
		</p>
	)
}
