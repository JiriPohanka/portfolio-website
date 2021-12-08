import { useRef, useEffect } from 'react';
import StyledSection from './StyledSection';
import VARS from '../vars';
// import theme from '../theme'

const Welcome = (props) => {

    const { ids } = VARS
    // const { welcome } = theme.sections //individual settings through theme.js

    const { activeSection, observer } = props
    const welcomeSection = useRef()

    useEffect(() => {
        observer.observe(welcomeSection.current)
    }, [activeSection])


    return (
        <StyledSection activeSection={activeSection} ref={welcomeSection} id={`${ids.welcomeSec}`} className="h-screen py-14 -mt-14">
            <h1>Welcome</h1>
        </StyledSection >
    )
}

export default Welcome
