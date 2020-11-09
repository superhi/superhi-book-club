import React, {Component} from 'react'
import DetailPanel from './DetailPanel.jsx'

class Book extends Component {
  state = {
    showPanel: false
  }
  
  handleClick = () => {
    this.setState({
      showPanel: !this.state.showPanel
    })
  }

  render () {
    let {id, author, title, image} = this.props.book

    return (
      <>
        {id % 2 === 0
        ?
          <div className="book" id="top">
            <img src={image} alt={`Book cover for ${title} by ${author}`} onClick={this.handleClick}/>
          </div>
        :
          <div className="book" id="bottom">
            <img src={image} alt={`Book cover for ${title} by ${author}`}/>
          </div>
        }
        {this.state.showPanel === true
        ?
          <DetailPanel book={this.props.book}/>
        :
          null}
      </>
    )
  }
}

export default Book