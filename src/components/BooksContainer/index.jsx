import React from 'react'
import Book from '../Book'
import {Container, BookList} from './styles'

const BooksContainer = ({books, pickBook}) => {
  return (
    <Container>
      <h2>All books: </h2>
      <BookList>
        {books.map((book) => (
          <Book key={book.id} book={book} pickBook={pickBook} />
        ))}
      </BookList>
    </Container>
  )
}

export default BooksContainer
