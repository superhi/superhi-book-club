import styled, {createGlobalStyle} from 'styled-components'
import {ReactComponent as CloseIcon} from './assets/close-button.svg'

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
`

export const ItalicP = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-style: italic;
  font-size: 16px;
`

export const P = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-size: 16px;
`

export const BookCover = styled.img`
  filter: grayscale(100%);
  border: 2px solid black;
  object-fit: cover;
  width: 300px;
  height: 417px;
  cursor: pointer;
`

export const CloseButton = styled(CloseIcon)`
  height: 44px;
  right: 44px;
  cursor: pointer;
`
