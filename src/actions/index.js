export function selectBook(book) { // book is object of title
  // console.log('Book has been selected: ', book.title);
  // selectBook is an ActionCreator, it needs to return an aciton,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
