import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default class Example extends PureComponent {
  render() {
    return (
      // width={}
      // height={300}
      <ResponsiveContainer width={this.props.width} height={this.props.height}>
        <LineChart data={this.props.data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#fc715e"
            // activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#8a65c5" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
