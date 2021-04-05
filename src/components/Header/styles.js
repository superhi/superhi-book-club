import styled, {css} from 'styled-components'
import {ReactComponent as LogoAsset} from '../../assets/logo.svg'
import {ReactComponent as SearchIcon} from '../../assets/search.svg'

export const HeaderContainer = styled.header`
  background: #ffbccc;
  padding: 20px;
  border-bottom: 2px solid black;
  position: fixed;
  z-index: 1;
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

export const RightAligned = css`
  right: 20px;
  position: absolute;
`

export const Circle = styled.div`
  /* @keyframes expand {
    0% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(10);
    }
  }

  animation: 3s ease-in 1s infinite reverse move; */
  border-radius: 100px;
  border: 2px solid black;
  width: 40px;
  height: 40px;
  ${RightAligned}
`

export const SearchButton = styled(SearchIcon)`
  @keyframes expand {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  animation: 3s ease-in 1s infinite reverse move;
  ${RightAligned}
  right: 30px;
`
