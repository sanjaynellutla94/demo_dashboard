import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DemoGridLayout = (props) => {
  return (
    <ResponsiveReactGridLayout {...props}>
      {props.children}
    </ResponsiveReactGridLayout>
  );
};

export default DemoGridLayout;
