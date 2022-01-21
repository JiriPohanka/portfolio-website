import StyledSection from "./StyledSection"
import H2 from "./H2"
import { useEffect, useRef } from "react"
import VARS from "../vars"
import styled from "styled-components"
import DottedArrow from "./NextSecArrow"

const StackDiv = styled.div(({ theme }) =>
    `white-space: pre-wrap;
    padding-top: 1rem;
    text-align: center;
    line-height: 2;
    max-width: 80%;
`)

const TechStack = (props) => {

    const { ids } = VARS
    const { activeSection, observer } = props
    const techStackSection = useRef()

    useEffect(() => {
        observer.observe(techStackSection.current)
    }, [activeSection])

    // const strongStack = ["react", "javascript", "basic git", "tailwind", "styled-components"]
    // const famStack = ["material-ui", "jest", "storybook", "various frontend packages"]
    // const planStack = ["nextJS", "typescript", "cypress", "react-testing-library"]

    return (
        <StyledSection activeSection={activeSection} ref={techStackSection} id={`${ids.techStackSec}`} className="min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <H2>Future Rockstar Front-End Developer Here</H2>

                <StackDiv>
                    <p>
                        <span>I enjoy Javascript. My FE UI framework of choice is ReactJS. I believe components-driven development is the way to go. For quick CSS, I use tailwindCSS. When I want more control, I like to combine it with styled-components.</span>
                        {/* <span className="font-semibold">{strongStack.join(", ")}.</span> */}
                        <span> I don't do much testing, but when I do for unit testing, I use Jest and for E2E testing, I'd like to learn about Cypress, it sounds pretty amazing. For my projects, I usually look for packages online to make my life easier, but quite often I prefer coding my own solution. Less trouble in future.</span>
                        {/* <span className="font-semibold">{famStack.join(", ")}.</span> */}

                        <span> In 2022, I intend to start working in a team, learn from my colleagues, focus more on React, Javascript. Get comfortable with more advanced GIT, add storybook, nextJS and typescript into my toolbox.</span>
                        {/* <span className="font-semibold">{planStack.join(", ")} and much more.</span> */}
                    </p>
                </StackDiv>
            </div>
            <div className='absolute bottom-10'>
                <DottedArrow direction="down" link={ids.portfolioSec} />
            </div>
        </StyledSection >
    )
}

export default TechStack
