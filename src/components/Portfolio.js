import { useEffect, useRef } from "react"
import StyledSection from "./StyledSection"
import VARS from '../vars';

const Portfolio = (props) => {

    const { ids } = VARS

    const { activeSection, observer } = props
    const porfolioSection = useRef()

    useEffect(() => {
        observer.observe(porfolioSection.current)

    }, [activeSection])

    return (
        <StyledSection activeSection={activeSection} id={`${ids.portfolioSec}`} className="h-screen" ref={porfolioSection} >
            <h1>Porfolio</h1>
        </StyledSection >
    )
}

export default Portfolio
