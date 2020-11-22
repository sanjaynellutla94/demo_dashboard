import React from "react";
import FbIcon from "./DemoIcon";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const FbSearchbar = (props: any) => {
  return (
    <InputGroup className="mb-3">
      <FormControl
        disabled
        placeholder="Search"
        aria-describedby="basic-addon1"
      />
      <InputGroup.Append>
        <Button disabled variant="outline-dark">
          <FbIcon icon="search"></FbIcon>
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

FbSearchbar.defaultProps = {};

export default FbSearchbar;
