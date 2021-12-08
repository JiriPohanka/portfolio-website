import styled from "styled-components"

const StyledToggleWrap = styled.div(({ activeSection, theme }) => theme.header.toggleWrap[activeSection])

export default StyledToggleWrap
