import React, { useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { DemoLineGraph, DemoLoader } from "../../common/demo-components";
import { setLinegraphDataAction } from "../../../store/actions/dashboard/home/actions-dashboard-home";

export default function LineGraphRevenue() {
  const state = useSelector((state: any) => {
    const data = state.dashboard.home.lineGraph;
    return data;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLinegraphDataAction());
  }, [dispatch]);
  if (state.isLoading) {
    return <DemoLoader></DemoLoader>;
  } else if (state.errorMsg) {
    return <Alert>{state.errorMsg}</Alert>;
  } else {
    return (
      <div>
        <div className="d-flex justify-content-end">
          <Button variant="primary" className="px-3 text-light" size="sm">
            Month
          </Button>
          <Button variant="link" className="text-muted" size="sm">
            Day
          </Button>
          <Button variant="link" className="text-muted" size="sm">
            Year
          </Button>
          <Button variant="link" className="text-muted" size="sm">
            <i className="fa fa-ellipsis-v"></i>
          </Button>
        </div>
        <DemoLineGraph data={state.data} width="100%" height={250} />
      </div>
    );
  }
}
