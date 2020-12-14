import React from "react";
import styled from "styled-components";
import { Experience as IExperience } from "../../types/resume";

interface IProps extends IExperience {}

const IconContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
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

const Experience = (props: IProps) => {
  return (
    <IconContainer>
      <Avartar src={props.logo} />
      {props.company_name}
      {props.job_title}
      {props.description}
    </IconContainer>
  );
};

export default Experience;
