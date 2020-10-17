import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  animated,
  config,
  useChain,
  useSpring,
  useTransition,
} from "react-spring";
import styled from "styled-components";

const FloatContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
`;

const Container = styled(animated.div)`
  pointer-events: all;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  will-change: width, height;
  background: white;
  max-width: 50vw;
  max-height: calc(100vh - 50px);
  top: 0;
  left: 0;
  transform: translate(0, 0);
`;

const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: #373a40;
  border-radius: 5px;
  will-change: transform, opacity;
  cursor: pointer;
`;

const pages: IPage[] = [
  {
    title: "Who am I ?",
    path: "/aboutme",
    icon: "",
  },
  {
    title: "Synopsis",
    path: "/summary",
    icon: "",
  },
  {
    title: "LoL",
    path: "/tinder",
    icon: "",
  },
];

interface IPage {
  title: string;
  path: string;
  icon: string;
}

interface IProps {
  center?: boolean;
}

export default (props: IProps) => {
  const [open, set] = useState(false);

  const history = useHistory();

  const springRef = useRef();
  // @ts-ignore
  const style = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { width: "10vw", height: "2vh", background: "hotpink" },
    to: {
      width: open ? "100vw" : "10vw",
      height: open ? "100vh" : "2vh",
      background: open ? "white" : "hotpink",
    },
  });

  const transRef = useRef();
  const transitions = useTransition(open ? pages : [], (item) => item.title, {
    // @ts-ignore
    ref: transRef,
    unique: true,
    trail: 400 / pages.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  // @ts-ignore
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <FloatContainer>
      <Container
        style={{
          ...style,
          top: props.center ? "50%" : "0",
          left: props.center ? "50%" : "0",
          transform: props.center ? "translate(-50%, -50%)" : "translate(0, 0)",
        }}
        onClick={() => set((open) => !open)}
      >
        {transitions.map(({ item, key, props }) => (
          <Item
            key={key}
            style={{ ...props }}
            onClick={() => {
              set(() => true);
              history.push(item.path);
            }}
          >
            {item.title}
          </Item>
        ))}
      </Container>
    </FloatContainer>
  );
};
