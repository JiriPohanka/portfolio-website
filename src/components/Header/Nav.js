import AnchorLink from 'react-anchor-link-smooth-scroll'
import tw from 'twin.macro'
import styled from "styled-components"
import theme from "../../theme"

const { bgrColor } = theme.header.nav

const Nav = (props) => {
    const { className, children, activeSection, setActiveSection } = props

    const content =
        <ul className='flex m-auto'>
            {children.map((item, index) =>
                <li key={index} className={`p-4 hover:bg-gray-100 ${activeSection === index && bgrColor[activeSection]}`}>
                    <AnchorLink offset='56' href={item.link} onClick={() => setActiveSection(index)}>
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

const StyledNav = styled(Nav)`
${tw``}
`

export default StyledNav
