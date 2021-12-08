import styled from "styled-components"

const StyledLogoWrap = styled.div(({ activeSection, theme }) => theme.header.logoWrap[activeSection])

export default StyledLogoWrap
