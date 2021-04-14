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
  }, [isPanelOpen, prevPanelState])

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (!isPanelOpen) {
        setScroll(window.scrollY)
      }
    }, 100)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <Container $isPanelOpen={isPanelOpen} $top={scroll}>
      <H2>{title}</H2>
      <BookList>
        {books.map((book) => (
          <Book key={book.id} book={book} pickBook={pickBook} />
        ))}
      </BookList>
    </Container>
  )
}

export default BooksContainer
