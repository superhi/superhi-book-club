import React from 'react'
import {Container, BookCover} from './styles'
import {Author} from '../../styles'

const Book = ({book, pickBook}) => {
  const handleClick = () => {
    pickBook(book)
  }

  return (
    <Container>
      <BookCover
        src={book.image}
        alt={`Book cover for ${book.title} by ${book.author}`}
        onClick={handleClick}
      />
      <h3>{book.title}</h3>
      <Author>by {book.author}</Author>
    </Container>
  )
}

export default Book
