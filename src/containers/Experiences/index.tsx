import React, { useContext } from "react";
import styled from "styled-components";
import Body from "../../components/Body";
import Container from "../../components/Container";
import Navigator from "../../components/Navigator";
import { Big, Paragraph, Title } from "../../components/Typography";
import { resumeContext } from "../../context/resume";

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export default () => {
  const resumeData = useContext(resumeContext);

  return (
    <Container>
      <Body>
        <Title>Experiences</Title>
        <Content>
          {resumeData?.about_me.map((line, index) => {
            return (
              <Paragraph key={index}>
                {index === 0 ? <Big>Hi, </Big> : ""}
                {line}
              </Paragraph>
            );
          })}
        </Content>
        <Navigator pages={resumeData?.pages ?? []} />
      </Body>
    </Container>
  );
};
