import React from 'react'

const Search = (props) => {
  const handleChange = (event) => {
    props.handleSearchTerm(event.target.value)
  }

  return (
    <div id="search">
      <label>Search by author or title</label>
      <br />
      <input type="text" name="search" value={props.searchTerm} onChange={handleChange} />
    </div>
  )
}

export default Search
