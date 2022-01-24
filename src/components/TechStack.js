import StyledSection from "./StyledSection"
import H2 from "./H2"
import { useEffect, useRef } from "react"
import VARS from "../vars"
import styled from "styled-components"
import NextSecArrow from "./NextSecArrow"

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
                <H2>Front-End Developer in the making</H2>

                <StackDiv>
                    <p>
                        <span>I enjoy Javascript and React. I believe component-driven development is the way to go. For quick styling, I use tailwind. For more control, I like to combine it with styled-components.</span>
                        {/* <span className="font-semibold">{strongStack.join(", ")}.</span> */}
                        <span> I don't do much testing, but when I do it's in Jest for unit tests and for E2E testing, I'd like to learn about Cypress.</span>
                        {/* <span className="font-semibold">{famStack.join(", ")}.</span> */}

                        <span> In 2022, I intend to start working in a team, learn from my colleagues, focus more on both React and Javascript. Get more comfortable with GIT, add storybook, nextJS and typescript into my toolbox.</span>
                        {/* <span className="font-semibold">{planStack.join(", ")} and much more.</span> */}
                    </p>
                </StackDiv>
            </div>
            <div className="pt-12">
                <NextSecArrow direction="down" link={ids.portfolioSec} />
            </div>
        </StyledSection >
    )
}

export default TechStack
