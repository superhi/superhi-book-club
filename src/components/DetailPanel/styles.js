import styled from 'styled-components'
import {Pill} from '../../styles'

export const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 1;
`

export const Panel = styled.article`
  background-color: #ffe581;
  border-left: 2px solid #000;
  box-sizing: border-box;
  height: calc(100vh - 82px);
  width: 660px;
  position: fixed;
  z-index: 2;
  right: 0;
  bottom: 0;
  padding: 40px 120px 60px 40px;
  overflow: scroll;

  @media (max-width: 800px) {
    border-left: none;
    width: 100vw;
    height: calc(100vh - 141px);
    right: unset;
    bottom: 66px;
    padding: 20px 86px 20px 20px;
    z-index: 2;
  }
`

export const CloseWrapper = styled(Pill)`
  position: fixed;
  cursor: pointer;
  top: 120px;
  right: 40px;
  z-index: 4;

  button {
    margin-left: -3px;
  }

  @media (max-width: 800px) {
    top: 95px;
    right: 20px;
  }
`

export const P = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 30px 0 0;
`

export const Em = styled.em`
  font-weight: italic;
`
