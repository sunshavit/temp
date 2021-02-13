import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Error from "./components/Error";
import Favorite from "./components/Favorite";
import Home from "./components/Home";
import Nav from "./components/Nav";

const Routes = () => {
  const error = useSelector((state) => {
    return state.error;
  });

  return (
    <BrowserRouter>
      <Nav />
      {error.isError && <Error />}
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/favorites"} component={Favorite}></Route>
    </BrowserRouter>
  );
};

export default Routes;
