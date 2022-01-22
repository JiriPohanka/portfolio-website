import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Nav = (props) => {
    const { className, children, activeSection } = props

    const theme = useContext(ThemeContext)

    const content =
        <ul className='flex m-auto'>
            {children.map((item, index) =>
                <AnchorLink href={item.link}>
                    <li key={index} className={`p-4 transform-all duration-500 ${activeSection === index ? `${theme.header.nav.bgrColorActive} ${theme.header.fontColor.primary}` : `${theme.header.nav.bgrColor} ${theme.header.fontColor.secondary}`}`}>
                        {item.title}
                    </li>
                </AnchorLink>
            )}
        </ul>

    return (
        <>
            {content}
        </>
    )
}

export default Nav
