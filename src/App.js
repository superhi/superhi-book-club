import React, {Component} from 'react'
import './App.css'
import BooksContainer from './components/BooksContainer.jsx'
import DetailPanel from './components/DetailPanel.jsx'
import Search from './components/Search.jsx'

class App extends Component {
  state = {
    books: [],
    selectedBookId: 0,
    showPanel: false,
    searchTerm: ""
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

  pickBook = (bookId) => {
    this.setState({
      selectedBookId: bookId,
      showPanel: true,
    })
  }

  findBook = () => {
    let {books, selectedBookId} = this.state

    if (selectedBookId !== 0) {
      return books.find((book) => {
        return book.id === this.state.selectedBookId
      })
    }
  }

  closePanel = () => {
    this.setState({
      showPanel: false,
    })
  }

  handleSearchTerm = (input) => {
    this.setState({
      searchTerm: input
    })
  }

  filterBooks = () => {
    const {searchTerm, books} = this.state
    let newArray = []

    if (searchTerm === "") {
      newArray = books
    } else {
      newArray = books.filter((book) => {
        return book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase())
      })
    }

    return newArray
  }

  render() {
    console.log(this.filterBooks())

    return (
      <div className="App">
        <h1 id="title">SuperHi Book Club</h1>

        {this.state.showPanel === true ? (
          <>
            <DetailPanel book={this.findBook()} closePanel={this.closePanel} />
            <div id="app-overlay" onClick={this.closePanel} />
          </>
        ) : null}

        <Search searchTerm={this.state.searchTerm} handleSearchTerm={this.handleSearchTerm} />

        <BooksContainer books={this.filterBooks()} pickBook={this.pickBook} />
      </div>
    )
  }
}

export default App
