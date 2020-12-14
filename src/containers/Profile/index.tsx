import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Body from "../../components/Body";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Tag from "../../components/Tag";
import { Big } from "../../components/Typography";
import { resumeContext } from "../../context/resume";
import profile from "../../resources/images/profile.jpg";

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 8rem;
  margin: 0 0 15px 0;
`;

export default () => {
  const history = useHistory();
  const resumeData = useContext(resumeContext);

  return (
    <Container>
      <Body>
        <ProfilePicture src={profile} />

        <Big>
          {resumeData?.profile.f_name} {resumeData?.profile.l_name}
        </Big>
        <Tag>{resumeData?.profile.jd}</Tag>

        <Button className="hvr-grow" onClick={() => history.push("/aboutme")}>
          Know me better ?
        </Button>
      </Body>
    </Container>
  );
};
