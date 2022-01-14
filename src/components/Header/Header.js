import styled from "styled-components"
import navItems from './navItems'
import StyledLogoWrap from './StyledLogoWrap'
import StyledToggleWrap from './StyledToggleWrap'
import Nav from './Nav'
import NightModeButton from "./NightModeButton"

const HeaderWrap = styled.header(({ className, activeSection, theme }) =>
    `color: black;
    `
)

// theme.header.wrap)

const Header = (props) => {
    const { activeSection, setActiveSection } = props
    const { darkMode, setDarkMode } = props

    return (
        <HeaderWrap className="flex sticky top-0 z-20 backdrop-filter backdrop-blur" activeSection={activeSection}>
            <StyledLogoWrap className="flex w-2/5 p-4 mr-auto" activeSection={activeSection}>
                jiripohanka
            </StyledLogoWrap>
            <Nav activeSection={activeSection} setActiveSection={setActiveSection} children={navItems} />
            <StyledToggleWrap className="flex w-2/5 p-4 ml-auto" activeSection={activeSection}>
                <NightModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
            </StyledToggleWrap>
        </HeaderWrap>
    )
}


export default Header
