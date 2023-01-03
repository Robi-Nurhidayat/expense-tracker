import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <div key={transaction.id} onClick={() => deleteTransaction(transaction.id)}>
      {transaction.text}
    </div>
  );
};

export default TransactionItem;
