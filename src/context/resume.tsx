import React, { createContext, useEffect, useState } from "react";
import data from "../resume.json";
import { Resume } from "../types/resume";

export const resumeContext = createContext<Resume | undefined>(undefined);

interface IProps {
  children: React.ReactNode;
}

export default (props: IProps) => {
  const [resume, setResume] = useState<Resume | undefined>(undefined);

  useEffect(() => {
    setTimeout(() => {
      setResume(data);
    }, 2000);
  }, []);

  return (
    <resumeContext.Provider value={resume}>
      {props.children}
    </resumeContext.Provider>
  );
};