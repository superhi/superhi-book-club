import styled from 'styled-components'
import {ReactComponent as LogoAsset} from '../../assets/logo.svg'

export const HeaderContainer = styled.header`
  background: #ffbccc;
  padding: 20px;
  border-bottom: 2px solid black;
  position: fixed;
  z-index: 2;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
  align-items: center;
`

export const Logo = styled(LogoAsset)`
  height: 40px;
  width: 270px;
  display: block;
  left: 0;
`
