import styled from "styled-components"

const StyledSection = styled.section(({ activeSection, theme }) => theme.section.bgrColor[activeSection])

export default StyledSection
