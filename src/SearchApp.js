import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import './App.js'
import Book from './components/Book.js'
import Bookshelf from './components/Bookshelf.js'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchApp extends Component {
	
	static propTypes = {
		books:PropTypes.array.isRequired,
		handleFunction:PropTypes.func.isRequired
	}
	
	state = {
		query:''
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	render(){
		let showingBooks
		if (this.state.query) {
			const match = new RegExp(escapeRegExp(this.state.query), 'i')
			showingBooks = this.props.books.filter((book) => match.test(book.title))
		}else {
			showingBooks = this.props.books
		}

		showingBooks.sort(sortBy('title'))

		return (
			<div className="search-books">
	            <div className="search-books-bar">
		            <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
		            <div className="search-books-input-wrapper">
			            <input 
		                	type="text" 
		                	placeholder="Search by title or author"
		                	value ={this.state.query}
		                	onChange={(event) => this.updateQuery(event.target.value)}
			            />
		            </div>
	            </div>

	            <div className="search-books-results">
		            <ol className="books-grid">	
	            		{showingBooks.map( (book) => (
		            		<li key={book.id}>
		            			<Book 
		            				book={book}
		            				image={book.imageLinks.smallThumbnail}
		            				handleFunction={this.handleBookStatusChange}
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