import React from 'react'
import {HeaderContainer, Logo, Right} from './styles'
import {Button} from '../../styles'

const Header = ({children, toggleShowFaves, showFaves}) => (
  <HeaderContainer>
    <a href="/">
      <Logo title="Book Club logo" />
    </a>
    <Right>
      <Button onClick={toggleShowFaves} $isHeader={true}>
        {showFaves ? 'Hide faves' : 'Show faves'}
      </Button>
      {children}
    </Right>
  </HeaderContainer>
)

export default Header
