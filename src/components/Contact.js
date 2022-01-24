import { useRef, useEffect, useContext } from "react"
import { ThemeContext } from 'styled-components'
import StyledSection from "./StyledSection"
import VARS from '../vars';
import { ReactComponent as GithubIcon } from '../svg/github-black.svg';
import { ReactComponent as LinkedinIcon } from '../svg/linkedin-black.svg';
import H2 from "./H2";
import NextSecArrow from "./NextSecArrow";

const Contact = (props) => {

    const { ids } = VARS
    const { activeSection, observer } = props
    const contactSection = useRef()
    const theme = useContext(ThemeContext)

    useEffect(() => {
        observer.observe(contactSection.current)
    }, [activeSection, observer])

    return (
        <StyledSection activeSection={activeSection} ref={contactSection} id={`${ids.contactSec}`} className='h-screen'>
            <H2>Contact me</H2>
            <div className="flex justify-center text-center max-w-55 leading-relaxed mb-4">
                <p>Looking for an aspiring front-end developer? Check out what I'm up to on my github and hit me up on linkedin.</p>
            </div>
            <div className="flex mt-2">
                <a className="transform transition-all duration-5OO hover:-translate-y-2" href="https://github.com/jiripohanka" target="_blank" rel="noopener noreferrer">
                    <GithubIcon fill={theme.section.fontColPrimary} />
                </a>
                <a className="transform transition-all duration-5OO hover:-translate-y-2" href="https://www.linkedin.com/in/jiripohanka/" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon fill={theme.section.fontColPrimary} />
                </a>
            </div>
            <div className='absolute bottom-5'>
                <NextSecArrow direction="up" link={ids.welcomeSec} />
            </div>
        </StyledSection >
    )
}

export default Contact
