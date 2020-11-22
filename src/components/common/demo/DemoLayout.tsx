import React from "react";
import DemoHeader from "./DemoHeader";
import DemoSidebar from "./DemoSidebar";
import DemoContent from "./DemoContent";

interface Props {
  children: React.ReactNode;
}

const DemoLayout = (props: Props) => {
  const { children } = props;
  return <div>{children}</div>;
};

DemoLayout.Sidebar = DemoSidebar;
DemoLayout.Header = DemoHeader;
DemoLayout.Content = DemoContent;

export default DemoLayout;
