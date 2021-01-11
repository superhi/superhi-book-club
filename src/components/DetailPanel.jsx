import React from 'react'

const DetailPanel = ({book}) => {
  return (
    <aside className="side-panel">
      {book ? (
        <>
          <h1 className="panel-title">{book.title}</h1>
          <h3>By {book.author}</h3>
          <p>{book.description}</p>
          <hr />
          <p>Published in {book.published}</p>
        </>
      ) : null}
    </aside>
  )
}

export default DetailPanel
