import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Work Sans', sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialised;
    text-rendering: optimizeLegibility;
  }
`

export const H1 = styled.h1`
  margin: 0;
`

export const H2 = styled.h2`
  font-size: 42px;
`

export const Author = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-style: italic;
`
