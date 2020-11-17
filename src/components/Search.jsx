import React from 'react'

const Search = (props) => {
  const handleChange = (event) => {
    props.handleSearchTerm(event.target.value)
  }

  return (
    <section id="search">
      <label>Search by author or title</label>
      <br />
      <input type="text" name="search" value={props.searchTerm} onChange={handleChange} />
    </section>
  )
}

export default Search
