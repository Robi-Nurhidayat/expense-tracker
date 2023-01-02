import React from "react";

const TransactionItem = ({ transaction }) => {
  return <li>{transaction.text}</li>;
};

export default TransactionItem;
