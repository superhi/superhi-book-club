import React from 'react'
import {Container, BookCover, BookTitle} from './styles'
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
      <BookTitle>{book.title}</BookTitle>
      <Author>by {book.author}</Author>
    </Container>
  )
}

export default Book
