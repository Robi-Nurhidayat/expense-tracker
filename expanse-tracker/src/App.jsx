import React, { useContext } from "react";
import styles from "./App.module.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeOutcome from "./components/IncomeOutcome";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <div className={styles.container}>
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeOutcome />
        <div className={styles.transaction}>
          <AddTransaction />
          <TransactionList />
        </div>
      </GlobalProvider>
    </div>
  );
};

export default App;
