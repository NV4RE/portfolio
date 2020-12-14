import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import Icon from "../Icon";

const Between = styled.div`
  display: flex;
  flex: 1 0 100%;
  width: 100%;
  justify-content: space-between;
`;

interface IProps {
  pages: string[];
}

const Navigator = (props: IProps) => {
  const history = useHistory();
  const pn = history.location.pathname.split("/");
  const currentPage = pn[pn.length - 1];

  const currentIndex = props.pages.indexOf(currentPage);

  const prevPage = props.pages[(currentIndex - 1) % props.pages.length] || "/";
  const nextPage = props.pages[(currentIndex + 1) % props.pages.length] || "/";

  return (
    <Between>
      <Button className="hvr-backward" onClick={() => history.push(prevPage)}>
        <Icon name={prevPage} />
      </Button>
      <Button className="hvr-forward" onClick={() => history.push(nextPage)}>
        <Icon name={nextPage} />
      </Button>
    </Between>
  );
};

export default Navigator;
