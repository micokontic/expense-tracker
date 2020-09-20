export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => {
          if (transaction.id !== action.value) {
            return transaction;
          }
        }),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.value, ...state.transactions],
      };

    default:
      return state;
  }
};
