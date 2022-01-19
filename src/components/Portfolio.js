import { useEffect, useRef, useState } from "react"
import StyledSection from "./StyledSection"
import VARS from '../vars';
import H2 from "./H2";
import ProjectGrid from "./ProjectGrid";
import projectItems from "./projectItems";
import ProjectCard from "./ProjectCard";

const Portfolio = (props) => {

    const { ids } = VARS
    const { activeSection, observer } = props
    const porfolioSection = useRef()

    useEffect(() => {
        observer.observe(porfolioSection.current)
    }, [activeSection])



    const gridItems = projectItems.map((item, index) => <a href={item.link} target="_blank" rel="noopener noreferrer"><ProjectCard key={index} projectItem={item} /></a>)

    return (
        <StyledSection activeSection={activeSection} id={`${ids.portfolioSec}`} className="min-h-screen" ref={porfolioSection} >
            <H2>Porfolio</H2>
            <div className="flex justify-center text-center max-w-80 leading-relaxed mb-4">
                <p>I've only included projects that I consider at least somewhat presentable. During my learning journey so far, I've worked on many more apps and projects but usually didn't feel the need to finish them as it would simply be a waste of time.</p>
            </div>
            <div className="max-w-80">
                <ProjectGrid gridItems={gridItems} />
            </div>
        </StyledSection >
    )
}

export default Portfolio
