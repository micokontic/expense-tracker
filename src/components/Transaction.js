import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
function Transaction({ transaction }) {
  const context = useContext(GlobalContext);
  const deleteTransaction = context.prop1;
  const transactionSignString = transaction.amount < 0 ? "minus" : "plus";
  const transactionSign = transaction.amount < 0 ? "-" : "+";

  return (
    <>
      <li className={transactionSignString}>
        {transaction.text}{" "}
        <span>
          {transactionSign}${Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          x
        </button>
      </li>
    </>
  );
}

export default Transaction;
