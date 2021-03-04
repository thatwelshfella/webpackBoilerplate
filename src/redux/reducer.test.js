import store from 'Redux/reducer';
import InitialState from 'Src/initialState';

describe('Redux store', () => {
  it('should return redux store', () => {
    expect(store.getState()).toEqual(InitialState);
  });
});
