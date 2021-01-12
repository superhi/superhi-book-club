import React from 'react'
import icon from '../assets/icon-close.png'

const DetailPanel = ({book, closePanel}) => (
  <aside className="side-panel detail">
    <img src={icon} alt="Close Icon" className="icon" onClick={closePanel} />
    <section className="featured-book-info">
      <img
        src={book.image}
        alt={`Book cover for ${book.title} by ${book.author}`}
        className="book featured"
      />
      <h1 className="panel-title">{book.title}</h1>
      <p className="author">By {book.author}</p>
      <p className="description">{book.description}</p>
      <p className="date">Published in {book.published}</p>
    </section>
  </aside>
)

export default DetailPanel
