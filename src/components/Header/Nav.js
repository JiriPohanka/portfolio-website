import AnchorLink from 'react-anchor-link-smooth-scroll'
import tw from 'twin.macro'
import styled from "styled-components"
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Nav = (props) => {
    const { className, children, activeSection, setActiveSection } = props

    const theme = useContext(ThemeContext)
    console.log(theme)
    console.log(activeSection)
    console.log(theme.header.nav.bgrColor[activeSection])


    const content =
        <ul className='flex m-auto'>
            {children.map((item, index) =>
                <li key={index} className={`${activeSection === index ? theme.header.nav.bgrColorActive[activeSection] : theme.header.nav.bgrColor[index]}`}>
                    <AnchorLink offset='56' href={item.link}>
                        {item.title}
                    </AnchorLink>
                </li>
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

