import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// create initial state

const initialState = {
  transactions: [
    { id: 1, text: "Buku", amount: -100 },
    { id: 2, text: "Rak", amount: -100 },
    { id: 3, text: "Pendapatan", amount: 600 },
    { id: 4, text: "Jajan", amount: -200 },
  ],
};

// create context
export const GlobalContext = createContext(initialState);

// create provider

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  const valueToShare = {
    transactions: state.transactions,
    deleteTransaction,
    addTransaction,
  };

  return (
    <GlobalContext.Provider value={valueToShare}>
      {children}
    </GlobalContext.Provider>
  );
}
