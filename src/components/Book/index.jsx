import React from 'react'
import {BookTitle} from './styles'
import {ItalicP, BookCover} from '../../styles'

const Book = ({book, pickBook}) => (
  <figure>
    <BookCover
      src={book.image}
      alt={`Book cover for ${book.title} by ${book.author}`}
      onClick={() => pickBook(book)}
    />
    <BookTitle>{book.title}</BookTitle>
    <ItalicP>by {book.author}</ItalicP>
  </figure>
)

export default Book
