import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
function Balance() {
  const { transactions } = useContext(GlobalContext);

  const balanceCalc = (arr) => {
    const amounts = transactions.map((transaction) => transaction.amount);

    const sum = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return sum;
  };

  return (
    <>
      <h4>Your balance</h4>
      <h1>${balanceCalc(transactions)}</h1>
    </>
  );
}

export default Balance;
