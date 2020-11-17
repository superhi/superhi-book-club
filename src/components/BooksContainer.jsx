import React from 'react'
import Book from './Book.jsx'

const BooksContainer = ({books, pickBook}) => (
  <div className="books-container">
    {books.map((book) => (
      <Book key={book.id} book={book} pickBook={pickBook} />
    ))}
  </div>
)

export default BooksContainer
