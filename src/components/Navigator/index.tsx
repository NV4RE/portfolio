import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import back from "../../resources/svg/back.svg";
import next from "../../resources/svg/next.svg";

const Container = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  pointer-events: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  height: 3rem;
  margin: 8px;
  pointer-events: all;
  cursor: pointer;
`;

interface IProps {
  next?: string;
}

export default (props: IProps) => {
  const history = useHistory();
  return (
    <Container>
      <Img src={back} alt="back" onClick={() => history.goBack()} />
      <Img
        src={next}
        alt="next"
        onClick={() => history.push(props.next ? props.next : "/")}
      />
    </Container>
  );
};
