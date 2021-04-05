import React from 'react'
import {Input, SearchContainer, Icon, CloseButton} from './styles'

const Search = ({searchTerm, handleSearchTerm, clearSearch}) => {
  const handleChange = (event) => {
    handleSearchTerm(event.target.value)
  }

  console.log(searchTerm)

  return (
    <SearchContainer>
      <Icon />
      <CloseButton onClick={clearSearch} />
      <Input
        type="text"
        name="search"
        value={searchTerm}
        onChange={handleChange}
        autoComplete="off"
      />
    </SearchContainer>
  )
}

export default Search
