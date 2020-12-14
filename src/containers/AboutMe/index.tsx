import React, { useContext } from "react";
import { MdApps } from "react-icons/md";
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
        <Title>About me</Title>
        <Content>
          {resumeData?.about_me.map((line, index) => {
            return (
              <Paragraph>
                {index === 0 ? <Big>Hi, </Big> : ""}
                {line}
              </Paragraph>
            );
          })}
        </Content>
        <Navigator next="summary" label={<MdApps />} />
      </Body>
    </Container>
  );
};
