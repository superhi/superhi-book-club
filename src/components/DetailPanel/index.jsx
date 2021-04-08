import React from 'react'
import {CloseButton, Panel, FeaturedBookCover, StyledP, BG} from './styles'
import {H2, ItalicP} from '../../styles'

const DetailPanel = ({book, closePanel}) => (
  <>
    <BG onClick={closePanel} />
    <Panel>
      <CloseButton onClick={closePanel} />
      <H2>{book.title}</H2>
      <ItalicP>by {book.author}</ItalicP>
      <FeaturedBookCover src={book.image} alt={`Book cover for ${book.title} by ${book.author}`} />
      <StyledP>{book.description}</StyledP>
      <ItalicP>Published in {book.published}</ItalicP>
    </Panel>
  </>
)

export default DetailPanel
