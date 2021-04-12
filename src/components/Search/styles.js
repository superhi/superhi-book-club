import styled from 'styled-components'
import {ReactComponent as MagnifyingIcon} from '../../assets/search.svg'

export const Wrapper = styled.div`
  @media (max-width: 850px) {
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

export const SearchContainer = styled.div`
  border: 2px solid black;
  border-radius: 30px;
  height: 20px;
  background: #a7e1f8;
  padding: 8px;
  display: flex;
  align-items: center;
  transition: 0.3s;
  overflow: hidden;
  width: ${({$showOnDesktop}) => ($showOnDesktop ? '500px' : '20px')};

  input,
  button {
    display: ${({$showOnDesktop}) => ($showOnDesktop ? 'block' : 'none')};

    @media (max-width: 850px) {
      display: block;
    }
  }

  @media (max-width: 850px) {
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

// same as in milky mood
export const CloseButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 24px;
  padding: 0;
  position: relative;
  width: 24px;

  &:before,
  &:after {
    background-color: #000;
    content: ' ';
    height: 25px;
    left: 12px;
    position: absolute;
    top: 0;
    width: 2px;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`
