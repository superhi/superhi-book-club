import React from 'react'

const Search = ({searchTerm, handleSearchTerm}) => {
  const handleChange = (event) => {
    handleSearchTerm(event.target.value)
  }

  return (
    <section className="search">
      <label>Search by author or title: </label>
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={handleChange}
        autoComplete="off"
      />
    </section>
  )
}

export default Search
