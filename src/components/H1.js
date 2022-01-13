import styled from "styled-components"

const H1 = styled.h1(({ display, activeSection, theme }) => `
text-align: center;
font-size: 10vw;
padding-bottom: 2rem;
line-height: 1.2;
font-family: 'Lato', sans-serif;
font-weight: 100;
${display ? "display: " + display : ""}
`)

export default H1
