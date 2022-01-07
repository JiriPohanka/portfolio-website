import { useRef, useEffect, useState } from 'react';
import StyledSection from './StyledSection';
import VARS from '../vars';
import H1 from './H1';
// import theme from '../theme'

const Welcome = (props) => {

    const { ids } = VARS
    // const { welcome } = theme.sections //individual settings through theme.js

    const { activeSection, observer } = props
    const welcomeSection = useRef()

    useEffect(() => {
        observer.observe(welcomeSection.current)
    }, [activeSection])

    const div = useRef()

    return (
        <StyledSection activeSection={activeSection} ref={welcomeSection} id={`${ids.welcomeSec}`} className="min-h-screen py-14 -mt-14">
            <H1>Frontend Developer</H1>
            <div>
                javascript, git, javascript, styled components, tailwindcss, reactjs, jest
            </div>

        </StyledSection >
    )
}

export default Welcome
