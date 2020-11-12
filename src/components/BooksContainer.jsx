import React from 'react'
import Book from './Book.jsx'

function BooksContainer(props) {
  let booksArray = props.books.map((book) => {
    return <Book key={book.id} book={book} pickBook={props.pickBook} />
  })

  return <div className="books-container">{booksArray}</div>
}

export default BooksContainer
