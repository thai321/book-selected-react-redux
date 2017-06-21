// State argument is not application state, only the
// state this reducer is responsible for.
export default function(state=null, action){
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload; // payload is a book which
      // is an object of title 
  }
  return state // don't care about the action
}

// state=null by default when the application is 1st load
// since redux is not allowed to return undefined
