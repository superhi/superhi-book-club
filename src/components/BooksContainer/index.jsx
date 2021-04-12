import React from 'react'
import Book from '../Book'
import {Container, H2, BookList} from './styles'

const BooksContainer = ({books, pickBook, title, isPanelOpen}) => (
  <Container $isPanelOpen={isPanelOpen}>
    <H2>{title}</H2>
    <BookList>
      {books.map((book) => (
        <Book key={book.id} book={book} pickBook={pickBook} />
      ))}
    </BookList>
  </Container>
)

export default BooksContainer
