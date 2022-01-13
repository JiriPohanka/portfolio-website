import styled from "styled-components"

const DottedArrow = (props) => {

    const { direction } = props

    const ArrowSpan = styled.span`
    font-size: 4rem;
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    display: block;
    line-height: 0;
    padding: 1rem;
    position: relative;
    text-align: center;
    ${direction === "down" && "transform: rotate(-90deg);"}
    `


    return (
        <div className="flex flex-col animate-bounce">
            <ArrowSpan className="left-0.5 top-2">
                -
            </ArrowSpan>
            <ArrowSpan>
                &lt;
            </ArrowSpan>
        </div>
    )
}

export default DottedArrow
