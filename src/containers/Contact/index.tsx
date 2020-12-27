import React, { useContext } from "react";
import Body from "../../components/Body";
import ContactLink from "../../components/ContactLink";
import Container from "../../components/Container";
import Navigator from "../../components/Navigator";
import { resumeContext } from "../../context/resume";

const Contact = () => {
  const resumeData = useContext(resumeContext);
  return (
    <Container>
      <Body loading={!resumeData}>
        {resumeData?.contacts.map((c) => {
          return <ContactLink key={c.link} link={c.link} label={c.label} />;
        })}
        <Navigator pages={resumeData?.pages ?? []} />
      </Body>
    </Container>
  );
};

export default Contact;
