import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Nav = (props) => {
    const { className, children, activeSection } = props

    const theme = useContext(ThemeContext)

    const content =
        <ul className='flex m-auto'>
            {children.map((item, index) =>
                <AnchorLink offset='56' href={item.link}>
                    <li key={index} className={`${activeSection === index ? theme.header.nav.bgrColorActive[activeSection] : theme.header.nav.bgrColor}`}>
                        {item.title}
                    </li>
                </AnchorLink>
            )
            }
        </ul>

    return (
        <>
            {content}
        </>
    )
}

export default Nav
