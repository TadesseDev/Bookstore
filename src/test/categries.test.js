import categoryReducer, { checkStatus } from '../redux/categories/categories';

describe('test categories reducers for pure state', () => {
  test('test category reducer for purity', () => {
    const state = [];

    expect(categoryReducer(state, checkStatus()))
      .toEqual('Under construction');

    // Assert state is not getting updated inside reducer
    expect(state).toEqual([]);
  });
});
