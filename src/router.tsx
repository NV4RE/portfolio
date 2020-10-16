import React from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import Landing from "./containers/Landing";
import Summary from "./containers/Summary";

export default () => {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      <Link to="/">home</Link>
      <Link to="/summary">summary</Link>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={Landing} />
            <Route exact path="/summary" component={Summary} />
          </Switch>
        </animated.div>
      ))}
    </>
  );
};
