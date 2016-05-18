import { createStore, applyMiddleware } from 'redux';
import { logger, thunk } from '../middlewares';
import rootReducer from '../reducers';

export default function configure(initialState?) {
  const store = (applyMiddleware(logger, thunk)(createStore))(rootReducer);

  if (module['hot']) {
    module['hot'].accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store;
};