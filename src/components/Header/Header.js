import styled from "styled-components"
import { useState, useEffect } from "react"
import navItems from './navItems'
import StyledLogoWrap from './StyledLogoWrap'
import StyledToggleWrap from './StyledToggleWrap'
import Nav from './Nav'
import MobileNav from "./MobileNav"
import NightModeButton from "./NightModeButton"
import useDelayUnmount from "../../hooks/useDelayUnmount"

const HeaderWrap = styled.header(({ className, activeSection, theme }) =>
    `color: black;
    `
)

const Header = (props) => {
    const { activeSection, setActiveSection } = props
    const { darkMode, setDarkMode } = props
    const [yIndex, setYIndex] = useState(window.scrollY || window.pageYOffset)
    const [isVisible, setIsVisible] = useState(true)
    const [mobileOn, setMobileOn] = useState(window.innerWidth < 768)
    const [showMenu, setShowMenu] = useState(false)
    const shouldRender = useDelayUnmount(showMenu, 600)

    // cancel scroll when mobileNav is visible
    useEffect(() => {
        const html = document.querySelector('html')

        if (showMenu) {
            html.style.overflow = 'hidden'
        } else {
            html.style.overflow = 'scroll'
        }
    })

    // header hiding/coming back on scroll down/up
    useEffect(() => {
        const timeInt = setInterval(() => {
            let newYIndex = window.scrollY || window.pageYOffset
            // console.log(newYIndex)
            if (newYIndex < yIndex && !isVisible && yIndex - newYIndex > 100) {
                setIsVisible(() => true)
            }
            if (newYIndex > yIndex && isVisible && newYIndex - yIndex > 30) {
                setIsVisible(() => false)
            }

            setYIndex(() => newYIndex)
        }, 250)
        return () => window.clearInterval(timeInt)
    })

    // watch if size screen is smaller than 768px width
    useEffect(() => {
        window.addEventListener('resize', () => setMobileOn(() => window.innerWidth < 768))
    })

    const handleClick = (e) => {
        setShowMenu(() => true)
    }

    const fullHeader =
        <HeaderWrap className={`${isVisible ? "animate-fadeIn-500" : "animate-fadeOut-500"} flex sticky top-0 z-20 backdrop-filter backdrop-blur`} activeSection={activeSection}>
            <StyledLogoWrap className="flex w-2/5 p-4 mr-auto" activeSection={activeSection}>
                jiripohanka
            </StyledLogoWrap>
            <Nav activeSection={activeSection} setActiveSection={setActiveSection} children={navItems} />
            <StyledToggleWrap className="flex w-2/5 p-4 ml-auto" activeSection={activeSection}>
                <NightModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
            </StyledToggleWrap>
        </HeaderWrap>

    const mobileHeader =
        <HeaderWrap className={`${isVisible ? " animate-fadeIn-500" : "animate - fadeOut - 500"} flex sticky top-0 z-20 backdrop-filter backdrop-blur`} activeSection={activeSection}>
            <StyledLogoWrap className="flex w-3/5 p-4 mr-auto" activeSection={activeSection}>
                jiripohanka
            </StyledLogoWrap>
            <StyledToggleWrap className="flex w-2/5 p-4 ml-auto" activeSection={activeSection}>
                <button className="ml-auto" onClick={handleClick}>burger</button>
            </StyledToggleWrap>

            {shouldRender &&
                <>
                    <MobileNav activeSection={activeSection} setActiveSection={setActiveSection} children={navItems} showMenu={showMenu} setShowMenu={setShowMenu} darkMode={darkMode} setDarkMode={setDarkMode} />
                </>}
        </HeaderWrap>

    return (
        mobileOn ? mobileHeader : fullHeader
    )
}

export default Header
