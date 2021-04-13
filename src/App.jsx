import React, {useState, useEffect} from 'react'
import {GlobalStyle} from './styles'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import Search from './components/Search'

const App = () => {
  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://book-club-json.herokuapp.com/books')
      const books = await response.json()
      setBooks(books)
      setFilteredBooks(books)
    }

    fetchData()
  }, [])

  const pickBook = (book) => {
    setSelectedBook(book)
  }

  const closePanel = () => {
    setSelectedBook(null)
  }

  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())

    if (!searchTerm) {
      setFilteredBooks(books)
    } else {
      setFilteredBooks(
        books.filter(
          (book) => stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm)
        )
      )
    }
  }

  const hasFiltered = filteredBooks.length !== books.length
  const isPanelOpen = selectedBook !== null

  return (
    <>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks} isPanelOpen={isPanelOpen} />
      </Header>
      <BooksContainer
        books={filteredBooks}
        pickBook={pickBook}
        isPanelOpen={isPanelOpen}
        title={hasFiltered ? 'Search results' : 'All books'}
      />
      {selectedBook && <DetailPanel book={selectedBook} closePanel={closePanel} />}
    </>
  )
}

export default App
