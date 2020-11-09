import React, {Component} from 'react'
import './App.css'
import BooksContainer from './components/BooksContainer.jsx'

class App extends Component {
  state = {
    books: []
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

  render () {
    return (
      <div className="App">
        <h1>Book club</h1>
        <BooksContainer books={this.state.books} />
      </div>
    )
  }
}

export default App