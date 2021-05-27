import styled from 'styled-components'
import {ReactComponent as MagnifyingIcon} from '../../assets/search.svg'
import {Pill} from '../../styles'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;

  @media (max-width: 1000px) {
    border-top: 2px solid black;
    background: #ffbccc;
    height: 64px;
    width: 100vw;
    left: 0;
    bottom: 0;
    position: fixed;
    z-index: 1;
  }
`

export const SearchContainer = styled(Pill)`
  transition: 300ms;
  width: ${({$showOnDesktop}) => ($showOnDesktop ? '340px' : '20px')};

  input,
  button {
    display: ${({$showOnDesktop}) => ($showOnDesktop ? 'block' : 'none')};
  }
`

export const Input = styled.input`
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  flex-grow: 1;
  background: inherit;
  border: none;
  padding: 6px;
`

export const Icon = styled(MagnifyingIcon)`
  width: 20px;
  cursor: pointer;
`

export const Nav = styled.nav`
  display: ${({$isHidden}) => ($isHidden ? 'none' : 'flex')};
  gap: 22px;
`
