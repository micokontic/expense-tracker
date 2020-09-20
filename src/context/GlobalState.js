import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//initial state

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

//Provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", value: id });
  };
  const addTransaction = (newTransaction) => {
    dispatch({ type: "ADD_TRANSACTION", value: newTransaction });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        prop1: deleteTransaction,
        prop2: addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
