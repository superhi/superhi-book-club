import React from 'react'
import {BookCover} from './styles'

const Book = ({book, pickBook}) => {
  const handleClick = () => {
    pickBook(book)
  }

  return (
    <article>
      <BookCover
        src={book.image}
        alt={`Book cover for ${book.title} by ${book.author}`}
        onClick={handleClick}
      />
      <h3>{book.title}</h3>
      <p className="author">by {book.author}</p>
    </article>
  )
}

export default Book
