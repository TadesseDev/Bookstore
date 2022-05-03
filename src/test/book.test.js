import bookReducer, { addBook, removeBook } from '../redux/books/books';
describe('test book reducer for pure state', () => {
  test('test book reducer for purity', () => {
    const state = [];
    expect(bookReducer(state, addBook('Tadesse', 'Alemayehu')))
      .toEqual([{ title: 'Tadesse', author: 'Alemayehu' }]);
    expect(state).toEqual([]);
    expect(bookReducer(state, removeBook(0)))
      .toEqual([]);
  });
});