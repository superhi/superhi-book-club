import styled from 'styled-components'
import {ReactComponent as MagnifyingIcon} from '../../assets/search.svg'
import {Pill} from '../../styles'

export const SearchContainer = styled(Pill)`
  /* transition: 0.3s; */
  width: ${({$showOnDesktop}) => ($showOnDesktop ? '420px' : '20px')};

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
