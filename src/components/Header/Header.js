import styled from "styled-components"
import navItems from './navItems'
import StyledLogoWrap from './LogoWrap'
import StyledNav from './Nav'
import NightModeWrap from './NightModeWrap'

const HeaderWrap = styled.header(({ activeSection, theme }) => theme.header.textColor[activeSection])


const Header = (props) => {
    const { activeSection, setActiveSection } = props

    return (
        <HeaderWrap activeSection={activeSection}>
            <StyledLogoWrap />
            <StyledNav activeSection={activeSection} setActiveSection={setActiveSection} children={navItems} />
            <NightModeWrap />
        </HeaderWrap>
    )
}


export default Header
