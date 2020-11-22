import React from "react";

import { BarChart, Bar, ResponsiveContainer } from "recharts";

const DemoProgressGraph = (props) => {
  const { data, width, height } = props;
  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart data={data}>
        <Bar dataKey="pv" stackId="a" barSize={10} fill="#8a65c5" />
        <Bar dataKey="uv" stackId="a" barSize={10} fill="#eee" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DemoProgressGraph;
