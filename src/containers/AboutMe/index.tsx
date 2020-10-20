import React from "react";
import styled from "styled-components";
import Navigator from "../../components/Navigator";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 800rem;
  align-items: flex-start;
  padding: 2rem;
  margin: 0 20vw;

  @media (max-width: 768px) {
    margin: 0 15px;
  }
`;

const Title = styled.p`
  font-family: "Nurom-Bold";
  padding: 2px 0 4px 0;
  margin: 0;
  font-size: 2.2rem;
  white-space: nowrap;
  color: #f6f6f6;
`;

const Paragraph = styled.p`
  padding: 2px 0 4px 0;
  margin: 0;
  font-size: 1.4rem;
  font-weight: 100;
  word-wrap: break-word;
  color: #f6f6f6;
`;

const Big = styled.span`
  font-size: 1.2em;
  font-weight: 800;
`;

export default () => {
  return (
    <Container>
      <Body>
        <Title>About me</Title>
        <Paragraph>
          <Big>Hello,</Big> I'm Full-Stack Developer living in Bangkok,
          Thailand.
        </Paragraph>
        <Paragraph>
          Over 4 years of experiences in web development, delivered multiple
          projects to clients.
        </Paragraph>
        <Paragraph>Enthusiastic</Paragraph>
        <Paragraph>
          name: Tossaporn Temsong living in: Bangkok, Thailand
        </Paragraph>
        <Paragraph>job: Full-Stack Developer</Paragraph>
        <Paragraph>
          exps: Over 4 years of experiences in web development, delivered
          multipleprojects to clients.
        </Paragraph>
        <Paragraph>
          others: Researcher, Embedded System Engineer, Advisor hobbies:
          Workout, Street Photographer, Traveler
        </Paragraph>
        <Paragraph>
          strengths: enthusiasm to seek new knowlage, Fast learner,
          Self-motivated, Willing to take on new challenges
        </Paragraph>
        <Paragraph>
          languages: Golang, Typescript, Javascipt, HTML, CSS, Python
        </Paragraph>
        <Paragraph>
          characteristic: Design based on real world use-cases, Precisely
          understand bussiness before started works,
        </Paragraph>
        <Paragraph>
          If you have any cool projects or opportunities, get in touch!
        </Paragraph>
      </Body>

      <Navigator next="/experiences" />
    </Container>
  );
};
