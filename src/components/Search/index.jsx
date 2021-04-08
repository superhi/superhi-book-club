import React, {useState} from 'react'
import {Input, SearchContainer, Icon, CloseButton, Mobile, Desktop} from './styles'

const Search = ({searchTerm, handleSearchTerm}) => {
  const [searchDisplay, setSearchDisplay] = useState(false)

  const handleChange = (event) => {
    handleSearchTerm(event.target.value)
  }

  const handleClick = () => {
    setSearchDisplay((searchDisplay) => !searchDisplay)
  }

  const clearSearch = () => {
    handleSearchTerm('')
    setSearchDisplay(false)
  }

  return (
    <>
      <Desktop>
        <SearchContainer $isSearchOpen={searchDisplay}>
          <Icon onClick={handleClick} />
          {searchDisplay === true && (
            <>
              <CloseButton onClick={clearSearch} />
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
      </Desktop>

      <Mobile>
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
      </Mobile>
    </>
  )
}

export default Search
