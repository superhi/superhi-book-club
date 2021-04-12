import React from 'react'
import {HeaderContainer, Logo} from './styles'
import {H1} from '../../styles'

const Header = ({children}) => (
  <HeaderContainer>
    <H1>
      <a href="/">
        <Logo alt="Graphic logo for SuperHi's Book Club" />
      </a>
    </H1>
    {children}
  </HeaderContainer>
)

export default Header
