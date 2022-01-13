import StyledSection from "./StyledSection"
import H2 from "./H2"
import { useEffect, useRef } from "react"
import VARS from "../vars"

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
            <H2>Future Rockstar Front-End Developer Here.</H2>
            <div className='flex whitespace-pre'>
                <span>I am quite confident working with </span>
                <span className="font-semibold">{strongStack.join(", ")}.</span>
            </div>
            <div className='flex whitespace-pre'>
                <span>I have experimented with and familiar with </span>
                <span className="font-semibold">{famStack.join(", ")}.</span>
            </div>
            <div className='flex whitespace-pre'>
                <span>In 2022, I intend to look into </span>
                <span className="font-semibold">{planStack.join(", ")} and much more.</span>
            </div>
        </StyledSection >
    )
}

export default TechStack
