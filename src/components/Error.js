import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetErrorOff } from "../actions/ErrorAction";

function Error() {
  const dispatch = useDispatch();
  const error = useSelector((state) => {
    return state.error;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(SetErrorOff());
    }, 8500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div
      id="popup"
      style={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        top: "0",
        left: "50%",
        zIndex: "2",
        borderRadius: "10px",
        backgroundColor: "white",
        padding: "2rem 4rem",
        paddingTop: "2.5rem",
        maxWidth: "27rem",
      }}
    >
      {error.message}
    </div>
  );
}

export default Error;
