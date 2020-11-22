import React from "react";
import { useSelector } from "react-redux";
import { DemoProgressGraph, DemoUpDown } from "../../common/demo-components";

export default function DailyProgress() {
  let state = {
    progress: [],
    revenue: "",
    upDown: {
      up: "",
      down: "",
    },
  };
  state = useSelector((store: any) => {
    const { revenueProgress } = store.dashboard.home.home.data;
    if (revenueProgress) {
      const { stats, revenue, upDown } = revenueProgress;
      return {
        progress: stats,
        revenue,
        upDown,
      };
    }
    return state;
  });
  return (
    <div className="px-3">
      <DemoProgressGraph data={state.progress} width="100%" height={150} />
      <div className="text-center py-20 fs-24">
        <div className="text-secondary">{state.revenue}</div>
        <DemoUpDown
          className="justify-content-center"
          up={state.upDown.up}
          down={state.upDown.down}
        ></DemoUpDown>
      </div>
    </div>
  );
}
