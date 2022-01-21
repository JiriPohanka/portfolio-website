const ProjectGrid = ({ gridItems }) => {

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 p-4">
            {gridItems}
        </div>
    )
}

export default ProjectGrid
