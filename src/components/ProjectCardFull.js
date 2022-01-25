import styled from "styled-components"
import { ThemeContext } from "styled-components"
import { useContext } from "react"

const CardInfoWrap = styled.div(({ theme }) =>
    `display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: ${(theme.projectCard.bgrCol)};
    opacity: 0;
    &:hover {
        opacity: 1;
    }
    `
)

const CardTitle = styled.h3(({ theme }) =>
    `font-weight: 400;
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

const ProjectCardFull = ({ projectItem }) => {

    const theme = useContext(ThemeContext)

    return (
        <div className="transform duration-500 flex rounded relative overflow-hidden hover:scale-110">
            <img className="object-cover" src={projectItem.thumb} />
            <CardInfoWrap className="items-start justify-center h-full w-full transition-all duration-500 p-4 cursor-pointer">
                <CardTitle>{projectItem.title}</CardTitle>
                <CardDesc>{projectItem.description}</CardDesc>
                <div className='flex my-4'>
                    <a className={`text-sm transform transition-all duration-300 px-4 py-2 inline-block rounded-lg mr-2 transform transition-all duration-500 border-2  ${theme.projectButton.fontCol} ${theme.projectButton.bgrCol} ${theme.projectButton.borderCol}`} href={projectItem.link} target="_blank" rel="noopener noreferrer">Live preview</a>
                    <a className={`text-sm transform transition-all duration-300 px-4 py-2 inline-block rounded-lg mr-2 transform transition-all duration-500 border-2  ${theme.projectButton.fontCol} ${theme.projectButton.bgrCol} ${theme.projectButton.borderCol}`} href={projectItem.repo} target="_blank" rel="noopener noreferrer">Github repo</a>
                </div>
            </CardInfoWrap>
        </div>
    )
}

export default ProjectCardFull
