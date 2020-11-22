import React, { CSSProperties, ReactNode } from "react";
import "../../../styles/common/sidebar.scss";

export interface Props {
  width: string | number | undefined;
  right?: boolean;
  overlay?: boolean;
  overlayClasses?: boolean;
  className?: string;
  children: ReactNode;
  onOverlayClick?: Function;
  onMouseOver?: Function;
  onMouseLeave?: Function;
}

export default function DemoSidebar(props: Props) {
  const {
    width,
    children,
    right,
    className,
    overlayClasses,
    overlay,
    onOverlayClick,
    onMouseOver,
    onMouseLeave,
  } = props;
  const containerClasses: string = right ? "Sidebar-right" : "Sidebar-left";
  const containerStyles: CSSProperties = {
    width,
    zIndex: 3,
  };
  const overlayTemplate = overlay ? (
    <div
      onClick={() => {
        if (onOverlayClick) onOverlayClick();
      }}
      className={`Overlay ${overlayClasses || ""}`}
    ></div>
  ) : null;
  return (
    <React.Fragment>
      <div
        onMouseEnter={(e) => {
          if (onMouseOver) onMouseOver(e);
        }}
        onMouseLeave={(e) => {
          if (onMouseLeave) onMouseLeave(e);
        }}
        className={`${containerClasses} ${className}`}
        style={containerStyles}
      >
        <div>{children}</div>
      </div>
      {overlayTemplate}
    </React.Fragment>
  );
}
