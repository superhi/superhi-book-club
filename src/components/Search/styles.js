import styled from 'styled-components'
import {ReactComponent as MagnifyingIcon} from '../../assets/search.svg'
import {Pill} from '../../styles'

export const Wrapper = styled.div`
  @media (max-width: 800px) {
    border-top: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffbccc;
    height: 64px;
    width: 100vw;
    left: 0;
    bottom: 0;
    position: fixed;
    z-index: 2;
  }
`

export const SearchContainer = styled(Pill)`
  width: ${({$showOnDesktop}) => ($showOnDesktop ? '420px' : '20px')};

  input,
  button {
    display: ${({$showOnDesktop}) => ($showOnDesktop ? 'block' : 'none')};

    @media (max-width: 800px) {
      display: block;
    }
  }

  @media (max-width: 800px) {
    width: 85%;
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
