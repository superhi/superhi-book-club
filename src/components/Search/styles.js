import styled from 'styled-components'
import {ReactComponent as MagnifyingIcon} from '../../assets/search.svg'
import {ReactComponent as CloseIcon} from '../../assets/icon-exit.svg'

export const SearchContainer = styled.div`
  border: 2px solid black;
  border-radius: 30px;
  height: 20px;
  background: #a7e1f8;
  padding: 8px;
  right: 0;
  position: absolute;
  margin-right: 22px;
  display: flex;
  align-items: center;
  transition: 0.3s;
`

export const Input = styled.input`
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  width: 80%;
  background: inherit;
  border: none;
  padding: 6px;
`

export const Icon = styled(MagnifyingIcon)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`

export const CloseButton = styled(CloseIcon)`
  right: 16px;
  position: absolute;
  cursor: pointer;
`

export const IconContainer = styled.div``
