import {
  createStore,
  applyMiddleware
} from 'redux';

// Store is the redux store
// Next is a function to move to the next middleware
// Action is the dispatched action

const logger = store => next => action => {
  // Before the reducer has changed state
  console.log('Before reducer.', store.getState());

  next(action); // Go to the next middleware

  // After the reducer has changed state
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
  // applyMiddleware is like app.use
  applyMiddleware(logger, logger2)
);

store.dispatch({
  type: 'Hello.'
});
