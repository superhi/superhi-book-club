import React from 'react'
import Book from '../Book'
import {Container, BookList} from './styles'
import {H2} from '../../styles'

const BooksContainer = ({books, pickBook}) => {
  return (
    <Container>
      <H2>All books: </H2>
      <BookList>
        {books.map((book) => (
          <Book key={book.id} book={book} pickBook={pickBook} />
        ))}
      </BookList>
    </Container>
  )
}

export default BooksContainer
