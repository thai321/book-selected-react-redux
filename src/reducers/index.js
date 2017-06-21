import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer, // books is the key to the global
  //application key, and the value return from BooksReducer, in
  // this case is the value of array of books

  activeBook: ActiveBook // function of checking the
  // action is BOOK_SELECTED to return the payload
  // which is book (object of title)

}); // the state here is always = to an object of the key and
//value of
//books

export default rootReducer;
