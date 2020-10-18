import React from "react";
import ReactWordcloud from "react-wordcloud";
import styled from "styled-components";
import Navigator from "../../components/Navigator";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
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
          rotations: 3,
          rotationAngles: [-45, 45],
          enableOptimizations: false,
          enableTooltip: false,
          fontFamily: "Nurom-Bold",
          fontSizes: [
            (window.innerWidth + window.innerHeight) / 90,
            (window.innerWidth + window.innerHeight) / 40,
          ],
          padding: 6,
          transitionDuration: 0,
          colors: ["14274e", "#394867", "#9ba4b4", "#f1f6f9"],
        }}
        words={words.map((w) => ({ value: Math.random(), text: w }))}
      />
      <Navigator />
    </Container>
  );
};
