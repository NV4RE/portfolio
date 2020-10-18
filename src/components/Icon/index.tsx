import React from "react";
import { Shake } from "reshake";
import styled from "styled-components";
import github from "../../resources/svg/github.svg";
import gitlab from "../../resources/svg/gitlab.svg";
import gmail from "../../resources/svg/gmail.svg";
import instagram from "../../resources/svg/instagram.svg";
import linkedin from "../../resources/svg/linkedin.svg";

interface IProps {
  link?: string;
}

const Img = styled.img`
  height: 2rem;
`;

const Image = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => {
  return (
    <Shake h={2} v={3} r={1}>
      <Img {...props} />
    </Shake>
  );
};

export const Github = (props: IProps) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <Image src={github} alt="github" />
    </a>
  );
};

export const Gitlab = (props: IProps) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <Image src={gitlab} alt="gitlab" />
    </a>
  );
};

export const Gmail = (props: IProps) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <Image src={gmail} alt="gmail" />
    </a>
  );
};

export const Linkedin = (props: IProps) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <Image src={linkedin} alt="linkedin" />
    </a>
  );
};

export const Instagram = (props: IProps) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <Image src={instagram} alt="instagram" />
    </a>
  );
};
