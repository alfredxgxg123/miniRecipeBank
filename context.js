import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

const initialValue = {
  google: '',
};

export const GoogleContext = createContext();

export function GoogleContextProvider({ children }) {
  const [googleSearch, dispatch] = useReducer(reducer, initialValue);
  return (
    <GoogleContext.Provider value={{ googleSearch, dispatch }}>
      { children }
    </GoogleContext.Provider>
  );
}
