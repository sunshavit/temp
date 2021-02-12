import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Favorite from "./components/Favorite";
import Home from "./components/Home";
import Nav from "./components/Nav";

const routes = (
  <BrowserRouter>
    <Nav />
    <Route exact path={"/"} component={Home} />
    <Route exact path={"/favorites"} component={Favorite}></Route>
  </BrowserRouter>
);

export default routes;
