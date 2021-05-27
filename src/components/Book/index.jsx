import React, {useState} from 'react'
import {Container, Cover, Title, Author} from './styles'
import {Button} from '../../styles'

const Book = ({book, pickBook, isLarge, setSavedBooks}) => {
  const [isSaved, setIsSaved] = useState(false)

  const handleSave = () => {
    setIsSaved((isSaved) => !isSaved)

    if (isSaved) {
      setSavedBooks((savedBooks) => [...savedBooks, book])
    } else {
      setSavedBooks((savedBooks) => savedBooks.filter((thisBook) => thisBook !== book))
    }
  }

  return (
    <Container $isLarge={isLarge} onClick={() => pickBook && pickBook(book)}>
      <Button onClick={handleSave} $isLarge={isLarge}>
        {isSaved ? 'Saved!' : 'Save for later'}
      </Button>
      <Cover src={book.image} alt={`Book cover for ${book.title} by ${book.author}`} />
      <figcaption>
        <Title $isLarge={isLarge}>{book.title}</Title>
        <Author>by {book.author}</Author>
      </figcaption>
    </Container>
  )
}

export default Book
