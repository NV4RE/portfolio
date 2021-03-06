import React from "react";
import styled from "styled-components";
import Icon from "../Icon";

interface IProps {
  link: string;
  label: string;
}

const IconContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  color: #f6f6f6;
  cursor: pointer;

  box-sizing: border-box;
  width: 100%;

  padding: 10px;
  margin: 6px 0;
  border-radius: 8px;
  background-color: #1b262c;
  box-shadow: 3px 4px 10px -3px rgba(0, 0, 0, 0.9);
`;

const Label = styled.p`
  padding: 0 0 0 7px;
  margin: 0;
  text-decoration: none;
  text-align: center;
  font-weight: 800;
`;

const ContactLink = (props: IProps) => {
  return (
    <IconContainer
      className="hvr-float"
      onClick={() => window.open(props.link, "_blank", "noopener noreferrer")}
    >
      <Icon name={getDomainFromUrl(props.link)} /> <Label>{props.label}</Label>
    </IconContainer>
  );
};

const getDomainFromUrl = (url: string): string => {
  if (/mailto:/gi.test(url)) {
    return "mail";
  }
  return new URL(url).hostname;
};

export default ContactLink;
