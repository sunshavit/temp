import axios from "axios";

export const getBackgroundImage = (cityName) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?query=${cityName}&client_id=hva_H6gIOwyVK_FBhb7iFvdwbxNJyxpKD5-zku3Quyg`
    );
    const index = Math.floor(Math.random() * data.results.length);
    dispatch({
      type: "SET_BACKGROUND_IMG",
      payload: data.results[index].urls.regular,
    });
  } catch (error) {
    dispatch({
      type: "SET_BACKGROUND_IMG",
      payload:
        "https://images.unsplash.com/photo-1544971587-b842c27f8e14?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80",
    });
  }
};
