import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import styled from "styled-components";
import Experiences from "./containers/Experiences";
import Profile from "./containers/Profile";
import Summary from "./containers/Summary";

const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(14deg, #000000, #16222a, #14274e, #394867);
  background-size: 400% 400%;
  animation: gradient 20s ease infinite;
  overflow: hidden;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default () => {
  const location = useLocation();

  return (
    <Container>
      <Switch location={location}>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/experiences" component={Experiences} />
        <Route exact path="/summary" component={Summary} />
        <Route path="/">
          <Redirect to="/profile" />
        </Route>
      </Switch>
    </Container>
  );
};
