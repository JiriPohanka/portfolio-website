import styled from "styled-components"

const StyledSection = styled.section(({ activeSection, theme }) =>
    `position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    background-color: ${theme.section.bgrColor};
    color: ${theme.section.fontColPrimary};
`)

export default StyledSection
