import styled from "styled-components"
import navItems from './navItems'
import StyledLogoWrap from './StyledLogoWrap'
import StyledToggleWrap from './StyledToggleWrap'
import Nav from './Nav'
import NightModeButton from "./NightModeButton"

const HeaderWrap = styled.header(({ activeSection, theme }) => theme.header.wrap[activeSection])

const Header = (props) => {
    const { activeSection, setActiveSection } = props
    const { darkMode, setDarkMode } = props

    return (
        <HeaderWrap activeSection={activeSection}>
            <StyledLogoWrap activeSection={activeSection}>
                jiripohanka
            </StyledLogoWrap>
            <Nav activeSection={activeSection} setActiveSection={setActiveSection} children={navItems} />
            <StyledToggleWrap activeSection={activeSection}>
                <NightModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
            </StyledToggleWrap>
        </HeaderWrap>
    )
}


export default Header
