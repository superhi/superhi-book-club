import React from 'react'

const Search = (props) => {
  const handleChange = (event) => {
    props.handleSearchTerm(event.target.value)
  }

  return (
    <section className="search">
      <label>Search by author or title: </label>
      <input
        type="text"
        name="search"
        value={props.searchTerm}
        onChange={handleChange}
        autoComplete="off"
      />
    </section>
  )
}

export default Search
