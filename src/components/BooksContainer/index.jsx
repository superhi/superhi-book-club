import React from 'react'
import Book from '../Book'
import {Container} from './styles'

const BooksContainer = ({books, pickBook}) => {
  return (
    <Container>
      {books.map((book) => (
        <Book key={book.id} book={book} pickBook={pickBook} />
      ))}
    </Container>
  )
}

export default BooksContainer
