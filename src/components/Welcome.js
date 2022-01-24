import { useRef, useEffect } from 'react';
import StyledSection from './StyledSection';
import VARS from '../vars';
import H1 from './H1';
import TxtType from './TxtType';
import NextSecArrow from './NextSecArrow';
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
        <StyledSection activeSection={activeSection} ref={welcomeSection} id={`${ids.welcomeSec}`} className="h-screen py-14 -mt-14">
            <div className="flex justify-center items-center w-full h-full">
                <H1 className="justify-center items-center" display="flex" ref={typeEl}>
                    <span className='wrap absolute max-w-55' ref={spanEl}></span>
                </H1>
            </div>
            <div className='absolute bottom-10'>
                <NextSecArrow direction="down" link={ids.techStackSec} />
            </div>
        </StyledSection >
    )
}

export default Welcome
