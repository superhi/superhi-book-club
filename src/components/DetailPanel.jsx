import React from 'react'
import icon from '../assets/icon-close.png'

function DetailPanel(props) {
  let {title, author, description, published} = props.book

  let handleClick = () => {
    props.closePanel()
  }

  return (
    <div className="panel">
      <img src={icon} onClick={handleClick} id="close-icon" alt="Click to close this window."/>
      <h1 id="panel-title">{title}</h1>
      <h3>By {author}</h3>
      <p>{description}</p>
      <div id="line"/>
      <p>Published in {published}</p>
    </div>
  )
}

export default DetailPanel