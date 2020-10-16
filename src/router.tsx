import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./containers/Landing";

export default () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
    </BrowserRouter>
  );
};
