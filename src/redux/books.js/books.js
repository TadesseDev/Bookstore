const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = "REMOVE_BOOK";
export const addBook = (title, author) => ({ type: ADD_BOOK, payload: { title, author } });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });
