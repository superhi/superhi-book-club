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
  margin: 0;

  @media (max-width: 800px) {
    font-size: 32px;
  }
`

export const ItalicP = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-style: italic;
  font-size: 16px;
  margin: 8px 0;
`

export const P = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-size: 16px;
  line-height: 1.6;
`

export const BookCover = styled.img`
  filter: grayscale(100%);
  border: 2px solid black;
  object-fit: cover;
  cursor: pointer;
  aspect-ratio: 3 / 4;
  width: 100%;
`
