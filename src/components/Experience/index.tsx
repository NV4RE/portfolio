import * as fns from "date-fns";
import React from "react";
import styled from "styled-components";
import { Experience as IExperience } from "../../types/resume";
import { Big, Paragraph, Small } from "../Typography";

interface IProps extends IExperience {}

const IconContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  color: #f6f6f6;

  box-sizing: border-box;
  width: 100%;

  padding: 23px;
  margin: 6px 0;
  border-radius: 8px;
  background-color: #1b262c;
  box-shadow: 3px 4px 10px -3px rgba(0, 0, 0, 0.9);
`;

const Avartar = styled.img`
  border-radius: 50%;
  height: 45px;
  margin: 0 0 15px 0;
`;

const Body = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 12px;
`;

const Experience = (props: IProps) => {
  return (
    <IconContainer>
      <Avartar src={props.logo} />
      <Body>
        <Big>{props.job_title}</Big>
        <Paragraph>
          {props.company_name}{" "}
          <Small>
            {formatDate(props.from)} — {formatDate(props.to)}
          </Small>
        </Paragraph>

        {props.description}
      </Body>
    </IconContainer>
  );
};

const formatDate = (d: any): string => {
  if (!d) {
    return "now";
  }
  return fns.format(d, "MMM/yyyy");
};

export default Experience;
