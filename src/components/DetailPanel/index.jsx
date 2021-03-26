import React from 'react'
import {CloseButton, Panel} from './styles'

const DetailPanel = ({book, closePanel}) => {
  return (
    <Panel>
      <CloseButton onClick={closePanel} />
      <p>{book.title}</p>
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
