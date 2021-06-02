import React, {useRef, useEffect, useState} from 'react'
import {debounce} from 'lodash-es'
import Book from '../Book'
import {Container, H2, BookList} from './styles'

const BooksContainer = ({books, pickBook, title, isPanelOpen}) => {
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
      <H2>{title}</H2>
      <BookList>
        {books.length
          ? books.map((book) => <Book key={book.id} book={book} pickBook={pickBook} />)
          : 'No books :('}
      </BookList>
    </Container>
  )
}

export default BooksContainer
