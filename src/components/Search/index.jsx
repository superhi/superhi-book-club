import React from 'react'
import {SearchInput} from './styles'

const Search = ({searchTerm, handleSearchTerm}) => {
  const handleChange = (event) => {
    handleSearchTerm(event.target.value)
  }

  return (
    <SearchInput
      type="text"
      name="search"
      value={searchTerm}
      onChange={handleChange}
      autoComplete="off"
    />
  )
}

export default Search
