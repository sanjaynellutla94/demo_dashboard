import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { DemoIcon, DemoUpDown } from "../../common/demo-components";
import "../../../styles/dashboard/RevenueStats.scss";

const RevenueItem = (props: {
  title?: string;
  revenue?: string;
  upDown: {
    up: string | number;
    down: string | number;
  };
}) => {
  const { title, revenue, upDown } = props;
  return (
    <Card bsPrefix="card py-20 Revenue-Item">
      <Card.Title className="fs-14 text-muted section-header">
        {title}
      </Card.Title>
      <Card.Text className="fs-24 text-primary">{revenue}</Card.Text>
      <Card.Footer className="bg-white border-none p-0">
        <DemoUpDown
          className="justify-content-start"
          up={upDown.up}
          down={upDown.down}
        ></DemoUpDown>
      </Card.Footer>
    </Card>
  );
};

export default function RevenueStats() {
  let state = {
    stats: [],
  };
  state = useSelector((store: any) => {
    const { briefStats } = store.dashboard.home.home.data;
    if (briefStats) {
      const { stats } = briefStats;
      return {
        stats,
      };
    }
    return state;
  });
  return (
    <div className="d-flex bg-white px-30 h-scroll">
      {state.stats.map((item: any) => {
        return (
          <RevenueItem
            key={item.key}
            title={item.title}
            revenue={item.revenue}
            upDown={item.upDown}
          ></RevenueItem>
        );
      })}
      <Button variant="link">
        <DemoIcon icon="plus"></DemoIcon> Add Statistics
      </Button>
    </div>
  );
}
