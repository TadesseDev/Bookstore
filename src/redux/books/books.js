import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'NEW_BOOK_ADD';
const REMOVE_BOOK = 'BOOK_REMOVED';
const initialState = [
  {
    id: uuidv4(),
    title: 'The Hunger Game',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    title: 'The Hunger Game',
    author: 'Suzanne Collins',
  },
];

export const addBook = (title, author) => (
  { type: ADD_BOOK, payload: { title, author, id: uuidv4() } }
);
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book, index) => (index !== action.payload ? book : false));
    default:
      return state;
  }
};
