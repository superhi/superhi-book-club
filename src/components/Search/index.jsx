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
        <SearchContainer style={{width: searchDisplay === true ? '500px' : '20px'}}>
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
        <SearchContainer style={{width: '80%'}}>
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
