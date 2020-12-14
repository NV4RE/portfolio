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
  pages: string[];
}

export default (props: IProps) => {
  const history = useHistory();
  const pn = history.location.pathname.split("/");
  const currentPage = pn[pn.length - 1];

  const nextPage = getNextPage(currentPage, props.pages);
  console.log(nextPage, currentPage, props.pages);

  return (
    <Between>
      <Button className="hvr-backward" onClick={() => history.goBack()}>
        <MdArrowBack />
      </Button>
      <Button className="hvr-forward" onClick={() => history.push(nextPage)}>
        <MdHome />
      </Button>
    </Between>
  );
};

const getNextPage = (currentPage: string, pages: string[]): string => {
  const currentIndex = pages.indexOf(currentPage);
  return pages[currentIndex + 1] || "/";
};
