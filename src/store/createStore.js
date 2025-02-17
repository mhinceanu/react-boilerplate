import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { reducers } from '../reducers/reducer';

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

function createStore(initialState) {
  const store = configureStore({
    reducer: reducers,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
  });

  return {
    store,
    Provider
  };
}

export default createStore;
