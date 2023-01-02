import React from "react";
import styles from "./AddTransaction.module.css";

const AddTransaction = () => {
  return (
    <>
      <form>
        <div className={styles.inputGroup}>
          <label>Title</label>
          <input type={"text"} placeholder="ex: buy book" />
        </div>
        <div className={styles.inputGroup}>
          <label>Amount</label>
          <input type={"number"} placeholder="0" />
        </div>
        <div className={styles.inputGroup}>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default AddTransaction;
