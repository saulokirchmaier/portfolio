import React from 'react';
import App from '../App';
import AppContext from './AppContext';

function Provider({ children }) {
  const contextValue = {index: 0};

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
