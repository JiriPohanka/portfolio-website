import { useRef, useEffect } from "react"
import StyledSection from "./StyledSection"
import VARS from '../vars';
import GithubIcon from '../svg/github-black.svg';
import LinkedinIcon from '../svg/linkedin-black.svg';
import H2 from "./H2";
import NextSecArrow from "./NextSecArrow";

const Contact = (props) => {

    const { ids } = VARS
    const { activeSection, observer } = props
    const contactSection = useRef()

    useEffect(() => {
        observer.observe(contactSection.current)
    }, [activeSection, observer])

    return (
        <StyledSection activeSection={activeSection} ref={contactSection} id={`${ids.contactSec}`} className='h-screen'>
            <H2>Contact me</H2>
            <div>
                <div>
                    <img src={GithubIcon} alt="github icon" />
                </div>
                <div>
                    <img src={LinkedinIcon} alt="linkedin icon" />
                </div>
            </div>
            <div className='absolute bottom-5'>
                <NextSecArrow direction="up" link={ids.welcomeSec} />
            </div>
        </StyledSection >
    )
}

export default Contact
