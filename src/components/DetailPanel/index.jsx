import React from 'react'
import Book from '../Book'
import {Panel, P, Em} from './styles'

const DetailPanel = ({book}) => (
  <Panel>
    <Book book={book} />
    <P>{book.description}</P>
    <P>
      <Em>Published in {book.published}</Em>
    </P>
  </Panel>
)

export default DetailPanel
