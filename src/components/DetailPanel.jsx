import React from 'react'
import icon from '../assets/icon-close.png'

const DetailPanel = (props) => {
  const {title, author, description, published} = props.book

  const handleClick = () => {
    props.closePanel()
  }

  return (
    <aside className="side-panel">
      <img src={icon} onClick={handleClick} className="close-icon" alt="Click to close this window." />
      <h1 className="panel-title">{title}</h1>
      <h3>By {author}</h3>
      <p>{description}</p>
      <hr />
      <p>Published in {published}</p>
    </aside>
  )
}

export default DetailPanel
