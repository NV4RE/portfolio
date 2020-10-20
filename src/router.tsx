import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import styled from "styled-components";
import AboutMe from "./containers/AboutMe";
import Contact from "./containers/Contact";
import Experiences from "./containers/Experiences";
import Profile from "./containers/Profile";
import Summary from "./containers/Summary";

const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(35deg, #000000, #16222a, #14274e);
  background-size: 300vw;
  animation: gradient 50s ease infinite;
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
        <Route exact path="/aboutMe" component={AboutMe} />
        <Route exact path="/experiences" component={Experiences} />
        <Route exact path="/summary" component={Summary} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/">
          <Redirect to="/profile" />
        </Route>
      </Switch>
    </Container>
  );
};
