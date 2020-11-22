import React from "react";
import { Image } from "react-bootstrap";

const FbImg = (props: any) => {
  const {
    className,
    src,
    rounded,
    roundedCircle,
    thumbnail,
    fluid,
    width,
    height,
  } = props;
  return (
    <React.Fragment>
      <Image
        className={className}
        src={src}
        width={width}
        height={height}
        rounded={rounded}
        roundedCircle={roundedCircle}
        thumbnail={thumbnail}
        fluid={fluid}
      />
    </React.Fragment>
  );
};

export default FbImg;
