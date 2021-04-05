import React, {useState} from 'react'
import {Input, SearchContainer, Icon, CloseButton} from './styles'

const Search = ({searchTerm, handleSearchTerm}) => {
  const [searchDisplay, setSearchDisplay] = useState(false)

  const handleChange = (event) => {
    handleSearchTerm(event.target.value)
  }

  const handleClick = () => {
    setSearchDisplay((searchDisplay) => !searchDisplay)
  }

  return (
    <>
      <SearchContainer style={{width: searchDisplay === true ? '500px' : '16px'}}>
        <Icon onClick={handleClick} />
        {searchDisplay === true && (
          <>
            <CloseButton onClick={() => handleSearchTerm('')} />
            <Input
              type="text"
              name="search"
              value={searchTerm}
              onChange={handleChange}
              autoComplete="off"
            />
          </>
        )}
      </SearchContainer>
    </>
  )
}

export default Search
