import categoryReducer, { checkStatus } from '../redux/categories/categories'

describe('test categories reducers for pure state', () => {
  test('test category reducer for purity', () => {
    const state = [];

    expect(categoryReducer(state, checkStatus()))
      .toEqual('Under construction');

    expect(state).toEqual([]);
  });
});