import React from 'react'

const Book = (props) => {
  const {id, image, title, author} = props.book

  const handleClick = () => {
    props.pickBook(props.book)
  }

  return (
    <article className={`book ${id % 2 === 0 ? 'left' : 'right'}`}>
      <img src={image} alt={`Book cover for ${title} by ${author}`} onClick={handleClick} />
    </article>
  )
}

export default Book
