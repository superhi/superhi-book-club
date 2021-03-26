import styled from 'styled-components'
import {ReactComponent as CloseIcon} from '../../assets/close-button.svg'
import {BookCover} from '../../styles'

export const Panel = styled.div`
  background-color: #ffe581;
  border-left: 3px solid;
  height: 100vh;
  width: 600px;
  position: fixed;
  z-index: 1;
  right: 0;
  top: 83px;
  padding: 90px 60px;
`

export const CloseButton = styled(CloseIcon)`
  position: fixed;
  height: 44px;
  right: 44px;
  top: 124px;
  cursor: pointer;
`

export const FeaturedBookCover = styled(BookCover)`
  width: 426px;
  height: 572px;
`
