import React from 'react'
import {HeaderContainer, Logo} from './styles'
import {H1} from '../../styles'

const Header = () => (
  <HeaderContainer>
    <H1>
      <a href="/">
        <Logo alt="Graphic logo for SuperHi's Book Club" className="logo" />
      </a>
    </H1>
  </HeaderContainer>
)

export default Header
