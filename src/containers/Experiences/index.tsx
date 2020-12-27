import React, { useContext } from "react";
import styled from "styled-components";
import Body from "../../components/Body";
import Container from "../../components/Container";
import Experience from "../../components/Experience";
import Navigator from "../../components/Navigator";
import { Title } from "../../components/Typography";
import { resumeContext } from "../../context/resume";

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;
const Experiences = () => {
  const resumeData = useContext(resumeContext);

  return (
    <Container>
      <Body loading={!resumeData}>
        <Title>Experiences</Title>
        <Content>
          {resumeData?.experiences.map((exp, index) => {
            return <Experience key={index} {...exp} />;
          })}
        </Content>
        <Navigator pages={resumeData?.pages ?? []} />
      </Body>
    </Container>
  );
};

export default Experiences;
