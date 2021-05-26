import React, {useRef, useEffect} from 'react'
import Book from '../Book'
import {CloseWrapper, Panel, BG, P, Em} from './styles'
import {Close, Button} from '../../styles'

const DetailPanel = ({book, closePanel, state, savedBooks, setSavedBooks}) => {
  const panelEl = useRef(null)
  const prevBook = useRef(null)

  useEffect(() => {
    if (prevBook.current !== book) {
      panelEl.current.scrollTop = 0
    }
    prevBook.current = book
  }, [book, prevBook])

  const handleSave = () => {
    if (savedBooks.includes(book)) {
      setSavedBooks((savedBooks) => savedBooks.filter((item) => item !== book))
    } else {
      setSavedBooks((savedBooks) => [...savedBooks, book])
    }
  }

  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state} ref={panelEl}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>
        <Button onClick={handleSave}>
          {savedBooks.includes(book) ? 'Saved!' : 'Save for later'}
        </Button>
        {book && (
          <>
            <Book book={book} isLarge={true} />
            <P>{book.description}</P>
            <P>
              <Em>Published in {book.published}</Em>
            </P>
          </>
        )}
      </Panel>
    </>
  )
}

export default DetailPanel
