import bookReducer, { addBook, removeBook } from '../redux/books/books';
describe('test book reducer for pure state', () => {
  test('test book reducer for purity', () => {
    const initialState = [];
    const firstPayload = ['Tadesse', 'Alemayehu'];
    const secondPayload = ['Tadesse1', 'Alemayehu1'];
    const StateAfterFirstAdd = [{ title: 'Tadesse', author: 'Alemayehu' }];
    const StateAfterSecondAdd = [{ title: 'Tadesse', author: 'Alemayehu' }, { title: 'Tadesse1', author: 'Alemayehu1' }];

    expect(bookReducer(initialState, addBook(...firstPayload)))
      .toEqual(StateAfterFirstAdd);

    expect(bookReducer(StateAfterFirstAdd, addBook(...secondPayload)))
      .toEqual(StateAfterSecondAdd);

    expect(StateAfterFirstAdd).toEqual([{ title: 'Tadesse', author: 'Alemayehu' }]);


    expect(bookReducer(StateAfterSecondAdd, removeBook(0)))
      .toEqual([{ title: 'Tadesse1', author: 'Alemayehu1' }]);

    expect(initialState).toEqual([]);
  });
});