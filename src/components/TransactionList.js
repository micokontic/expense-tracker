import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "../components/Transaction";
function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  // const transactions = context.transactions;
  return (
    <>
      <h3>History</h3>

      <ul className="list">
        {transactions.map((transaction) => {
          return <Transaction transaction={transaction} key={transaction.id} />;
        })}
      </ul>
    </>
  );
}

export default TransactionList;
