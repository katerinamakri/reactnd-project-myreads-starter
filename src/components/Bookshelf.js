import React,{ Component }  from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types'


function Bookshelf (props) {

		return  (
	        <div className="bookshelf">
	        	<h2 className="bookshelf-title">{props.title}</h2>
	        	<div className="bookshelf-books">
	            	<ol className="books-grid">
		            	{props.books.map( (book) => (
		            		<li key={book.id}>
		            			<Book 
		            				book={book}
		            				// image={book.imageLinks.smallThumbnail}
		            				handleBookStatusChange={props.handleBookStatusChange}
		               			/>
		            		</li>
		        		))}
	            	</ol>
	           </div>
	        </div>
	    )
	// }	
}

export default Bookshelf

