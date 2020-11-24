import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Body from "../../components/Body";
import Button from "../../components/Button";
import profile from "../../resources/images/profile.jpg";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
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

export default () => {
  const history = useHistory();
  return (
    <Container>
      <Body>
        <ProfilePicture src={profile} />

        <Name>Tossaporn Temsong</Name>
        <Title>Full-Stack Developer</Title>

        <Button className="hvr-grow" onClick={() => history.push("/aboutme")}>
          Know me better ?
        </Button>
      </Body>
    </Container>
  );
};
