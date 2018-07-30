import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Book extends Component {

	constructor(props) {
	    super(props)
	    this.changeShelf = this.changeShelf.bind(this)
    }

	changeShelf (event) {
	    const shelf = event.target.value
	    this.props.handleBookStatusChange(this.props.book, shelf)
    }	

	render(){
	const { book,  handleBookStatusChange} = this.props;
	const imageURL = `url('${book.imageLinks === undefined ? 'no image' : book.imageLinks.smallThumbnail}')`


	 	return  (
			<div className="book">
			    <div className="book-top">
			      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: imageURL }}></div>
			      <div className="book-shelf-changer">
			        <select value={book.shelf ? book.shelf : 'none'} onChange = {this.changeShelf} >
			          <option value="moveto" disabled>Move to...</option>
			          <option value="currentlyReading">Currently Reading</option>
			          <option value="wantToRead">Want to Read</option>
			          <option value="read">Read</option>
			          <option value="none">None</option>
			        </select>
			      </div>
			    </div>
			    <div className="book-title">{book.title}</div>
			    <div className="book-authors">{book.authors}</div>
			</div>
		)

	}
}

export default Book
