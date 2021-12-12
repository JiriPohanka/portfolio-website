import styled from "styled-components"

const StyledToggleWrap = styled.div(({ activeSection, theme }) => theme.header.wrap.toggleWrap[activeSection])

export default StyledToggleWrap
