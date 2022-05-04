import { v4 as uuidv4 } from 'uuid';
import { getBooksAPI, addBookAPI, removeBookAPI } from '../../API/app';

const ADD_BOOK = 'NEW_BOOK_ADD';
const REMOVE_BOOK = 'BOOK_REMOVED';
const initialState = [];

export const getBooksFromServer = () => async (dispatch) => {
  const data = await getBooksAPI();
  const result = Object.entries(data).map((data) => {
    let [, res] = data;
    [res] = res;
    [res.id] = data;
    return (res);
  });
  dispatch(({ type: ADD_BOOK, payload: result }));
};

export const addBook = (title, author) => (dispatch) => {
  const book = {
    id: uuidv4(), title, author, category: 'not set',
  };
  addBookAPI(book).then(() => {
    dispatch({ type: ADD_BOOK, payload: [book] });
  });
};
export const removeBook = (id) => (dispatch) => {
  removeBookAPI(id).then(() => {
    dispatch({ type: REMOVE_BOOK, payload: id });
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        ...action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.payload ? book : false));
    default:
      return state;
  }
};
