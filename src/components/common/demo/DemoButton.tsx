import React from "react";
import { Button } from "react-bootstrap";
import DemoIcon from "./DemoIcon";

export interface Props {
  variant?: string;
  type?: string;
  active?: string;
  title?: string;
  showLoader?: string;
  icon?: string;
  pill?: string;
  className: string;
  block?: boolean;
  children?: React.ReactChild;
  disabled?: boolean;
  size?: "sm" | "lg" | undefined;
  onClick?: Function | undefined;
}

const FbButton = (props: any) => {
  const {
    variant,
    type,
    size,
    active,
    title,
    showLoader,
    icon,
    onClick,
    block,
    pill,
    className,
    disabled,
    children,
  } = props;
  let template = null;
  if (children) {
    template = children;
  } else {
    const loaderTag = showLoader ? <div></div> : null;
    template = (
      <React.Fragment>
        {icon && (
          <DemoIcon
            icon={icon}
            className="mr-1 fs-20"
            active={active}
          ></DemoIcon>
        )}
        {title}
        {loaderTag}
      </React.Fragment>
    );
  }
  return (
    <Button
      className={`${className} ${pill ? "btn-pill" : ""}`}
      type={type || "button"}
      variant={variant}
      disabled={disabled}
      block={block}
      size={size}
      onClick={onClick}
    >
      {template}
    </Button>
  );
};

FbButton.defaultProps = {};

FbButton.propTypes = {
  // readOnly: PropTypes.bool,
};

export default FbButton;
