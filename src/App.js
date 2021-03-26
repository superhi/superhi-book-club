import React, {Component} from 'react'
import './App.css'
import {GlobalStyle} from './styles'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
// import EmptyPanel from './components/EmptyPanel.jsx'
// import Search from './components/Search.jsx'

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
    return (
      <main>
        <GlobalStyle />
        <Header />
        {/* <Search searchTerm={searchTerm} handleSearchTerm={this.handleSearchTerm} /> */}
        <BooksContainer books={this.filterBooks()} pickBook={this.pickBook} />
        {/* {selectedBook ? (
            <DetailPanel book={selectedBook} closePanel={this.closePanel} />
          ) : (
            <EmptyPanel />
          )} */}
      </main>
    )
  }
}

export default App
