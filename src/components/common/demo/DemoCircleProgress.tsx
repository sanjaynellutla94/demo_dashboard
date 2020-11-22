import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DemoCircleProgress = (props: any) => {
  const options = {
    ...props,
  };
  return (
    <CircularProgressbar {...options}>{props.children}</CircularProgressbar>
  );
};

export default DemoCircleProgress;
