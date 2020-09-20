import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuidv4 } from "uuid";
function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const context = useContext(GlobalContext);
  const addTransaction = context.prop2;
  return (
    <>
      <h3>Add new transaction</h3>

      <form id="form">
        <div className="form-control">
          <label htmlFor="text" type>
            Text:
          </label>
          <input
            type="text"
            value={text}
            id="text"
            placeholder="Enter text..."
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="number"
            value={amount}
            placeholder="Enter amount..."
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          ></input>
        </div>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            addTransaction({ id: uuidv4(), text, amount: parseFloat(amount) });
          }}
        >
          Add transaction
        </button>
      </form>
    </>
  );
}

export default AddTransaction;
