import React from 'react'
import Book from './Book.jsx'

const BooksContainer = ({books, pickBook}) => (
  <section id="books-container">
    {books.map((book) => (
      <Book key={book.id} book={book} pickBook={pickBook} />
    ))}
  </section>
)

export default BooksContainer
