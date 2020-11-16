import React from 'react'

function Book(props) {
  const {id, image, title, author} = props.book

  const handleClick = () => {
    props.pickBook(id)
  }

  return (
    <>
      {id % 2 === 0 ? (
        <div className="book" id="left">
          <img src={image} alt={`Book cover for ${title} by ${author}`} onClick={handleClick} />
        </div>
      ) : (
        <div className="book" id="right">
          <img src={image} alt={`Book cover for ${title} by ${author}`} onClick={handleClick} />
        </div>
      )}
    </>
  )
}

export default Book
