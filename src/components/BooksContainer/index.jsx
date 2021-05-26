import React, {useRef, useEffect, useState} from 'react'
import {debounce} from 'lodash-es'
import Book from '../Book'
import {Container, BookList, NoBooksContainer, H3, H4, SadFace} from './styles'

const NoBooksMessage = () => (
  <NoBooksContainer>
    <H3>Oh dear!</H3>
    <SadFace />
    <H4>You haven’t saved any books yet.</H4>
  </NoBooksContainer>
)

const BooksContainer = ({books, pickBook, isPanelOpen, savedBooks, showSavedBooks}) => {
  const prevPanelState = useRef(false)
  const [scroll, setScroll] = useState(0)

  console.log(scroll)

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
