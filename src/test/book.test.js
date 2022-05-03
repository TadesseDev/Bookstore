// import { v4 as uuidv4 } from 'uuid'
import bookReducer, { addBook, removeBook } from '../redux/books/books';

describe('test book reducer for pure state', () => {
  const initialState = [];
  const firstPayload = ['Tadesse', 'Alemayehu'];
  const secondPayload = ['Tadesse1', 'Alemayehu1'];

  test('test book reducer for purity', () => {
    const firstState = bookReducer(initialState, addBook(...firstPayload));
    expect(firstState.length).toBe(1);

    // pass first state as initial state and ge the second state
    const secondState = bookReducer(firstState, addBook(...secondPayload));
    expect(secondState.length).toEqual(2);

    // assert remove action for purity
    const removeState1 = bookReducer(secondState, removeBook(secondState[0].id));
    expect(removeState1.length).toEqual(1);
    const removeState2 = bookReducer(removeState1, removeBook(removeState1[0].id));
    expect(removeState2.length).toEqual(0);

    // make all state passed as previous state are not changed
    expect(initialState).toEqual([]);
    expect(firstState.length).toEqual(1);
    expect(secondState.length).toEqual(2);
  });
});
