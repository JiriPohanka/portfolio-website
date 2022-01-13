import { useRef, useEffect } from "react"
import StyledSection from "./StyledSection"
import VARS from '../vars';
import GithubIcon from '../svg/github-black.svg';
import LinkedinIcon from '../svg/linkedin-black.svg';
import H2 from "./H2";

// import theme from '../theme'

const Contact = (props) => {

    const { ids } = VARS
    // const { contact } = theme.sections

    const { activeSection, observer } = props
    const contactSection = useRef()

    useEffect(() => {
        observer.observe(contactSection.current)
    }, [activeSection])

    return (
        <StyledSection activeSection={activeSection} ref={contactSection} id={`${ids.contactSec}`} className='h-screen'>
            <H2>Contact me</H2>
            <div>
                <div>
                    <img src={GithubIcon} />
                </div>
                <div>
                    <img src={LinkedinIcon} />
                </div>
            </div>
        </StyledSection >
    )
}

export default Contact
