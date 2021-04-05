import React from 'react'
import {Input, SearchContainer, Icon, CloseButton} from './styles'

const Search = ({searchTerm, handleSearchTerm}) => {
  const handleChange = (event) => {
    handleSearchTerm(event.target.value)
  }

  return (
    <>
      {searchTerm === '' ? (
        <>hello world</>
      ) : (
        <SearchContainer>
          <Icon />
          <CloseButton onClick={() => handleSearchTerm('')} />
          <Input
            type="text"
            name="search"
            value={searchTerm}
            onChange={handleChange}
            autoComplete="off"
          />
        </SearchContainer>
      )}
    </>
  )
}

export default Search
