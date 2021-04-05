import React from 'react'
import {Container, BookTitle} from './styles'
import {ItalicP, BookCover} from '../../styles'

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
      <ItalicP>by {book.author}</ItalicP>
    </Container>
  )
}

export default Book