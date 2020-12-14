import React, { createContext, useEffect, useState } from "react";
import data from "../resume.json";
import { Resume } from "../types/resume";

export const resumeContext = createContext<Resume | undefined>(undefined);

interface IProps {
  children: React.ReactNode;
}

const ResumeProvider = (props: IProps) => {
  const [resume, setResume] = useState<Resume | undefined>(undefined);

  useEffect(() => {
    setTimeout(() => {
      setResume(data);
    }, 200);
  }, []);

  return (
    <resumeContext.Provider value={resume}>
      {props.children}
    </resumeContext.Provider>
  );
};

export default ResumeProvider;
