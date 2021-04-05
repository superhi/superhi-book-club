import React from 'react'
import {Close, Panel, FeaturedBookCover} from './styles'
import {H2, ItalicP, P} from '../../styles'
const DetailPanel = ({book, closePanel}) => {
  return (
    <Panel>
      <Close onClick={closePanel} />
      <H2>{book.title}</H2>
      <ItalicP>by {book.author}</ItalicP>
      <FeaturedBookCover src={book.image} alt={`Book cover for ${book.title} by ${book.author}`} />
      <P>{book.description}</P>
      <ItalicP>Published in {book.published}</ItalicP>
    </Panel>
  )
}

export default DetailPanel
