export const ifCelsiusReducer = (state = true, action) => {
  switch (action.type) {
    case "SET_TO_CELSIUS":
      return action.paylode;
    default:
      return state;
  }
};
