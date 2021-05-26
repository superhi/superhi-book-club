import React, {useState, useEffect} from 'react'
import {Transition} from 'react-transition-group'
import {GlobalStyle, H2, Button} from './styles'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import Search from './components/Search'

const App = () => {
  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)
  const [savedBooks, setSavedBooks] = useState([])
  const [showSavedBooks, setShowSavedBooks] = useState(false)

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
    setShowPanel(true)
  }

  const closePanel = () => {
    setShowPanel(false)
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

  return (
    <>
      <GlobalStyle />
      <Header>
        <Button onClick={() => setShowSavedBooks(false)} $isHeader={true}>
          View all books
        </Button>
        <Button onClick={() => setShowSavedBooks(true)} $isHeader={true}>
          {savedBooks.length} Saved books
        </Button>
        <Search filterBooks={filterBooks} />
      </Header>
      {showSavedBooks ? (
        <H2>Saved Books</H2>
      ) : (
        <H2>{hasFiltered ? 'Search results' : 'All books'}</H2>
      )}
      <BooksContainer
        books={showSavedBooks ? savedBooks : filteredBooks}
        pickBook={pickBook}
        isPanelOpen={showPanel}
        allBooksLength={books.length}
        savedBooks={savedBooks}
        showSavedBooks={showSavedBooks}
      />
      <Transition in={showPanel} timeout={300}>
        {(state) => (
          <DetailPanel
            book={selectedBook}
            state={state}
            closePanel={closePanel}
            savedBooks={savedBooks}
            setSavedBooks={setSavedBooks}
          />
        )}
      </Transition>
    </>
  )
}

export default App
