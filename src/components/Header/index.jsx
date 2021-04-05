import React from 'react'
import Search from '../Search'
import {HeaderContainer, Logo} from './styles'
import {H1} from '../../styles'

const Header = ({handleSearchTerm, clearSearch, searchTerm}) => (
  <HeaderContainer>
    <H1>
      <a href="/">
        <Logo alt="Graphic logo for SuperHi's Book Club" />
      </a>
    </H1>
    <Search handleSearchTerm={handleSearchTerm} clearSearch={clearSearch} searchTerm={searchTerm} />
  </HeaderContainer>
)

export default Header
