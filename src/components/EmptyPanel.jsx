import React from 'react'
import {ReactComponent as HandIcon} from '../assets/icon-hand.svg'

const EmptyPanel = () => (
  <div className="side-panel empty">
    <div className="empty-book">
      <HandIcon
        className="hand"
        src="black and white graphic icon of a hand pointing to the left"
      />
      <p>Pssst... select a book from the left!</p>
    </div>
  </div>
)

export default EmptyPanel
