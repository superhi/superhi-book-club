import React from 'react'
import icon from '../assets/icon-hand.png'

const DetailPanel = ({book}) => {
  return (
    <aside className="side-panel">
      {book ? (
        <section className="featured-book-info">
          <h1 className="panel-title">{book.title}</h1>
          <img src={book.image} alt={`Book cover for ${book.title} by ${book.author}`} />
          <p className="author">By {book.author}</p>
          <p className="description">{book.description}</p>
        </section>
      ) : (
        <section className="empty-book">
          <img src={icon} id="hand-icon" />
          <p>Pssst... select a book from the left!</p>
        </section>
      )}
    </aside>
  )
}

export default DetailPanel
