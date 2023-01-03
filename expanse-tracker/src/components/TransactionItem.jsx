import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li onClick={() => deleteTransaction(transaction.id)}>
      {transaction.text}
    </li>
  );
};

export default TransactionItem;
