import React from "react";
import { useHistory } from "react-router-dom";
import { ShakeCrazy } from "reshake";
import styled from "styled-components";
import Delay from "../../components/Delay";
import {
  Github,
  Gitlab,
  Gmail,
  Instagram,
  Linkedin,
} from "../../components/Icon";
import profile from "../../resources/images/profile.jpg";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(14deg, #000000, #16222a, #14274e, #394867);
  background-size: 400% 400%;
  animation: gradient 20s ease infinite;
  overflow: hidden;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
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

const ProfilePicture = styled.img`
  border-radius: 50%;
  box-shadow: 5px 7px 25px -6px rgba(0, 0, 0, 0.9);
  height: 8rem;
  margin: 0 0 15px 0;
`;

const Name = styled.p`
  font-family: "Nurom-Bold";
  padding: 2px 0 4px 0;
  margin: 0;
  font-size: 1.4rem;
  white-space: nowrap;
`;

const Title = styled.p`
  padding: 2px 0;
  margin: 0;
  font-size: 1rem;
  white-space: nowrap;
  font-weight: 800;
  color: #555555;
`;

const Paragraph = styled.p`
  padding: 2px 0 4px 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 100;
  word-wrap: break-word;
  color: #1a1c20;
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

const Button = styled.div`
  font-family: "Nurom-Bold";
  padding: 8px 14px;
  margin: 20px 0;
  border-radius: 4px;
  background-color: #1b262c;
  box-shadow: 3px 4px 10px -3px rgba(0, 0, 0, 0.9);
  color: #f6f6f6;
  cursor: pointer;
`;

export default () => {
  const history = useHistory();
  return (
    <Container>
      <Card>
        <ProfilePicture src={profile} />

        <Name>Tossaporn Temsong</Name>
        <Title>Full-Stack Developer</Title>
        <Links>
          <Github link="https://github.com/NV4RE" />
          <Gitlab link="https://gitlab.com/NV4RE" />
          <Gmail link="mailto:t.temsong@gmail.com" />
          <Linkedin link="https://www.linkedin.com/in/t-temsong/" />
          <Instagram link="https://www.instagram.com/nv.4re/" />
        </Links>
        <Paragraph>
          A dedicated and reliable full-stack developer with 4+ years experience
          in web development, delivered monolith and microservice projects on
          production, experience pain points and always seeking to further
          improve teams and my productivities.
        </Paragraph>
        <Delay delay={5000}>
          <ShakeCrazy h={2} v={2} r={5} q={20} fixed freez>
            <Button onClick={() => history.push("/aboutme")}>
              Want to know me better ?
            </Button>
          </ShakeCrazy>
        </Delay>
      </Card>
    </Container>
  );
};
