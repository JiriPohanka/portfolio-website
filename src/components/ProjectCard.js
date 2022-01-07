const ProjectCard = ({ projectItem }) => {
    return (

        <div className="flex rounded overflow-hidden">
            <img className="object-cover" src={projectItem.thumb} />
            <div className="bg-gray-300">
                <h3>{projectItem.title}</h3>
                <p>{projectItem.description}</p>
                <p>{projectItem.techStack}</p>
            </div>
        </div>

    )
}

export default ProjectCard
