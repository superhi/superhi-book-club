import React, {useState, useEffect} from 'react'
import {Transition} from 'react-transition-group'
import {GlobalStyle} from './styles'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import Search from './components/Search'

const App = () => {
  const [books, setBooks] = useState([])
  const [showPanel, setShowPanel] = useState(false)
  const [showFaves, setShowFaves] = useState(false)
  // get the favourite ids from local storage, default to an empty array to prevent errors
  // from trying to parse `undefined` on first load
  const faveBookIds = JSON.parse(localStorage.getItem('faveBookIds') || '[]')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://book-club-json.herokuapp.com/books')
      const books = await response.json()

      // map over the books and set which ones have been favourited
      // note that we don't need to use the object spread form here as it's fine to mutate the
      // `book` itself, unlike when using it in react state, but lets keep things neat.
      // also note that we don't set `isFiltered`, it's fine to leave that as `undefined`
      // for the way we handle things, but we could always do `isFiltered: false` if we want
      setBooks(books.map((book) => ({...book, isFaved: faveBookIds.includes(book.id)})))
    }

    fetchData()
  }, [])

  const pickBook = (bookId) => {
    // map over all books, update each book such that the only picked book is the one
    // that's been sent into `pickBook`. note that we use the object spread here so
    // that we're not mutating the book itself, which is important for react's state handling
    setBooks((books) => books.map((book) => ({...book, isPicked: book.id === bookId})))
    setShowPanel(true)
  }

  const closePanel = () => {
    setShowPanel(false)
  }

  const toggleShowFaves = () => {
    setShowFaves((showFaves) => !showFaves)
  }

  const toggleFave = (bookId) => {
    setBooks((books) => {
      // first, map over all the books and toggle the `isFaved` prop on the book that
      // matches the id, otherwise return the unmodified `book`
      const updatedBooks = books.map((book) =>
        book.id === bookId ? {...book, isFaved: !book.isFaved} : book
      )
      // then filter these updated books to only show the favourite ones, and get just their ids
      // then turn this array into a string and save it to local storage. `localStorage` needs
      // a string rather than the actual array and on load we'll parse this out of `localStorage`
      // and turn it back into an array of favourite book ids
      localStorage.setItem(
        'faveBookIds',
        JSON.stringify(updatedBooks.filter(({isFaved}) => isFaved).map(({id}) => id))
      )
      return updatedBooks
    })
  }

  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())

    // if there's no search term then none of the books have been filtered, if there is a match
    // then all non-matching books have been filtered. make sure to use object spread again
    // so we're not mutating the original `book `object
    setBooks((books) =>
      books.map((book) => {
        const isFiltered = !searchTerm
          ? false
          : stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm)
          ? false
          : true
        return {...book, isFiltered: isFiltered}
      })
    )
  }

  // returns `true` if there's some books marked as `isFiltered`
  const hasFiltered = books.some((book) => book.isFiltered)
  // if we have filtered then show only the non-filtered books, otherwise if we're only
  // suppose to show the fave books then show those, otherwise show all books
  const displayBooks = hasFiltered
    ? books.filter((book) => !book.isFiltered)
    : showFaves
    ? books.filter((book) => book.isFaved)
    : books
  // find the one book that has been picked
  const selectedBook = books.find((book) => book.isPicked)

  return (
    <>
      <GlobalStyle />
      <Header
        toggleShowFaves={toggleShowFaves}
        showFaves={showFaves}
        faveBooksLength={faveBookIds.length}
      >
        <Search filterBooks={filterBooks} />
      </Header>
      <BooksContainer
        books={displayBooks}
        pickBook={pickBook}
        isPanelOpen={showPanel}
        title={hasFiltered ? 'Search results' : showFaves ? 'Favourite books' : 'All books'}
      />
      <Transition in={showPanel} timeout={300}>
        {(state) => (
          <DetailPanel
            book={selectedBook}
            state={state}
            toggleFave={toggleFave}
            closePanel={closePanel}
          />
        )}
      </Transition>
    </>
  )
}

export default App
