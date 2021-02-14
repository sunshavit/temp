export const SetErrorOn = (message) => (dispatch, getState) => {
  dispatch({
    type: "SET_ERROR_ON",
    payload: message,
  });
};

export const SetErrorOff = (message) => (dispatch, getState) => {
  dispatch({
    type: "SET_ERROR_OFF",
    payload: message,
  });
};
