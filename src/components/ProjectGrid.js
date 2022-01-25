const ProjectGrid = ({ gridItems }) => {

    return (
        <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2-min-350 lg:grid-cols-3 lg:grid-rows-1-min-350 mt-4">
            {gridItems}
        </div>
    )
}

export default ProjectGrid
