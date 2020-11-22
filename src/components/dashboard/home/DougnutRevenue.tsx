import React from "react";
import { DemoCircleProgress, DemoUpDown } from "../../common/demo-components";

const VALUE = 0.6;
const MAX_VALUE = 1;
const LABEL = `$${VALUE * 100}`;
const STYLES = {
  path: {
    stroke: `#8a65c5`,
  },
  text: {
    fill: "#8a65c5",
    fontSize: "20px",
  },
};
const CONTAINER_CLASS = "px-30";

export default function DougnutRevenue() {
  return (
    <div className={CONTAINER_CLASS}>
      <div>
        <DemoCircleProgress
          styles={STYLES}
          value={VALUE}
          maxValue={MAX_VALUE}
          text={LABEL}
        ></DemoCircleProgress>
      </div>
      <div>
        <DemoUpDown
          className="justify-content-center"
          up="1020"
          down="1010"
        ></DemoUpDown>
      </div>
    </div>
  );
}
