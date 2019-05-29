import {
  createStore,
  applyMiddleware
} from 'redux';

const logger = store => next => action => {
  console.log('Before reducer.', store.getState());

  next(action);

  console.log('After the reducer', store.getState());
};

const logger2 = store => next => action => {
  console.log('I am another Middleware.', action);
  next(action);
};

function reducer(state = {}, action) {
  switch(action.type) {
    case 'Hello.':
      return 'Hi...';
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  applyMiddleware(logger, logger2)
);

store.dispatch({
  type: 'Hello.'
});
