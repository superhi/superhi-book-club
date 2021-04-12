import React from 'react'
import Book from '../Book'
import {CloseWrapper, Panel, BG, P, Em} from './styles'
import {Close} from '../../styles'

const DetailPanel = ({book, closePanel}) => (
  <>
    <BG onClick={closePanel} />
    <Panel>
      <CloseWrapper onClick={closePanel}>
        <Close />
      </CloseWrapper>
      <Book book={book} isLarge={true} />
      <P>{book.description}</P>
      <P>
        <Em>Published in {book.published}</Em>
      </P>
    </Panel>
  </>
)

export default DetailPanel
