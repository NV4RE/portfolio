import React from "react";
import ReactWordcloud from "react-wordcloud";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const words = [
  "Golang",
  "Typescript",
  "Javascript",
  "Node.js",
  "Clean Architecture",
  "Domain Driven Design",
  "Repository",
  "Functional Programming",
  "SAGA",
  "Koa.js",
  "Express.js",
  "Gin",
  "Rest",
  "GraphQL",
  "GRPC",
  "Kafka",
  "AMQP",
  "MQTT",
  "Websocket",
  "Redis",
  "Elasticsearch",
  "MongoDB",
  "Postgres",
  "Docker",
  "Jaeger",
  "Github flow",
  "Gitlab CI",
  "Microservice",
  "Monolith",
  "Kubernetes",
  "Helm",
  "NGINX",
  "KONG",
  "React",
  "Vanilla",
  "Hook",
  "Recompose",
  "antd",
  "Material Design",
  "styled-component",
  "SCSS",
  "Ramda",
  "Lodash",
  "Embedded",
  "Buildroot",
  "KiCad",
  "EAGLE",
  "OSM",
  "Tensorflow",
  "Or-tools",
  "AWS",
  "GCP",
];

export default () => {
  return (
    <Container>
      <ReactWordcloud
        options={{
          rotations: 1,
          rotationAngles: [0, 0],
          enableOptimizations: true,
          enableTooltip: false,
          fontFamily: "Nurom-Bold",
          fontSizes: [10, 60],
          padding: 7,
          transitionDuration: 500,
        }}
        words={words.map((w) => ({ value: Math.random(), text: w }))}
      />
    </Container>
  );
};
