import styled from 'styled-components'
import {ReactComponent as LogoAsset} from '../../assets/logo.svg'

export const HeaderContainer = styled.header`
  background: #ffbccc;
  padding: 20px 40px;
  border-bottom: 2px solid black;
  position: fixed;
  z-index: 3;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  top: 0;

  @media (max-width: 1000px) {
    padding: 20px;
  }
`

export const Logo = styled(LogoAsset)`
  height: 40px;
  width: 270px;
  display: block;

  @media (max-width: 1000px) {
    height: 33px;
    width: 222px;
  }
`
