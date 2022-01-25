import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const MobileNav = (props) => {
    const { showMenu, setShowMenu, children, activeSection, darkMode, setDarkMode } = props

    const theme = useContext(ThemeContext)

    const closeNav = () => {
        setShowMenu(() => false)
    }

    const content =
        <div className={`${showMenu ? "animate-fadeIn-500" : "animate-fadeOut-500"} transition-opacity duration-500ms ease-in absolute w-screen h-screen flex text-4xl flex-col ${theme.header.mobileNav.bgrCol}`}>
            <button className="absolute p-4 right-0" onClick={closeNav}>X</button>
            <div className='w-screen h-screen flex flex-col justify-center items-center'>
                <ul className='flex m-auto flex-col'>
                    {children.map((item, index) =>
                        <li key={index} className={`m-4 ${activeSection === index ? theme.header.nav.bgrColorActive : theme.header.nav.bgrColor}`}>
                            <AnchorLink className="p-4" offset='56' href={item.link} onClick={closeNav}>
                                {item.title}
                            </AnchorLink>
                        </li>
                    )
                    }
                </ul>
            </div>
        </div>

    return (
        <>
            {content}
        </>
    )
}

export default MobileNav
