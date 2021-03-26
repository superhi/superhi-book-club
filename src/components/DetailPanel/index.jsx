import React from 'react'
import {CloseButton, Panel, FeaturedBookCover} from './styles'
import {H2, Author} from '../../styles'

const DetailPanel = ({book, closePanel}) => {
  return (
    <Panel>
      <CloseButton onClick={closePanel} />
      <H2>{book.title}</H2>
      <Author>by {book.author}</Author>
      <FeaturedBookCover src={book.image} alt={`Book cover for ${book.title} by ${book.author}`} />
    </Panel>
  )
}

export default DetailPanel

// const DetailPanel = ({book, closePanel}) => (
//   <div className="side-panel detail">
//     <CloseIcon alt="Close Icon" className="icon" onClick={closePanel} />
//     <div className="featured-book-info">
//       <img
//         src={book.image}
//         alt={`Book cover for ${book.title} by ${book.author}`}
//         className="book featured"
//       />
//       <div className="book-info">
//         <h2 className="book-title">{book.title}</h2>
//         <p className="author featured">By {book.author}</p>
//         <p className="description featured">{book.description}</p>
//         <p className="date featured">Published in {book.published}</p>
//       </div>
//     </div>
//   </div>
// )
