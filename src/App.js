import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './components/Book.js'
import Bookshelf from './components/Bookshelf.js'
import SearchApp from './SearchApp.js'
import PropTypes from 'prop-types'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
    showSearchPage: false
  }
  //Fetch all books 
   fetchAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  componentDidMount(){
    this.fetchAllBooks()
  }

  //change self

  handleBookStatusChange = (book, shelf) => {
    BooksAPI.update( book, shelf).then(() => {
      this.fetchAllBooks()
    }) 
  }

  render() {
    const allBooks = this.state.books;
    //const currentlyReading = this.state.currentlyReading;
    const currentlyReading = allBooks.filter(book => book.shelf === 'currentlyReading')
    const wantToRead =  allBooks.filter(book => book.shelf === 'wantToRead')
    const read =  allBooks.filter(book => book.shelf === 'read')
      
    // console.log(allBooks)
    // console.log(currentlyReading)
    // console.log(wantToRead)
    // console.log(read)

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchApp books={allBooks}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf 
                    title="Currently Reading" 
                    books={currentlyReading} 
                    handleBookStatusChange = {this.handleBookStatusChange} />
                <Bookshelf 
                    title="Want to Read" 
                    books={wantToRead} 
                    handleBookStatusChange = {this.handleBookStatusChange} />
                <Bookshelf 
                    title="Read" 
                    books={read} 
                    handleBookStatusChange = {this.handleBookStatusChange} />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
