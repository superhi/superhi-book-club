import React, {useState, useRef} from 'react'
import {Input, SearchContainer, Icon, Wrapper} from './styles'
import {Close, Button, Pill} from '../../styles'

const Search = ({filterBooks, updateBookState, savedBooks}) => {
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
      <Button $isHeader={true} onClick={() => updateBookState(false)}>
        View all books
      </Button>
      <Pill>{savedBooks.length}</Pill>
      <Button $isHeader={true} onClick={() => updateBookState(true)}>
        Saved books
      </Button>
      <SearchContainer $showOnDesktop={showOnDesktop}>
        <Icon onClick={showSearch} />
        <Input ref={inputEl} type="text" name="search" onChange={handleChange} autoComplete="off" />
        <Close onClick={clearSearch} />
      </SearchContainer>
    </Wrapper>
  )
}

export default Search
