import React from 'react'
import icon from '../assets/icon-hand.png'

const EmptyPanel = () => (
  <aside className="side-panel empty">
    <div className="empty-book">
      <img src={icon} className="hand" />
      <p>Pssst... select a book from the left!</p>
    </div>
  </aside>
)

export default EmptyPanel
