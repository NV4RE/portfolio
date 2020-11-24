import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Body from "../../components/Body";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Tag from "../../components/Tag";
import { Big } from "../../components/Typography";
import profile from "../../resources/images/profile.jpg";

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
