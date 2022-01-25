import { useEffect, useRef } from "react";
import StyledSection from "./StyledSection";
import VARS from '../vars';
import H2 from "./H2";
import ProjectGrid from "./ProjectGrid";
import projectItems from "./projectItems";
import ProjectCardFull from "./ProjectCardFull";
// import NextSecArrow from "./NextSecArrow";
import ProjectCarousel from "./ProjectCarousel";
import P from "./P";

const Portfolio = (props) => {

    const { ids } = VARS
    const { activeSection, observer } = props
    const { mobileOn } = props
    const porfolioSection = useRef()

    useEffect(() => {
        observer.observe(porfolioSection.current)
    }, [activeSection, observer])

    const projectElements = <>{
        projectItems.map((item, index) => <ProjectCardFull key={index} mobileOn={mobileOn} projectItem={item} />)}
    </>

    const fullGrid = <ProjectGrid gridItems={projectElements} />
    const mobileCarousel = <ProjectCarousel items={projectItems} />

    return (
        <StyledSection activeSection={activeSection} id={`${ids.portfolioSec}`} className="min-h-screen" ref={porfolioSection} >
            <H2>Porfolio</H2>
            <div className="flex justify-center text-center max-w-80 mb-4">
                <P>I've only included projects that I consider at least somewhat presentable. During my learning journey so far, I've worked on many more apps and projects but usually didn't feel the need to finish them as it would simply be a waste of time.</P>
            </div>
            <div className="max-w-80 w-full">
                {mobileOn ? mobileCarousel : fullGrid}
            </div>
            {/* <div className='pt-12'>
                <NextSecArrow direction="down" link={ids.contactSec} />
            </div> */}
        </StyledSection >
    )
}

export default Portfolio
