import React, {Component} from 'react'
import './App.css'
import BooksContainer from './components/BooksContainer.jsx'
import DetailPanel from './components/DetailPanel.jsx'

class App extends Component {
  state = {
    books: [],
    selectedBook: 0,
    showPanel: false
  }

  componentDidMount() {
    fetch("http://localhost:3000/books")
    .then(response => response.json())
    .then((booksArray) => {
      this.setState({
        books: booksArray
      })
    })
  }

  pickBook = (bookId) => {
    this.setState({
      selectedBook: bookId,
      showPanel: true
    })
  }

  findBook = () => {
    let {books, selectedBook} = this.state

    if (selectedBook === 0) {
      return books
    } else {
      return books.find((book) => {
        return book.id === this.state.selectedBook
      })
    }
  }

  closePanel = () => {
    this.setState({
      showPanel: false
    })
  }

  render () {
    console.log(this.state.selectedBook)
    console.log(this.findBook())

    return (
      <div className="App">
        <h1>Book club</h1>

        {this.state.showPanel === true
        ?
        <DetailPanel book={this.findBook()} closePanel={this.closePanel}/>
        :
        null}

        <BooksContainer books={this.state.books} pickBook={this.pickBook}/>
      </div>
    )
  }
}

export default App