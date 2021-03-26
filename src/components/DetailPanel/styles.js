import styled from 'styled-components'
import {ReactComponent as CloseIcon} from '../../assets/button-close.svg'

export const Panel = styled.div`
  background-color: #ffe581;
  border-left: 3px solid;
  height: 100vh;
  width: 600px;
  position: fixed;
  z-index: 1;
  right: 0;
  top: 101px;
  padding: 90px 60px;
`

export const CloseButton = styled(CloseIcon)`
  position: fixed;
  height: 44px;
  right: 44px;
  top: 124px;
  cursor: pointer;
`
