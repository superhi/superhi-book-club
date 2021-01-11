import React, {Component} from 'react'
import './App.css'
import BooksContainer from './components/BooksContainer.jsx'
import DetailPanel from './components/DetailPanel.jsx'
import Search from './components/Search.jsx'
import logo from './assets/logo-book-club.png'

class App extends Component {
  state = {
    books: [],
    selectedBook: null,
    searchTerm: '',
  }

  componentDidMount() {
    fetch('https://book-club-json.herokuapp.com/books')
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

    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())

    if (searchTerm === '') {
      newArray = books
    } else {
      newArray = books.filter(
        (book) => stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm)
      )
    }

    return newArray
  }

  render() {
    return (
      <main>
        <header>
          <img src={logo} alt="Black logo for 'SuperHi's Book Club'" id="logo"/>
        </header>
        <Search searchTerm={this.state.searchTerm} handleSearchTerm={this.handleSearchTerm} />
        <section className="main-container">
          <BooksContainer books={this.filterBooks()} pickBook={this.pickBook} />
          <DetailPanel book={this.state.selectedBook} closePanel={this.closePanel} />
        </section>
      </main>
    )
  }
}

export default App
