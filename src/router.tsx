import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./containers/Landing";
import Summary from "./containers/Summary";

export default () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route exact path="/summary" component={Summary} />
    </BrowserRouter>
  );
};
