import React from 'react'

const Book = ({book, pickBook}) => {
  const handleClick = () => {
    pickBook(book)
  }

  return (
    <article className="book">
      <p>{book.id}</p>
      <img
        src={book.image}
        alt={`Book cover for ${book.title} by ${book.author}`}
        onClick={handleClick}
        className="book"
      />
      <p>{book.title}</p>
      <p className="author">by {book.author}</p>
    </article>
  )
}

export default Book
