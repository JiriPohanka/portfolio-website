import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const MobileNav = (props) => {
    const { showMenu, setShowMenu, children, activeSection } = props



    const theme = useContext(ThemeContext)

    const closeNav = () => {
        setShowMenu(() => false)
    }

    const content =
        <div className={`${showMenu ? "opacity-1" : "opacity-0"} transition-opacity duration-500ms ease-in absolute w-screen h-screen flex flex-col bg-gray-200 ${showMenu}`}>
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
        </div>

    return (
        <>
            {content}
        </>
    )
}

export default MobileNav
