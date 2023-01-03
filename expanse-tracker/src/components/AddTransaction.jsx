import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import styles from "./AddTransaction.module.css";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className={styles.inputGroup}>
          <label>Title</label>
          <input
            type={"text"}
            placeholder="ex: buy book"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Amount</label>
          <input
            type={"number"}
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default AddTransaction;
