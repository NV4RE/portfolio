import React from "react";
import { MdArrowBack, MdHome } from "react-icons/md";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

const Between = styled.div`
  display: flex;
  flex: 1 0 100%;
  width: 100%;
  justify-content: space-between;
`;

interface IProps {
  next?: string;
  label?: React.ReactNode;
}

export default (props: IProps) => {
  const history = useHistory();
  return (
    <Between>
      <Button className="hvr-backward" onClick={() => history.goBack()}>
        <MdArrowBack />
      </Button>
      <Button
        className="hvr-forward"
        onClick={() => history.push(props.next ?? "/")}
      >
        {props.label ?? <MdHome />}
      </Button>
    </Between>
  );
};
