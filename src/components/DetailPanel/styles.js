import styled from 'styled-components'
import {ReactComponent as CloseIcon} from '../../assets/close-button.svg'
import {BookCover, P, ItalicP} from '../../styles'

export const Panel = styled.article`
  background-color: #ffe581;
  border: 2px solid #000;
  height: calc(100vh - 270px);
  width: 440px;
  position: fixed;
  z-index: 1;
  right: 0;
  top: 0;
  padding: 150px 60px 120px 60px;
  overflow: scroll;

  @media (max-width: 800px) {
    width: calc(100vw - 44px);
    height: calc(100vh - 200px);
    right: unset;
    padding: 120px 20px;
    z-index: 2;
  }
`

export const CloseButton = styled(CloseIcon)`
  height: 44px;
  right: 22px;
  cursor: pointer;
  position: fixed;
  top: 124px;
  z-index: 3;

  @media (max-width: 800px) {
    top: unset;
    right: 32px;
    bottom: 32px;
  }
`

export const FeaturedBookCover = styled(BookCover)`
  cursor: default;
  margin-bottom: 30px;
`

export const StyledP = styled(P)`
  margin-bottom: 30px;
`

export const Author = styled(ItalicP)`
  margin-bottom: 30px;
`

export const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 1;
`
