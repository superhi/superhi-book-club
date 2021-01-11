import React from 'react'
import icon from '../assets/icon-hand.png'

const EmptyPanel = () => (
  <aside className="side-panel empty">
    <section className="empty-book">
      <img src={icon} className="hand" />
      <p>Pssst... select a book from the left!</p>
    </section>
  </aside>
)

export default EmptyPanel
