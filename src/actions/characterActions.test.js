import {
  fetchCharacters,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_LOADING
} from './characterActions';

jest.mock('../services/avatarApi.js', () => ({
  getCharacters: () => Promise.resolve([])
}));

describe('Characters actions', () => {
  it('It dispatches a loading action, and fetch characters action', () => {
    const thunk = fetchCharacters();
    const dispatch = jest.fn();

    return thunk(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_CHARACTERS_LOADING
        });

        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_CHARACTERS,
          payload: []
        });
      });
  });
});
