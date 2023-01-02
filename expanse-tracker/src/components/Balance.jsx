import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((trs) => trs.amount);
  const total = amount.reduce((acc, curr) => (acc += curr));
  console.log(total);
  console.log(amount);
  return (
    <div>
      <p>Total Your saldo</p>
      Rp. {total}
    </div>
  );
};

export default Balance;
