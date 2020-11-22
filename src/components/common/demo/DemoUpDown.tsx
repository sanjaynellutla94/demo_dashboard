import React from "react";
import { DemoIcon } from "../demo-components";

export default function DemoUpDown(props: {
  up: string | number;
  down: string | number;
  className?: string;
}) {
  const { up, down, className } = props;
  const containerClass = `d-flex fs-12 text-muted pt-10 pb-5 ${className}`;
  return (
    <div className={containerClass}>
      <div>
        <DemoIcon icon="arrow-up" className="text-secondary"></DemoIcon> {up}
      </div>
      <div className="pl-2">
        <DemoIcon icon="arrow-down" className="text-primary"></DemoIcon> {down}
      </div>
    </div>
  );
}
