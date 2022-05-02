const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = "REMOVE_BOOK";
export const addBook = (title, author) => ({ type: ADD_BOOK, payload: { title, author } });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });
export default (state = [], action) => {
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