import styled from "styled-components"

const CardInfoWrap = styled.div(({ theme }) =>
    `display: flex;
    flex-direction: column;
    position: absolute;
    background-color: ${(theme.projectCard.bgrCol)};
    opacity: 0;
    &:hover {
    opacity: 1;
    
    `
)

const CardTitle = styled.h3(({ theme }) =>
    `
    font-weight: 400;
    font-size: 1.5rem;
    `
)

const CardDesc = styled.p`
    font-size: 0.9rem;
    font-weight: 300;
    `

const CardStack = styled.p`
    font-size: 0.9rem;
    `

const ProjectCard = ({ projectItem }) => {

    return (
        <div className="transform transform-duration-500 flex rounded relative overflow-hidden hover:scale-110">
            <img className="object-cover" src={projectItem.thumb} />
            <CardInfoWrap className="items-start justify-center h-full w-full transition-all duration-500 p-4 cursor-pointer">
                <CardTitle>{projectItem.title}</CardTitle>
                <CardDesc>{projectItem.description}</CardDesc>
                <CardStack>{projectItem.techStack}</CardStack>
            </CardInfoWrap>
        </div>

    )
}

export default ProjectCard
