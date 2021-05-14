import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #a7e1f8;
    font-family: 'Work Sans', sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialised;
    text-rendering: optimizeLegibility;
  }
`

export const Pill = styled.div`
  border: 2px solid black;
  border-radius: 30px;
  height: 20px;
  background: #a7e1f8;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 20px;
`

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 24px;
  padding: 0;
  position: relative;
  width: 24px;

  &:before,
  &:after {
    background-color: #000;
    content: ' ';
    height: 24px;
    left: 12px;
    position: absolute;
    top: 0;
    width: 2px;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`
