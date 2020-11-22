import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { DemoMap, DemoUpDown } from "../../common/demo-components";

export default function Shipments() {
  let state = {
    progress: [],
    revenue: "",
    upDown: {
      up: "",
      down: "",
    },
  };
  state = useSelector((store: any) => {
    const { shipments } = store.dashboard.home.home.data;
    if (shipments) {
      const { stats, revenue, upDown } = shipments;
      return {
        progress: stats,
        revenue,
        upDown,
      };
    }
    return state;
  });
  return (
    <div>
      <DemoMap markers={state.progress}></DemoMap>
      <Row>
        <Col>
          <div className="text-primary fs-24 mr-auto">{state.revenue}</div>
        </Col>
        <Col className="text-right">
          <DemoUpDown
            className="align-self-end"
            up={state.upDown.up}
            down={state.upDown.down}
          ></DemoUpDown>
        </Col>
      </Row>
    </div>
  );
}
