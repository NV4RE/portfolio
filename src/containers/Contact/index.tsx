import React from "react";
import {
  FiGithub,
  FiGitlab,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import styled from "styled-components";
import Body from "../../components/Body";
import Icon from "../../components/Icon";
import Navigator from "../../components/Navigator";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <Container>
      <Body>
        <Icon
          link="mailto:t.temsong@gmail.com"
          icon={<FiMail />}
          label="t.temsong@gmail.com"
        />
        <Icon
          link="https://github.com/NV4RE"
          icon={<FiGithub />}
          label="github.com/NV4RE"
        />
        <Icon
          link="https://gitlab.com/NV4RE"
          icon={<FiGitlab />}
          label="gitlab.com/NV4RE"
        />

        <Icon
          link="https://www.linkedin.com/in/t-temsong"
          icon={<FiLinkedin />}
          label="linkedin.com/t-temsong"
        />
        <Icon
          link="https://www.instagram.com/nv.4re/"
          icon={<FiInstagram />}
          label="@nv.4re"
        />
        <Navigator />
      </Body>
    </Container>
  );
};
