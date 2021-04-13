import React from 'react' // , {useRef}
import {Input, SearchContainer} from './styles'

const Search = ({filterBooks}) => {
  // const inputEl = useRef(null)

  const handleChange = (event) => {
    filterBooks(event.target.value)
  }

  return (
    <SearchContainer>
      <Input
        // ref={inputEl}
        type="text"
        name="search"
        onChange={handleChange}
        autoComplete="off"
      />
    </SearchContainer>
  )
}

export default Search
