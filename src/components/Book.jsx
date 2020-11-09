import React, {Component} from 'react'

class Book extends Component {  
  handleClick = () => {
    this.props.pickBook(this.props.book.id)
  }

  render () {
    let {author, title, image} = this.props.book

    return (
      <div className="book" id="top">
        <img src={image} alt={`Book cover for ${title} by ${author}`} onClick={this.handleClick}/>
      </div>
    )
  }
}

export default Book