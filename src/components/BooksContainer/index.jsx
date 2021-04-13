import React from 'react'
import Book from '../Book'
import {Container, H2, BookList} from './styles'

const BooksContainer = ({books, pickBook, isPanelOpen}) => (
  <Container $isPanelOpen={isPanelOpen}>
    <H2>All books</H2>
    <BookList>
      {books.map((book) => (
        <Book key={book.id} book={book} pickBook={pickBook} />
      ))}
    </BookList>
  </Container>
)

export default BooksContainer
