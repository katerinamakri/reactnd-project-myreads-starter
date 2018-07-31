import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link  } from 'react-router-dom'
import './App.css'
import Bookshelf from './components/Bookshelf.js'
import SearchApp from './SearchApp.js'

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

  //is invoked to dynamically fetch data
  componentDidMount(){
    this.fetchAllBooks()
  }

  //updates book status
  handleBookStatusChange = (book, shelf) => {
    BooksAPI.update( book, shelf).then(() => {
      this.fetchAllBooks()
    }) 
  }

  render() {
    const allBooks = this.state.books;
    const currentlyReading = allBooks.filter(book => book.shelf === 'currentlyReading')
    const wantToRead =  allBooks.filter(book => book.shelf === 'wantToRead')
    const read =  allBooks.filter(book => book.shelf === 'read')
      
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
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
