// import { v4 as uuidv4 } from 'uuid'
import bookReducer, { addBook, removeBook } from '../redux/books/books';
import store from '../redux/configureStore'
describe('test book reducer for pure state', () => {
  const initialState = [];
  const firstPayload = ['Tadesse', 'Alemayehu'];
  const secondPayload = ['Tadesse1', 'Alemayehu1'];

  test('test book reducer for purity', () => {
    const firstState = bookReducer(initialState, addBook(...firstPayload));
    expect(firstState.length).toBe(1);

    const secondState = bookReducer(firstState, addBook(...secondPayload));
    expect(secondState.length).toEqual(2);

    expect(initialState).toEqual([]);
    expect(firstState.length).toEqual(1);
  });

});
