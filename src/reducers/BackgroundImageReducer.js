import { SET_BACKGROUND_IMG } from "../config";

export const backgroundImageReducer = (
  state = "https://images.unsplash.com/photo-1544971587-b842c27f8e14?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80",
  action
) => {
  switch (action.type) {
    case SET_BACKGROUND_IMG:
      return action.payload;

    default:
      return state;
  }
};
