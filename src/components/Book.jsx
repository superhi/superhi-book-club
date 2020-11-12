import React, {Component} from 'react'

class Book extends Component {
  handleClick = () => {
    this.props.pickBook(this.props.book.id)
  }

  render() {
    let {id, author, title, image} = this.props.book

    return (
      <>
        {id % 2 === 0 ? (
          <div className="book" id="left">
            <img
              src={image}
              alt={`Book cover for ${title} by ${author}`}
              onClick={this.handleClick}
            />
          </div>
        ) : (
          <div className="book" id="right">
            <img
              src={image}
              alt={`Book cover for ${title} by ${author}`}
              onClick={this.handleClick}
            />
          </div>
        )}
      </>
    )
  }
}

export default Book
