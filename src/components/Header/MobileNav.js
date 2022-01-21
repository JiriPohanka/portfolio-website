import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import StyledToggleWrap from './StyledToggleWrap'
import NightModeButton from './NightModeButton'

const MobileNav = (props) => {
    const { showMenu, setShowMenu, children, activeSection, darkMode, setDarkMode } = props

    const theme = useContext(ThemeContext)

    const closeNav = () => {
        setShowMenu(() => false)
    }

    const content =
        <div className={`${showMenu ? "animate-fadeIn-500" : "animate-fadeOut-500"} transition-opacity duration-500ms ease-in absolute w-screen h-screen flex flex-col bg-gray-200 ${showMenu}`}>
            <button onClick={closeNav}>close</button>
            <ul className='w-screen h-screen flex m-auto sm:flex flex-col'>
                {children.map((item, index) =>
                    <li key={index} className={`${activeSection === index ? theme.header.nav.bgrColorActive[activeSection] : theme.header.nav.bgrColor}`}>
                        <AnchorLink offset='56' href={item.link} onClick={closeNav}>
                            {item.title}
                        </AnchorLink>
                    </li>
                )
                }
            </ul>
            <StyledToggleWrap className="flex w-2/5 p-4 ml-auto" activeSection={activeSection}>
                <NightModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
            </StyledToggleWrap>
        </div>

    return (
        <>
            {content}
        </>
    )
}

export default MobileNav
