import React from 'react'
import PropTypes from 'prop-types'

function Book (props){
	const { book, image, handleFunction} = props;
	const imageURL = `url('${image}')`

 	return  (
		<div className="book">
		    <div className="book-top">
		      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: imageURL }}></div>
		      <div className="book-shelf-changer">
		        <select value={book.shelf || 'none'} onChange = {(event) => handleFunction(book, event.target.value)} >
		          <option value="moveto" disabled>Move to...</option>
		          <option value="currentlyReading">Currently Reading</option>
		          <option value="wantToRead">Want to Read</option>
		          <option value="read">Read</option>
		          <option value="none">None</option>
		        </select>
		      </div>
		    </div>
		    <div className="book-title">{book.title}</div>
		    <div className="book-authors">{book.author}</div>
		</div>
	)
}

export default Book
