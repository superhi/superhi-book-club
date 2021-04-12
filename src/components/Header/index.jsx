import React from 'react'
import {HeaderContainer, Logo} from './styles'

const Header = ({children}) => (
  <HeaderContainer>
    <a href="/">
      <Logo alt="Graphic logo for SuperHi's Book Club" />
    </a>
    {children}
  </HeaderContainer>
)

export default Header
