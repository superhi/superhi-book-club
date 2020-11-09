import React from 'react'

function DetailPanel(props) {
  let {title, author, description, published} = props.book

  let handleClick = () => {
    props.closePanel()
  }

  return (
    <div className="panel">
      <button onClick={handleClick}>Close</button>
      <h1>{title}</h1>
      <h3>By {author}</h3>
      <p>{description}</p>
      <p>Published in {published}</p>
    </div>
  )
}

export default DetailPanel