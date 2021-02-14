import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Background() {
  const imageUrl = useSelector((state) => {
    return state.backgroundImage;
  });

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: "0",
          backgroundColor: "rgba(0,0,0,0.45)",
          zIndex: "-1",
        }}
      ></div>

      <img
        style={{
          zIndex: "-2",
          position: "fixed",
          top: "0",
          height: "100vh",
          width: "100vw",
          objectFit: "cover",
        }}
        src={imageUrl}
      />
    </>
  );
}

export default Background;
