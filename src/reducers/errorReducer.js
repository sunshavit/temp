export const errorReducer = (
  state = { isError: false, message: "" },
  action
) => {
  switch (action.type) {
    case "SET_ERROR_ON":
      return { isError: true, message: action.payload };
    case "SET_ERROR_OFF":
      return { isError: false, message: "" };

    default:
      return state;
  }
};
