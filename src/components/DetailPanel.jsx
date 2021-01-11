import React from 'react'

const DetailPanel = ({book}) => {
  return (
    <aside className="side-panel">
      {book ? (
        <section className="featured-book-info">
          <h1 className="panel-title">{book.title}</h1>
          <img
            src={book.image}
            alt={`Book cover for ${book.title} by ${book.author}`}
          />
          <h3>By {book.author}</h3>
          <p>{book.description}</p>
        </section>
      ) :
      <section className="empty-book">
        <p>Pssst... select a book from the left!</p>
      </section>
      }
    </aside>
  )
}

export default DetailPanel
