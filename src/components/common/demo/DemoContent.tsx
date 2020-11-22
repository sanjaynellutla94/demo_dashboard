import React, { CSSProperties } from "react";

interface ContentProps {
  children: React.ReactNode;
  style?: CSSProperties;
}

const DemoContent = (props: ContentProps) => {
  const { children, style } = props;
  return (
    <div
      style={{
        ...style,
        zIndex: 1,
      }}
    >
      {children}
    </div>
  );
};

export default DemoContent;
