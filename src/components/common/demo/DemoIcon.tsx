import React from "react";

const FbIcon = (props: any) => {
  const { icon, className, spin } = props;
  return (
    <i className={`fa fa-${icon} ${spin ? "fa-spin" : ""} ${className}`}></i>
  );
};

FbIcon.defaultProps = {};

export default FbIcon;
