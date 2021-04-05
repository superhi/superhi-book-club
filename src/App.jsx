import React, {Component} from 'react'
import {GlobalStyle} from './styles'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import Search from './components/Search'

class App extends Component {
  state = {
    books: [],
    selectedBook: null,
    searchTerm: '',
  }

  async componentDidMount() {
    const response = await fetch(`https://book-club-json.herokuapp.com/books`)
    const booksArray = await response.json()
    this.setState({books: booksArray})
  }

  pickBook = (book) => {
    this.setState({
      selectedBook: book,
    })
  }

  closePanel = () => {
    this.setState({
      selectedBook: null,
    })
  }

  handleSearchTerm = (input) => {
    this.setState({
      searchTerm: input,
    })
  }

  filterBooks = () => {
    const {searchTerm, books} = this.state

    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())

    if (searchTerm === '') {
      return books
    } else {
      return books.filter(
        (book) => stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm)
      )
    }
  }

  render() {
    const {selectedBook, searchTerm} = this.state

    return (
      <main>
        <GlobalStyle />
        <Search handleSearchTerm={this.handleSearchTerm} searchTerm={searchTerm} />
        <Header />
        <BooksContainer
          books={this.filterBooks()}
          pickBook={this.pickBook}
          title={searchTerm === '' ? 'All books' : 'Search results'}
        />
        {selectedBook && <DetailPanel book={selectedBook} closePanel={this.closePanel} />}
      </main>
    )
  }
}

export default App
