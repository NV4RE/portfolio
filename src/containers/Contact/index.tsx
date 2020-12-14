import React, { useContext } from "react";
import { FiMail } from "react-icons/fi";
import Body from "../../components/Body";
import ContactLink from "../../components/ContactLink";
import Container from "../../components/Container";
import Navigator from "../../components/Navigator";
import { resumeContext } from "../../context/resume";

export default () => {
  const resumeData = useContext(resumeContext);
  return (
    <Container>
      <Body>
        {resumeData?.contacts.map((c) => {
          return (
            <ContactLink link={c.link} icon={<FiMail />} label={c.label} />
          );
        })}
        <Navigator />
      </Body>
    </Container>
  );
};
