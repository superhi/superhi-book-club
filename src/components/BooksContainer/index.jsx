import React, {useRef, useEffect, useState} from 'react'
import {debounce} from 'lodash-es'
import Book from '../Book'
import {Container, BookList} from './styles'

const BooksContainer = ({books, pickBook, isPanelOpen}) => {
  const prevPanelState = useRef(false)
  const [scroll, setScroll] = useState(0)
  const [savedBooks, setSavedBooks] = useState([])

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
      <BookList>
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
            pickBook={pickBook}
            savedBooks={savedBooks}
            setSavedBooks={setSavedBooks}
          />
        ))}
      </BookList>
    </Container>
  )
}

export default BooksContainer
