import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100vw;
  min-height: 100vh;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin: 0;
  overflow: auto;
`;

const Body = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  overflow: auto;

  padding: 65px 40px 40px;
  margin: 50px 20vw;
  height: fit-content;
  max-width: 1024px;
  background-color: #f6f6f6;

  @media (max-width: 768px) {
    margin: 32px 15px;
  }
`;

const Title = styled.p`
  font-family: "Nurom-Bold";
  padding: 2px 0 4px 0;
  margin: 0;
  font-size: 2.2rem;
  white-space: nowrap;
  color: #222222;
`;

const Paragraph = styled.p`
  padding: 18px 0 4px 0;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;
  word-wrap: break-word;
  color: #222222;
`;

const Big = styled.span`
  font-size: 1.2em;
  font-weight: 800;
`;

const Between = styled.div`
  display: flex;
  flex: 1 0 100%;
  width: 100%;

  justify-content: space-between;
`;

const Button = styled.div`
  font-family: "Nurom-Bold";
  padding: 8px 14px;
  margin: 20px 0 0 0;
  background-color: #1b262c;
  color: #f6f6f6;
  cursor: pointer;
`;

export default () => {
  const history = useHistory();
  return (
    <Container>
      <Body>
        <Title>About me</Title>
        <Paragraph>
          <Big>Hi,</Big> I’m Tod, a highly motivated full-stack developer living
          in Bangkok, Thailand.
        </Paragraph>
        <Paragraph>
          Experienced in frontend, backend, and researcher, with web development
          being one of my strongest skills, being proactive to the client’s
          needs and understanding their businesses, I have completed and
          delivered multiple projects to clients within budget and in a timely
          manner.
        </Paragraph>
        <Paragraph>
          On a personal level, you can never have enough knowledge, keeping up
          with the latest technology and willing to take on new challenges with
          a ‘Can Do’ attitude. In my free time, I either workout at the gym or
          shoot street photography with my trusted camera.
        </Paragraph>
        <Paragraph>
          Well this is me in a nutshell, I’m open for opportunities and if you
          have any cool projects, do get in touch with me even if it’s only for
          a cup of tea!
        </Paragraph>
        <Between>
          <Button className="hvr-backward" onClick={() => history.goBack()}>
            {"<<"}
          </Button>
          <Button
            className="hvr-forward"
            onClick={() => history.push("/experiences")}
          >
            Whom I worked for
          </Button>
        </Between>
      </Body>
    </Container>
  );
};
