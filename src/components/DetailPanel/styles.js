import styled from 'styled-components'
import {ReactComponent as CloseIcon} from '../../assets/close-button.svg'
import {BookCover, P} from '../../styles'

export const Panel = styled.div`
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
    padding: 100px 20px;
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
    right: 12px;
    bottom: 12px;
  }
`

export const FeaturedBookCover = styled(BookCover)`
  width: 100%;
  height: 572px;
  margin: 30px 0;
  cursor: default;

  @media (max-width: 800px) {
    height: 450px;
    width: 335px;
  }
`

export const StyledP = styled(P)`
  margin-bottom: 30px;
`
