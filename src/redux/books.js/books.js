const ADD_BOOK = 'NEW_BOOK_ADD';
const REMOVE_BOOK = "BOOK_REMOVED";
const initialState = [];
export const addBook = (title, author) => ({ type: ADD_BOOK, payload: { title, author } });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload
      ]
    case REMOVE_BOOK:
      return state.filter((book, index) => index !== payload.id);
    default:
      state;
  }
};