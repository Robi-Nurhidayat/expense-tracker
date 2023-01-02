import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  const renderTransactions = transactions.map((transaction) => {
    return <TransactionItem key={transaction.id} transaction={transaction} />;
  });
  return <ul>{renderTransactions}</ul>;
};

export default TransactionList;
