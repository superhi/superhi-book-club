import React, {Component} from 'react'
import './App.css'
import BooksContainer from './components/BooksContainer.jsx'
import DetailPanel from './components/DetailPanel.jsx'
import Search from './components/Search.jsx'

class App extends Component {
  state = {
    books: [],
    selectedBook: null,
    searchTerm: '',
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/isabelxklee/book-club-json/books')
      .then((response) => response.json())
      .then((booksArray) => {
        this.setState({
          books: booksArray,
        })
      })
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
    let newArray = []

    const reformatString = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())

    if (searchTerm === '') {
      newArray = books
    } else {
      newArray = books.filter(
        (book) => reformatString(book.title, searchTerm) || reformatString(book.author, searchTerm)
      )
    }

    return newArray
  }

  render() {
    return (
      <main>
        <h1>SuperHi Book Club</h1>

        {this.state.selectedBook && (
          <>
            <DetailPanel book={this.state.selectedBook} closePanel={this.closePanel} />
            <section id="overlay" onClick={this.closePanel} />
          </>
        )}

        <Search searchTerm={this.state.searchTerm} handleSearchTerm={this.handleSearchTerm} />
        <BooksContainer books={this.filterBooks()} pickBook={this.pickBook} />
      </main>
    )
  }
}

export default App
