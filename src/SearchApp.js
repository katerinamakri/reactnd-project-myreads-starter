import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.js'
import Book from './components/Book.js'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class SearchApp extends Component {

	constructor(props) {
	    super(props)

		this.state = {
			query:'', 
			booksResults:[]
		}		
	}
	static propTypes = {
		handleBookStatusChange:PropTypes.func.isRequired
	}
	
	updateQuery = (query) => {
    	if (query) {
        	this.setState({query: query.trim() })
	       
	        BooksAPI.search(query).then((booksResults) => {
			    
			    if (booksResults.error) {
				    this.setState({booksResults: [] })
			    } else {		
		        	booksResults.map(booksResults=> (this.props.books
		        			.filter( result => result.id === booksResults.id)
		        			.map( result => booksResults.shelf = result.shelf) 
		        	) )
					this.setState({booksResults})
				}
	        })
    	} else {
      		this.setState({query: '', booksResults: [] })
        }
	}	
	
	render() {

		return (
			<div className="search-books">
	            <div className="search-books-bar">
		            <Link to="/" className="close-search">Close</Link>
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
	            		{this.state.booksResults.map( (booksResults) => (
	            		<li key={booksResults.id}>
	            			<Book 
	            				book={booksResults}
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