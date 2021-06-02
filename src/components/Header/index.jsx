import React from 'react'
import {HeaderContainer, Logo} from './styles'

const Header = ({children, toggleShowFaves, showFaves}) => (
  <HeaderContainer>
    <a href="/">
      <Logo title="Book Club logo" />
    </a>
    <button onClick={toggleShowFaves}>{showFaves ? 'Hide faves' : 'Show faves'}</button>
    {children}
  </HeaderContainer>
)

export default Header
