import React, { useCallback, useEffect, useRef, useState } from "react";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TransitionItem = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 5em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity, height;
  white-space: nowrap;
  cursor: pointer;
  line-height: 80px;
`;

export default () => {
  const ref = useRef<NodeJS.Timeout[]>([]);
  const [items, set] = useState<string[]>([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      color: "#8fa5b6",
    },
    enter: {
      opacity: 1,
      height: 80,
      color: "#32e0c4",
    },
    leave: [{ opacity: 0, height: 0 }],
  });

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(["Full-Stack", "Developer"]), 2000));
    ref.current.push(setTimeout(() => set(["Researcher"]), 5000));
    ref.current.push(
      setTimeout(() => set(["Embedded", "System", "Engineer"]), 8000)
    );
  }, []);

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <Container>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props} onClick={reset}>
          <TransitionItem>{item}</TransitionItem>
        </animated.div>
      ))}
    </Container>
  );
};
