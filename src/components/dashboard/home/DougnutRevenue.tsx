import React from "react";
import { useSelector } from "react-redux";
import { DemoCircleProgress, DemoUpDown } from "../../common/demo-components";

const MAX_VALUE = 1;
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
  let state = {
    stats: "",
    revenue: "",
    upDown: {
      up: "",
      down: "",
    },
  };
  state = useSelector((store: any) => {
    const { dougnutStats } = store.dashboard.home.home.data;
    if (dougnutStats) {
      const { stats, revenue, upDown } = dougnutStats;
      return {
        stats,
        revenue,
        upDown,
      };
    }
    return state;
  });
  return (
    <div className={CONTAINER_CLASS}>
      <div>
        <DemoCircleProgress
          styles={STYLES}
          value={state.stats}
          maxValue={MAX_VALUE}
          text={state.revenue}
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
