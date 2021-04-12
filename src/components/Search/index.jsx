import React, {useState, useRef} from 'react'
import {Input, SearchContainer, Icon, CloseButton, Wrapper} from './styles'

const Search = ({filterBooks}) => {
  // we're using a ref here so we can use the input as an uncontrolled component but
  // still be able to clear the search box when they click the x
  const inputEl = useRef(null)
  const [showOnDesktop, setShowOnDesktop] = useState(false)

  const handleChange = (event) => {
    filterBooks(event.target.value)
  }

  const showSearch = () => {
    setShowOnDesktop(true)
  }

  const clearSearch = () => {
    filterBooks('')
    setShowOnDesktop(false)
    inputEl.current.value = ''
  }

  return (
    <Wrapper>
      <SearchContainer $showOnDesktop={showOnDesktop}>
        <Icon onClick={showSearch} />
        <Input ref={inputEl} type="text" name="search" onChange={handleChange} autoComplete="off" />
        <CloseButton onClick={clearSearch} />
      </SearchContainer>
    </Wrapper>
  )
}

export default Search
