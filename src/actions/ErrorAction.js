export const SetErrorOn = (message) => async (dispatch, getState) => {
  dispatch({
    type: "SET_ERROR_ON",
    payload: message,
  });
};

export const SetErrorOff = (message) => async (dispatch, getState) => {
  dispatch({
    type: "SET_ERROR_OFF",
    payload: message,
  });
};
