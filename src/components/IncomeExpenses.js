import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const amountsPos = amounts.filter((amount) => {
    if (amount > 0) {
      return amount;
    }
  });
  const amountsNeg = amounts.filter((amount) => {
    if (amount < 0) {
      return amount;
    }
  });

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          ${amountsPos.reduce((acc, item) => (acc += item), 0)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          -${Math.abs(amountsNeg.reduce((acm, item) => (acm += item), 0))}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
