import React, { Component } from 'react'

class Book extends Component {

	render(){
	const { book} = this.props;
	const imageURL = `url('${book.imageLinks === undefined ? 'no image' : book.imageLinks.smallThumbnail}')`

	 	return  (
			<div className="book">
			    <div className="book-top">
			      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: imageURL }}></div>
			      <div className="book-shelf-changer">
			        <select value={book.shelf ? book.shelf : 'none'} onChange = {(event) => this.props.handleBookStatusChange(this.props.book, event.target.value)} >
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
