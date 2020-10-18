import React, { useEffect, useRef, useState } from "react";

interface IProps {
  delay: number;
  children: JSX.Element;
}

export default (props: IProps) => {
  const timeout = useRef<NodeJS.Timeout>();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      console.log("show");
      setShow(true);
    }, props.delay);
  }, [props.delay]);

  return <>{show ? props.children : undefined}</>;
};
