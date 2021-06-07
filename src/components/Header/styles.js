import styled from 'styled-components'
import {ReactComponent as LogoAsset} from '../../assets/logo.svg'
import {Pill} from '../../styles'

export const HeaderContainer = styled.header`
  background: #ffbccc;
  padding: 20px 40px;
  border-bottom: 2px solid black;
  position: fixed;
  z-index: 2;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    padding: 20px;
  }
`

export const Logo = styled(LogoAsset)`
  height: 40px;
  width: 270px;
  display: block;

  @media (max-width: 800px) {
    height: 33px;
    width: 200px;
  }
`

export const Right = styled.div`
  right: 0;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

export const FaveButtonContainer = styled.div`
  display: flex;
`

export const Counter = styled(Pill)`
  position: relative;
  right: -150px;
  bottom: 10px;
  padding: 4px;
`
