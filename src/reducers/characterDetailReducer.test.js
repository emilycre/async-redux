import reducer from './characterDetailReducer';
import { FETCH_CHARACTER, FETCH_CHARACTER_LOADING } from '../actions/characterDetailActions';

describe('Character Detail Reducer', () => {
  it('Handles the fetch character action', () => {
    const initialState = {
      loading: true,
      character: {},
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTER,
      payload: { name: 'Name' }
    });

    expect(newState).toEqual({
      loading: false,
      character: { name: 'Name' },
      error: null
    });
  });

  it('Handles the fetch character loading action', () => {
    const initialState = {
      loading: false,
      character: {},
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTER_LOADING,
    });

    expect(newState).toEqual({
      loading: true,
      character: {},
      error: null
    });
  });
});
