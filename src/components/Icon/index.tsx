import React from "react";
import {
  FiGithub,
  FiGitlab,
  FiInstagram,
  FiLink,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import {
  RiArrowGoBackFill,
  RiContactsBookFill,
  RiContactsFill,
  RiHomeFill,
  RiMediumFill,
  RiMistLine,
  RiNewspaperFill,
  RiUser3Fill,
} from "react-icons/ri";

export enum ICON_NAME {
  Mail = "mail",
  Github = "github.com",
  Gitlab = "gitlab.com",
  Linkedin = "linkedin.com",
  Medium = "medium.com",
  Instagram = "instagram.com",

  Home = "home",
  Back = "back",
  Profile = "profile",
  AboutMe = "aboutme",
  Summary = "summary",
  Experiences = "experiences",
  Contact = "contact",
}

interface IProps {
  name: ICON_NAME | string;
}

const Icon = (props: IProps) => {
  switch (props.name) {
    case ICON_NAME.Mail:
      return <FiMail />;
    case ICON_NAME.Github:
      return <FiGithub />;
    case ICON_NAME.Gitlab:
      return <FiGitlab />;
    case ICON_NAME.Linkedin:
      return <FiLinkedin />;
    case ICON_NAME.Medium:
      return <RiMediumFill />;
    case ICON_NAME.Instagram:
      return <FiInstagram />;

    case ICON_NAME.Home:
      return <RiHomeFill />;
    case ICON_NAME.Profile:
      return <RiUser3Fill />;
    case ICON_NAME.AboutMe:
      return <RiContactsFill />;
    case ICON_NAME.Back:
      return <RiArrowGoBackFill />;
    case ICON_NAME.Summary:
      return <RiMistLine />;
    case ICON_NAME.Experiences:
      return <RiNewspaperFill />;
    case ICON_NAME.Contact:
      return <RiContactsBookFill />;

    default:
      return <FiLink />;
  }
};

export default Icon;
