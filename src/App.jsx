import React, {useState, useEffect} from 'react'
import {Transition} from 'react-transition-group'
import {GlobalStyle, Pill, Button} from './styles'
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
  const [title, setTitle] = useState('All books')

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
      setTitle('All books')
    } else {
      setFilteredBooks(
        books.filter(
          (book) => stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm)
        )
      )
      setTitle('Search results')
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header>
        <Button $isHeader={true} onClick={() => setShowSavedBooks(false)}>
          View all books
        </Button>
        <Pill>{savedBooks.length}</Pill>
        <Button $isHeader={true} onClick={() => setShowSavedBooks(true)}>
          Saved books
        </Button>
        <Search filterBooks={filterBooks} />
      </Header>
      <BooksContainer
        books={showSavedBooks ? savedBooks : filteredBooks}
        pickBook={pickBook}
        isPanelOpen={showPanel}
        allBooksLength={books.length}
        title={title}
        showSavedBooks={showSavedBooks}
      />
      <Transition in={showPanel} timeout={300}>
        {(state) => (
          <DetailPanel
            book={selectedBook}
            state={state}
            closePanel={closePanel}
            setSavedBooks={setSavedBooks}
          />
        )}
      </Transition>
    </>
  )
}

export default App
