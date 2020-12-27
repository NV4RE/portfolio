import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Resume } from "../types/resume";

export const resumeContext = createContext<Resume | undefined>(undefined);

interface IProps {
  children: React.ReactNode;
}

const ResumeProvider = (props: IProps) => {
  const [resume, setResume] = useState<Resume | undefined>(undefined);

  useEffect(() => {
    (async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const res = await axios.get(
          `${
            process.env["REACT_APP_BACKEND_URL"]
          }/resume.json?k=${urlParams.get("k")}`
        );
        setResume(res.data);
      } catch (error) {
        console.log(error);
        alert(`Ohhh, think my backend are down :(`);
      }
    })();
  }, []);

  return (
    <resumeContext.Provider value={resume}>
      {props.children}
    </resumeContext.Provider>
  );
};

export default ResumeProvider;
