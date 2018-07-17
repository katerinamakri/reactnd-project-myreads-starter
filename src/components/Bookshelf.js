import React from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types'

function Bookshelf (props){
	const {title, books, handleBookStatusChange} = props;

 	return  (
        <div className="bookshelf">
        	<h2 className="bookshelf-title">{title}</h2>
        	<div className="bookshelf-books">
            	<ol className="books-grid">
	            	{books.map( (book) => (
	            		<li key={book.id}>
	            			<Book 
	            				book={book}
	            				image={book.imageLinks.smallThumbnail}
	            				handleFunction={handleBookStatusChange}
	               			/>
	            		</li>
	        		))}
            	</ol>
           </div>
        </div>
    )
}

export default Bookshelf

