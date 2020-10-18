import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
import AboutMe from "./containers/Experiences";
import Profile from "./containers/Profile";
import Summary from "./containers/Summary";
import Tinder from "./containers/Tinder";

const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: #1a1c20;
`;

export default () => {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 700,
    },
  });
  return (
    <Container>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={Profile} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/summary" component={Summary} />
            <Route exact path="/tinder" component={Tinder} />
          </Switch>
        </animated.div>
      ))}
    </Container>
  );
};
