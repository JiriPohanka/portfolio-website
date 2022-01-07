import { useEffect, useRef, useState } from "react"
import StyledSection from "./StyledSection"
import VARS from '../vars';
import H1 from "./H1";
import ProjectGrid from "./ProjectGrid";
import projectItems from "./projectItems";
import ProjectCard from "./ProjectCard";

const Portfolio = (props) => {

    const { ids } = VARS
    const { activeSection, observer } = props
    const porfolioSection = useRef()
    const [viewMode, setViewMode] = useState("grid")

    useEffect(() => {
        observer.observe(porfolioSection.current)
    }, [activeSection])

    const viewToGridBtn = useRef()
    const viewToCompactBtn = useRef()
    const viewToCarouselBtn = useRef()

    const setViewToGrid = (e) => {
        e.preventDefault()
        setViewMode(() => "grid")
    }

    const setViewToCompact = (e) => {
        e.preventDefault()
        setViewMode(() => "compact")
    }

    const setViewToCarousel = (e) => {
        e.preventDefault()
        setViewMode(() => "carousel")
    }

    const gridItems = projectItems.map((item, index) => <ProjectCard key={index} projectItem={item} />)

    return (
        <StyledSection activeSection={activeSection} id={`${ids.portfolioSec}`} className="min-h-screen" ref={porfolioSection} >
            <H1>Porfolio</H1>
            <div>
                <span className={viewMode === "grid" && ""} ref={viewToGridBtn} onClick={setViewToGrid}>grid</span>
                <span ref={viewToCompactBtn} onClick={setViewToCompact}>compact</span>
                <span ref={viewToCarouselBtn} onClick={setViewToCarousel}>carousel</span>
            </div>
            {viewMode === "grid" && <ProjectGrid gridItems={gridItems} />}
            {viewMode === "compact" && <ProjectGrid gridItems={gridItems} />}
            {viewMode === "carousel" && <ProjectGrid gridItems={gridItems} />}
        </StyledSection >
    )
}

export default Portfolio
