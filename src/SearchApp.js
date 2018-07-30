import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.js'
import Book from './components/Book.js'
import Bookshelf from './components/Bookshelf.js'
import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'
import { Link } from 'react-router-dom'

class SearchApp extends Component {

	constructor(props) {
	    super(props)

	    this.state = {
			query:'',
			books:[]
		}
	}

	
	static propTypes = {
		books:PropTypes.array.isRequired,
		handleBookStatusChange:PropTypes.func.isRequired
	}
	

	updateQuery = (query) => {
    	if (!query) {
      		this.setState({query: '', books: [] })
    	} else {
        	this.setState({query: query.trim() })
    	}

        BooksAPI.search(query).then((books) => {
	        if (books.error) {
	          this.setState({books: [] })
	        }	

	        books.map(book => (this.props.books.filter((result) => result.id === book.id).map(result => book.shelf = result.shelf)))
	        this.setState({ books })  
        })
    }

    updateShelf = (book, shelf) => {
    	this.props.handleBookStatusChange(book,shelf)
    }


	render() {

		return (
			<div className="search-books">
	            <div className="search-books-bar">
		            <Link to="/" className="close-search"  >Close</Link>
		            <div className="search-books-input-wrapper">
			            <input 
		                	type="text" 
		                	placeholder="Search by title or author"
		                	// value ={this.state.query}
		                	onChange={(event) => this.updateQuery(event.target.value)}
			            />
		            </div>
	            </div>

	            <div className="search-books-results">
		            <ol className="books-grid">	
	            		{this.state.books.map( book => (
	            		<li key={book.id}>
	            			<Book 
	            				book={book}
	            				// image={book.imageLinks.smallThumbnail}
	            				handleBookStatusChange={this.props.handleBookStatusChange}
	               			/>
	            		</li>
	        			))}	               			
		            </ol>
	            </div>
	        </div>
		)
	}
}

export default SearchApp