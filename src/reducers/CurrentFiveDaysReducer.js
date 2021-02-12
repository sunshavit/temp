export const currentFiveDaysReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_FIVE_DAYS":
      return action.payload;

    default:
      return state;
  }
};
