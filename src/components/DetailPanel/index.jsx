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
      <p>{book.description}</p>
      <p>Published in {book.published}</p>
    </Panel>
  )
}

export default DetailPanel
