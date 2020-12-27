import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Body from "../../components/Body";
import Container from "../../components/Container";
import Navigator from "../../components/Navigator";
import Tag from "../../components/Tag";
import { resumeContext } from "../../context/resume";

const Input = styled.input`
  box-sizing: border-box;
  height: 28px;
  width: 220px;
  margin: 2px 2px;
  padding: 0 8px;
  text-align: center;

  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  background-color: inherit;
  -webkit-appearance: none;

  @media (max-width: 768px) {
    width: 100%;
  }
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

const Summary = () => {
  const resumeData = useContext(resumeContext);
  const [filtered, setFiltered] = useState(resumeData?.skills ?? []);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFiltered(
      (resumeData?.skills ?? []).filter((stack) => {
        return (
          stack.name.toLowerCase().includes(search) ||
          stack.alias.filter((a) => a.toLowerCase().includes(search)).length
        );
      })
    );
  }, [search, resumeData]);

  return (
    <Container>
      <Body loading={!resumeData}>
        <Content>
          <Input
            placeholder="Enter some keyword"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          {filtered.map((s) => (
            <Tag key={s.name}>{s.name}</Tag>
          ))}
        </Content>
        <Navigator pages={resumeData?.pages ?? []} />
      </Body>
    </Container>
  );
};

export default Summary;
