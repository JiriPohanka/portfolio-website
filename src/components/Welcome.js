import { useRef, useEffect } from 'react';
import StyledSection from './StyledSection';
import VARS from '../vars';
import H1 from './H1';
import DottedArrow from './DottedArrow';
import TxtType from './TxtType';
// import TypedText from './TypedText';

const Welcome = ({ activeSection, observer }) => {

    const { ids } = VARS
    const welcomeSection = useRef()
    const typeEl = useRef()
    const spanEl = useRef()

    useEffect(() => {
        observer.observe(welcomeSection.current)
    }, [activeSection])


    const toRotate = ["...",
        "Hello World",
        "Jiri here",
        "This Is My Portfolio Website",
        "I Like JS",
        "I Enjoy React",
        "I like turtles"].map(el => el.toUpperCase())

    // window.onload = function () {
    //     // new TxtType(typeEl.current, toRotate, 2000);
    //     new TxtType(spanEl.current, toRotate, 2000);
    // }

    useEffect(() => {
        new TxtType(spanEl.current, toRotate, 2000);
    }, [])

    return (
        <StyledSection activeSection={activeSection} ref={welcomeSection} id={`${ids.welcomeSec}`} className="min-h-screen py-14 -mt-14">
            <div className="flex justify-center max-w-50">
                <H1 display="inline-block" ref={typeEl}>
                    {/* <TypedText textArr={toRotate} /> */}
                    <span className='wrap' ref={spanEl}></span>
                </H1>
                {/* <span className='wrap animate-blink' /> */}
            </div>
            <div className='absolute bottom-10'>
                <DottedArrow direction="down" />
            </div>
        </StyledSection >
    )
}

export default Welcome
