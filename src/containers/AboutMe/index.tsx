import React from "react";
import { MdApps } from "react-icons/md";
import styled from "styled-components";
import Body from "../../components/Body";
import Container from "../../components/Container";
import Navigator from "../../components/Navigator";
import { Big, Paragraph, Title } from "../../components/Typography";

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export default () => {
  return (
    <Container>
      <Body>
        <Title>About me</Title>
        <Content>
          <Paragraph>
            <Big>Hi,</Big> I’m Tod, a highly motivated full-stack developer
            living in Bangkok, Thailand.
          </Paragraph>
          <Paragraph>
            Experienced in full-stack developer, and researcher, with web
            development are one of my strongest skills, being proactive to the
            client’s needs and understanding their businesses, I have completed
            and delivered multiple projects to clients within budget and in a
            timely manner.
          </Paragraph>
          <Paragraph>
            On a personal level, you can never have enough knowledge, keeping up
            with the latest technology and willing to take on new challenges
            with a “Can Do” attitude. In my free time, I either workout at the
            gym or shoot street photography with my trusted camera.
          </Paragraph>
          <Paragraph>
            Well this is me in a nutshell, I’m open for opportunities and if you
            have any cool projects, do get in touch with me even if it’s only
            for a cup of tea!
          </Paragraph>
        </Content>
        <Navigator next="summary" label={<MdApps />} />
      </Body>
    </Container>
  );
};
