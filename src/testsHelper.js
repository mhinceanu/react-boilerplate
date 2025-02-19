import React from 'react';
import createStore from './store/createStore';

export const WrapStore = ({ children, initialState = {} }) => {
  const state = { ...initialState };
  const storeConfig = createStore(state);

  return (
    <storeConfig.Provider store={storeConfig.store}>
      {children}
    </storeConfig.Provider>
  );
};
