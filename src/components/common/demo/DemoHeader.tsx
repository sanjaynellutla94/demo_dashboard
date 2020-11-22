import React, { ReactNode, CSSProperties } from "react";

export interface Props {
  children: ReactNode;
}

export default function DemoHeader(props: Props) {
  const { children } = props;
  const containerStyles: CSSProperties = {
    zIndex: 2,
  };
  return <div style={containerStyles}>{children}</div>;
}
