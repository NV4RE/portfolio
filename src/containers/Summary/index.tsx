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
  width: 185px;
  margin: 2px 2px;

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
      <Body>
        <Content>
          <Input
            placeholder="Looking for something ?"
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
