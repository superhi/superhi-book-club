import styled from 'styled-components'
import {ReactComponent as LogoAsset} from '../../assets/logo.svg'

export const HeaderContainer = styled.header`
  background: #ffbccc;
  padding: 20px;
  text-align: center;
  border-bottom: 3px solid black;
  position: fixed;
  z-index: 1;
  width: 100vw;
`

export const Logo = styled(LogoAsset)`
  height: 40px;
  width: 270px;
  display: block;
  left: 0;
`
