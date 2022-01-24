import styled from "styled-components"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const ArrowSpan = styled.span(({ direction }) =>
    `font-size: 4rem;
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    display: block;
    line-height: 0;
    padding: 1rem;
    position: relative;
    text-align: center;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 500ms;
    ${direction === "down" ? "transform: rotate(-90deg);" : ""}
    ${direction === "up" ? "transform: rotate(90deg);" : ""}
    &:hover {
        opacity: 1;
    }
    `)

const NextSecArrow = ({ direction, link }) => {

    return (
        <div className="flex flex-col animate-bounce">
            <AnchorLink href={"#" + link}>
                <ArrowSpan direction={direction}>
                    &lt;
                </ArrowSpan>
            </AnchorLink>
        </div>
    )
}

export default NextSecArrow
