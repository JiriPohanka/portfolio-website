import { useRef, useEffect } from "react"
import StyledSection from "./StyledSection"
import VARS from '../vars';
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
            <h1>Contact me</h1>
        </StyledSection >
    )
}

export default Contact
