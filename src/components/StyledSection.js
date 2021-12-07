import tw, { styled } from "twin.macro"
import { lightTheme, darkTheme } from "../theme"

const { bgrColor } = lightTheme.section

const StyledSection = styled.section(({ activeSection }) => bgrColor[activeSection])





export default StyledSection