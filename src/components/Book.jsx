import React, {Component} from 'react'

class Book extends Component {
  render () {
    let {id, author, title, description, image, published} = this.props.book

    return (
      <>
        {id % 2 === 0
        ?
          <div className="book" id="top">
            <img src={image} alt={`Book cover for ${title} by ${author}`}/>
          </div>
        :
          <div className="book" id="bottom">
            <img src={image} alt={`Book cover for ${title} by ${author}`}/>
          </div>
        }
      </>
    )
  }
}

export default Book