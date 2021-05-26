import React from 'react'
import {HeaderContainer, Logo, Right} from './styles'

const Header = ({children}) => (
  <HeaderContainer>
    <a href="/">
      <Logo title="Book Club logo" />
    </a>
    <Right>{children}</Right>
  </HeaderContainer>
)

export default Header
