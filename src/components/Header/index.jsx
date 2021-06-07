import React from 'react'
import {HeaderContainer, Logo, Right, FaveButtonContainer, Counter} from './styles'
import {Button} from '../../styles'

const FaveButton = ({faveBooksLength, toggleShowFaves, showFaves}) => (
  <FaveButtonContainer>
    <Counter>{faveBooksLength}</Counter>
    <Button onClick={toggleShowFaves} $isHeader={true}>
      {showFaves ? 'Hide faves' : 'Show faves'}
    </Button>
  </FaveButtonContainer>
)

const Header = ({children, toggleShowFaves, showFaves, faveBooksLength}) => (
  <HeaderContainer>
    <a href="/">
      <Logo title="Book Club logo" />
    </a>
    <Right>
      <FaveButton
        toggleShowFaves={toggleShowFaves}
        showFaves={showFaves}
        faveBooksLength={faveBooksLength}
      />
      {children}
    </Right>
  </HeaderContainer>
)

export default Header
