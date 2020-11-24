import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Body from "../../components/Body";
import Navigator from "../../components/Navigator";
import Tag from "../../components/Tag";

interface ISkill {
  name: string;
  alias: string[];
  experienced: boolean;
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  box-sizing: border-box;
  height: 32px;
  margin: 2px 8px 30px 8px;

  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.2rem;
`;

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  ::after {
    content: "";
    flex: auto;
  }
`;

const stacks: ISkill[] = [
  {
    name: "Golang",
    alias: ["go"],
    experienced: true,
  },
  {
    name: "Typescript",
    alias: ["ts", "nodejs", "node.js"],
    experienced: true,
  },
  {
    name: "Javascript",
    alias: ["js", "nodejs", "node.js"],
    experienced: true,
  },
  {
    name: "Clean Architecture",
    alias: [],
    experienced: true,
  },
  {
    name: "Domain Driven Design",
    alias: ["DDD", "design pattern"],
    experienced: true,
  },
  {
    name: "Repository Pattern",
    alias: ["design pattern"],
    experienced: true,
  },
  {
    name: "Functional Programming",
    alias: ["design pattern"],
    experienced: true,
  },
  {
    name: "SAGA Pattern",
    alias: ["distributed transactions", "design pattern"],
    experienced: true,
  },
  {
    name: "Koa.js",
    alias: ["nodejs"],
    experienced: true,
  },
  {
    name: "Express.js",
    alias: ["nodejs"],
    experienced: true,
  },
  {
    name: "Gin",
    alias: ["go"],
    experienced: true,
  },
  {
    name: "Rest",
    alias: [],
    experienced: true,
  },
  {
    name: "GraphQL",
    alias: [],
    experienced: false,
  },
  {
    name: "GRPC",
    alias: ["proto"],
    experienced: true,
  },
  {
    name: "Apache Kafka",
    alias: [],
    experienced: true,
  },
  {
    name: "AMQP",
    alias: ["message queue"],
    experienced: true,
  },
  {
    name: "MQTT",
    alias: ["iot"],
    experienced: true,
  },
  {
    name: "Websocket",
    alias: ["ws"],
    experienced: true,
  },
  {
    name: "Redis",
    alias: ["database"],
    experienced: true,
  },
  {
    name: "Elasticsearch",
    alias: ["database"],
    experienced: true,
  },
  {
    name: "MongoDB",
    alias: ["database"],
    experienced: true,
  },
  {
    name: "Postgres",
    alias: ["database"],
    experienced: false,
  },
  {
    name: "Docker",
    alias: ["container"],
    experienced: true,
  },
  {
    name: "Jaeger",
    alias: ["tracer"],
    experienced: true,
  },
  {
    name: "Logstash",
    alias: [],
    experienced: true,
  },
  {
    name: "Kafka Connect",
    alias: [],
    experienced: true,
  },
  {
    name: "Github flow",
    alias: ["ci/cd"],
    experienced: true,
  },
  {
    name: "Gitlab CI",
    alias: ["ci/cd"],
    experienced: true,
  },
  {
    name: "Microservice",
    alias: [],
    experienced: true,
  },
  {
    name: "Monolith",
    alias: [],
    experienced: true,
  },
  {
    name: "Kubernetes",
    alias: [],
    experienced: true,
  },
  {
    name: "Helm",
    alias: [],
    experienced: true,
  },
  {
    name: "NGINX",
    alias: [],
    experienced: true,
  },
  {
    name: "KONG",
    alias: ["gateway"],
    experienced: true,
  },
  {
    name: "React",
    alias: [],
    experienced: true,
  },
  {
    name: "Hook",
    alias: ["react"],
    experienced: true,
  },
  {
    name: "Recompose",
    alias: ["react"],
    experienced: true,
  },
  {
    name: "antd",
    alias: ["react"],
    experienced: true,
  },
  {
    name: "Material Design",
    alias: ["react"],
    experienced: true,
  },
  {
    name: "styled-component",
    alias: ["react"],
    experienced: true,
  },
  {
    name: "SASS",
    alias: [],
    experienced: true,
  },
  {
    name: "Ramda",
    alias: [],
    experienced: true,
  },
  {
    name: "Lodash",
    alias: [],
    experienced: true,
  },
  {
    name: "Embedded System",
    alias: ["iot"],
    experienced: true,
  },
  {
    name: "Buildroot",
    alias: ["iot"],
    experienced: true,
  },
  {
    name: "KiCad",
    alias: ["iot"],
    experienced: true,
  },
  {
    name: "AUTODESK EAGLE",
    alias: ["iot"],
    experienced: true,
  },
  {
    name: "OpenStreetMap",
    alias: ["osm"],
    experienced: true,
  },
  {
    name: "Open Source Routing Machine",
    alias: ["OSRM"],
    experienced: true,
  },
  {
    name: "Tensorflow",
    alias: ["ML", "machine learning"],
    experienced: false,
  },
  {
    name: "Or-tools",
    alias: ["optimization"],
    experienced: true,
  },
  {
    name: "Amazon Web Services",
    alias: ["AWS"],
    experienced: true,
  },
  {
    name: "Google Cloud Platform",
    alias: ["GCP"],
    experienced: true,
  },
];

export default () => {
  const [filtered, setFiltered] = useState(stacks);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFiltered(
      stacks.filter((stack) => {
        return (
          stack.name.toLowerCase().includes(search) ||
          stack.alias.filter((a) => a.toLowerCase().includes(search)).length
        );
      })
    );
  }, [search]);

  return (
    <Container>
      <Body>
        <Input onChange={(e) => setSearch(e.target.value.toLowerCase())} />
        <Content>
          {filtered.map((s) => (
            <Tag key={s.name}>{s.name}</Tag>
          ))}
        </Content>
        <Navigator next="/contact" nextName="Contact" />
      </Body>
    </Container>
  );
};
