import StyledSection from "./StyledSection"
import H2 from "./H2"
import { useEffect, useRef } from "react"
import VARS from "../vars"
import styled from "styled-components"
import P from "./P"
// import NextSecArrow from "./NextSecArrow"

const StackDiv = styled.div(({ theme }) =>
    `white-space: pre-wrap;
    text-align: center;
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
                <H2>Front-End Developer <span className="whitespace-pre">in the making</span></H2>

                <StackDiv>
                    <P className="text-3xl">
                        I enjoy Javascript and React. I believe component-driven development is the way to go. For quick styling, I use tailwind. For more control, I like to combine it with styled-components. I don't do much testing, but when I do it's in Jest for unit tests and for E2E testing, I'd like to learn about Cypress. In 2022, I intend to start working in a team, learn from my colleagues, focus more on both React and Javascript. Get more comfortable with GIT, add storybook, nextJS and typescript into my toolbox.
                    </P>
                </StackDiv>
            </div>
            {/* <div className="pt-12">
                <NextSecArrow direction="down" link={ids.portfolioSec} />
            </div> */}
        </StyledSection >
    )
}

export default TechStack
