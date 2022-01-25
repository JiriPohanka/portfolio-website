import styled from "styled-components"
import { useState, useEffect, useContext } from "react"
import navItems from './navItems'
import StyledLogoWrap from './StyledLogoWrap'
import StyledToggleWrap from './StyledToggleWrap'
import Nav from './Nav'
import MobileNav from "./MobileNav"
import NightModeButton from "./NightModeButton"
import useDelayUnmount from "../../hooks/useDelayUnmount"
import BurgerMenuIcon from "./BurgerMenuIcon"
import { ThemeContext } from "styled-components"

const HeaderWrap = styled.header(({ className, activeSection, theme }) =>
    `color: ${theme.header.fontColor.primary}
    `
)

const Header = (props) => {
    const { activeSection } = props
    const { darkMode, setDarkMode } = props
    const { mobileOn } = props
    // const mobileOn = useContext(MobContext)
    const [yIndex, setYIndex] = useState(window.scrollY || window.pageYOffset)
    const [isVisible, setIsVisible] = useState(true)
    const [showMenu, setShowMenu] = useState(false)
    const shouldRender = useDelayUnmount(showMenu, 600)
    const theme = useContext(ThemeContext)

    // cancel scroll when mobileNav is visible
    useEffect(() => {
        const html = document.querySelector('html')

        if (showMenu) {
            html.style.overflowY = 'hidden'
        } else {
            html.style.overflowY = 'scroll'
        }
    })

    // header hiding/coming back on scroll down/up
    useEffect(() => {
        const timeInt = setInterval(() => {
            let newYIndex = window.scrollY || window.pageYOffset

            // always show header on top of page (scroll)
            if (newYIndex === 0 && !isVisible) {
                setIsVisible(() => true)
            }

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

    const handleClick = (e) => {
        setShowMenu(() => true)
    }

    const fullHeader =
        <HeaderWrap className={`top-0 transition transform ${isVisible ? "animate-fadeIn-500" : "animate-fadeOut-500 -translate-y-full"} flex sticky z-20 backdrop-filter backdrop-blur`} activeSection={activeSection}>
            <StyledLogoWrap className="flex w-2/5 p-4 mr-auto">
                jiripohanka
            </StyledLogoWrap>
            <Nav activeSection={activeSection} children={navItems} />
            <StyledToggleWrap className="flex w-2/5 p-4 ml-auto">
                <NightModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
            </StyledToggleWrap>
        </HeaderWrap>

    const mobileHeader =
        <HeaderWrap className={`top-0 transition transform ${isVisible ? " animate-fadeIn-500" : "animate-fadeOut-500 -translate-y-full"} flex sticky z-20 backdrop-filter backdrop-blur`} activeSection={activeSection}>
            <StyledLogoWrap className="flex w-3/5 p-4 mr-auto">
                jiripohanka
            </StyledLogoWrap>
            <StyledToggleWrap className="flex w-2/5 p-4 ml-auto" activeSection={activeSection}>
                <NightModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
                <button className="px-4" onClick={handleClick}>
                    <BurgerMenuIcon fill={theme.header.fontColor.primary} />
                </button>
            </StyledToggleWrap>

            {shouldRender &&
                <>
                    <MobileNav activeSection={activeSection} children={navItems} showMenu={showMenu} setShowMenu={setShowMenu} darkMode={darkMode} setDarkMode={setDarkMode} />
                </>}
        </HeaderWrap>

    return (
        mobileOn ? mobileHeader : fullHeader
    )
}

export default Header
