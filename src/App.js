import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import Book from './components/Book.js'
import Bookshelf from './components/Bookshelf.js'
import SearchApp from './SearchApp.js'
import PropTypes from 'prop-types'

class BooksApp extends React.Component {
  state = {
    books:[]
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

  //change shelves
  handleBookStatusChange = (book, shelf) => {
    BooksAPI.update( book, shelf).then(() => {
      this.fetchAllBooks()
    }) 
    console.log("function is called")
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
        <Route path="/search" render={() => (
          <SearchApp books={allBooks}  handleBookStatusChange = {this.handleBookStatusChange}/>
        )}/>

        <Route exact path="/" render={() => (
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
              <Link to="/search" >Add a book</Link>
            </div>
          </div>
        )}/>

     </div>
    )
  }
}

export default BooksApp
