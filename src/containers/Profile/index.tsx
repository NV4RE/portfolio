import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import profile from "../../resources/images/profile.jpg";

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
  border-radius: 8px;
  box-shadow: 3px 10px 27px -8px rgba(0, 0, 0, 0.9);
  padding: 2rem;
  margin: 0 40px;
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

const Button = styled.div`
  font-family: "Nurom-Bold";
  padding: 8px 14px;
  margin: 20px 0 0 0;
  border-radius: 4px;
  background-color: #1b262c;
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

        <Button className="hvr-grow" onClick={() => history.push("/aboutme")}>
          Know me better ?
        </Button>
      </Card>
    </Container>
  );
};
