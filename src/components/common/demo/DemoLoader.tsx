import React from "react";
import { DemoIcon } from "../demo-components";

const FbLoader = (props: any) => {
  return (
    <div>
      <DemoIcon icon="spinner" spin></DemoIcon> Loading .....
    </div>
  );
};

FbLoader.defaultProps = {};

export default FbLoader;
