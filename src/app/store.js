import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { middeware as pack } from 'redux-pack';

/**
 * This is the redux store.
 */
const store = createStore(
  reducers,
  {}, // initialState
  applyMiddleware(logger, thunk, pack)
);

export default store;