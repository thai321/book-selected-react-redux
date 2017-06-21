import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={ () => this.props.selectBook(book) }
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  };
}

// state is the array books and the active book
function mapStateToProps(state) {
  // whatever is returned will show up as props
  // inside of BookList.
  // So we can call this.props.books
  // will give us array of books
  return {
    books: state.books // relationship between redux and react
  };
}

// Anhthing returned from this function will end up as props
// on the BookList container.
//Passing an object with key select book and value select book
// so we can call this.props.selectBook, and that will call
// selectBook function (creator)
function mapDispatchToProps(dispatch) {
  // Whenenver selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
  // want to make sure that the result will flow through this dispatch
  // function
  // dispatch function will takes all these actions and it will spits
  // out to all the different reducers in our application
}


// connection between BookList and our state
// turn BookList from Component to a container

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
// connect take a function and a Component, and it
// produces a container.
// the container is a Component that is where that is
// contained by the redux
