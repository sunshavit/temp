export const currentFiveDaysReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CURRENT_FIVE_DAYS":
      return action.payload;

    default:
      return state;
  }
};
