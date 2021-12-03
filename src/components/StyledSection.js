import tw, { styled } from "twin.macro"
import theme from "../theme"

const { bgrColor } = theme.section

const StyledSection = styled.section(({ activeSection }) => bgrColor[activeSection])





export default StyledSection