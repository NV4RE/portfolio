import React from "react";
import styled from "styled-components";
import {
  Github,
  Gitlab,
  Gmail,
  Instagram,
  Linkedin,
} from "../../components/Icon";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-width: 10rem;
  max-width: 20rem;
  align-items: center;
  background-color: #fbf7f0;
  border: 0px solid #fbf7f0;
  border-radius: 13px;
  box-shadow: 3px 10px 27px -8px rgba(0, 0, 0, 0.9);
  padding: 2rem;
  margin: 0 40px;
`;

const Links = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 10px 0 18px 0;
  border-radius: 8px;
  background-color: #1b262c;
  box-shadow: 3px 4px 10px -3px rgba(0, 0, 0, 0.9);

  & > * {
    margin: 2px 3px;
  }
`;

export default () => {
  return (
    <Container>
      <Card>
        <Links>
          <Github link="https://github.com/NV4RE" />
          <Gitlab link="https://gitlab.com/NV4RE" />
          <Gmail link="mailto:t.temsong@gmail.com" />
          <Linkedin link="https://www.linkedin.com/in/t-temsong/" />
          <Instagram link="https://www.instagram.com/nv.4re/" />
        </Links>
      </Card>
    </Container>
  );
};
