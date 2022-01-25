import styled from "styled-components"

const H2 = styled.h2(({ activeSection, theme }) => `
font-size: 1.25rem;
text-align: center;
max-width: 60vw;
padding-top: 3rem;
margin-bottom: 1rem;
font-weight: 900;
`)

export default H2