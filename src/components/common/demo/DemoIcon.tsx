import React from "react";

const FbIcon = (props: any) => {
  const { icon, className } = props;
  return <i className={`fa fa-${icon} ${className}`}></i>;
};

FbIcon.defaultProps = {};

export default FbIcon;
