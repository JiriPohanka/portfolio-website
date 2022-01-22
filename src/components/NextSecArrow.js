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
    ${direction === "down" && "transform: rotate(-90deg);"}
    `)

const NextSecArrow = ({ direction, link }) => {

    return (
        <div className="flex flex-col animate-bounce">
            {/* <ArrowSpan className="left-0.5 top-2">
                -
            </ArrowSpan> */}
            <AnchorLink href={"#" + link}>
                <ArrowSpan direction={direction}>
                    &lt;
                </ArrowSpan>
            </AnchorLink>
        </div>
    )
}

export default NextSecArrow
