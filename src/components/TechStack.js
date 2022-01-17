import StyledSection from "./StyledSection"
import H2 from "./H2"
import { useEffect, useRef } from "react"
import VARS from "../vars"
import styled from "styled-components"

const StackDiv = styled.div(({ theme }) =>
    `display: flex;
    white-space: pre-wrap;
    padding-top: 1rem;
`)

const TechStack = (props) => {

    const { ids } = VARS
    const { activeSection, observer } = props
    const techStackSection = useRef()

    useEffect(() => {
        observer.observe(techStackSection.current)
    }, [activeSection])

    const strongStack = ["react", "js", "git", "tailwind", "styled-components"]
    const famStack = ["gatsby", "jest", "cypress", "react-beautiful-dnd"]
    const planStack = ["next", "ts", "react-testing-library"]

    return (
        <StyledSection activeSection={activeSection} ref={techStackSection} id={`${ids.techStackSec}`} className="min-h-screen">
            <div className="absolute flex flex-col items-center justify-center">

                <H2>Future Rockstar Front-End Developer Here.</H2>
                <StackDiv>
                    <p>
                        <span>I am quite confident working with </span>
                        <span className="font-semibold">{strongStack.join(", ")}.</span>
                    </p>
                </StackDiv>
                <StackDiv>
                    <p>
                        <span>I have experimented with and familiar with </span>
                        <span className="font-semibold">{famStack.join(", ")}.</span>
                    </p>
                </StackDiv>
                <StackDiv>
                    <p>
                        <span>In 2022, I intend to look into </span>
                        <span className="font-semibold">{planStack.join(", ")} and much more.</span>
                    </p>
                </StackDiv>
            </div>
        </StyledSection >
    )
}

export default TechStack
