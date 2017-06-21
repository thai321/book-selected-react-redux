import React, { Component } from 'react';
import { connect } from 'react-redux';



class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
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
  // inside of BookList
  return {
    books: state.books // relationship between redux and react
  };
}

export default connect(mapStateToProps)(BookList);
// connect take a function and a Component, and it
// produces a container.
// the container is a Component that is where that is
// contained by the redux
