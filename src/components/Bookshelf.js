import React,{ Component }  from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types'


class Bookshelf extends Component {

	render(){
		const {title, books, handleBookStatusChange} = this.props;

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
		            				handleFunction={this.props.handleBookStatusChange}
		               			/>
		            		</li>
		        		))}
	            	</ol>
	           </div>
	        </div>
	    )
	}	
}

export default Bookshelf

