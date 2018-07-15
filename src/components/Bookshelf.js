import React from 'react'
import Book from './Book.js'

function Bookshelf (props){
	const {title, books} = props;

 	return  (

        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">

            <ol className="books-grid">
	            {books.map( (book, index) => (
	            	<li key={index}>
	            		<Book title={book.title} author={book.author} image={book.imageLinks.smallThumbnail}/>
	            	</li>
	            	)
	            )}
            </ol>
            </div>
        </div>
    )
}

export default Bookshelf

