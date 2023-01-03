import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeOutcome = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((trs) => trs.amount);

  if (!amount) {
    return;
  }
  const income = amount
    .filter((val) => val > 0)
    .reduce((acc, curr) => (acc += curr));
  const outcome = amount
    .filter((val) => val < 0)
    .reduce((acc, curr) => (acc += curr));

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <div>
        <h5>Income</h5>
        <p>Rp. {income}</p>
      </div>
      <div>
        <h5>Outcome</h5>
        <p>Rp. {outcome}</p>
      </div>
    </div>
  );
};

export default IncomeOutcome;
