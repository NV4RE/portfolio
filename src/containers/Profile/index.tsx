import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Body from "../../components/Body";
import Button from "../../components/Button";
import Tag from "../../components/Tag";
import { Big } from "../../components/Typography";
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

export default () => {
  const history = useHistory();
  return (
    <Container>
      <Body>
        <ProfilePicture src={profile} />

        <Big>Tossaporn Temsong</Big>
        <Tag>Full-Stack Developer</Tag>

        <Button className="hvr-grow" onClick={() => history.push("/aboutme")}>
          Know me better ?
        </Button>
      </Body>
    </Container>
  );
};
