import React, {useRef, useEffect, useState} from 'react'
import {debounce} from 'lodash-es'
import Book from '../Book'
import {Container, BookList, NoBooksContainer} from './styles'
import {ReactComponent as SadFace} from './sad-face.svg'

const NoBooksMessage = () => (
  <NoBooksContainer>
    <h3>Oh dear!</h3>
    <SadFace />
    <p>You haven’t saved any books yet.</p>
  </NoBooksContainer>
)

const BooksContainer = ({books, pickBook, isPanelOpen, savedBooks, showSavedBooks}) => {
  const prevPanelState = useRef(false)
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    if (prevPanelState.current && !isPanelOpen) {
      window.scroll(0, scroll)
    }
    prevPanelState.current = isPanelOpen
  }, [isPanelOpen, prevPanelState, scroll])

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScroll(window.scrollY)
    }, 100)

    if (!isPanelOpen) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isPanelOpen])

  return (
    <Container $isPanelOpen={isPanelOpen} $top={scroll}>
      {savedBooks.length < 1 && showSavedBooks ? (
        <NoBooksMessage />
      ) : (
        <BookList>
          {books.map((book) => (
            <Book key={book.id} book={book} pickBook={pickBook} />
          ))}
        </BookList>
      )}
    </Container>
  )
}

export default BooksContainer
