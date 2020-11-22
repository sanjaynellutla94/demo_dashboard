import React, { CSSProperties, useEffect } from "react";
import { Switch, Route, RouteChildrenProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import DemoLayout from '../../components/common/DemoLayout';
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import { DASHBOARD_ROUTES, DemoRoute } from "../../routes/router";

import { DemoLayout } from "../../components/common/demo-components";
import {
  toggleSidebarAction,
  getDashboardMetadataAction,
} from "../../store/actions/dashboard/actions-dashboard";

const SIDEBAR_WIDTH = "60px";
const SIDEBAR_HOVERED_WIDTH = "200px";

const getRoutes = (routes: Array<DemoRoute>) => {
  return routes.map((route, key) => {
    return (
      // exact
      <Route
        path={route.path}
        key={key}
        render={(props: RouteChildrenProps) => {
          const Content = route.component;
          return <Content {...props}></Content>;
        }}
      ></Route>
    );
  });
};

export default function Dashboard() {
  const isLoadingData: boolean = useSelector((data: any) => {
    const { isLoading } = data.dashboard.meta;
    return isLoading;
  });
  const hovered: boolean = useSelector((data: any) => {
    const { sidebarHovered } = data.dashboard.meta;
    return sidebarHovered;
  });
  const dispatch = useDispatch();
  const getMetadata = () => {
    dispatch(getDashboardMetadataAction());
  };
  useEffect(() => {
    getMetadata();
    return () => {};
  }, []); //eslint-disable-line
  if (isLoadingData) {
    return <div>Loading....</div>;
  } else {
    const contentStyles: CSSProperties = {
      marginLeft: SIDEBAR_WIDTH,
    };
    const onMouseOver: Function = () => {
      dispatch(toggleSidebarAction());
    };
    const onMouseLeave: Function = () => {
      dispatch(toggleSidebarAction());
    };
    const sidebarWidth = hovered ? SIDEBAR_HOVERED_WIDTH : SIDEBAR_WIDTH;
    return (
      <div>
        {/* overlay */}
        <DemoLayout>
          <DemoLayout.Sidebar
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            className="bg-primary"
            width={sidebarWidth}
          >
            <DashboardSidebar></DashboardSidebar>
          </DemoLayout.Sidebar>
          <DemoLayout.Content style={contentStyles}>
            <Switch>{getRoutes(DASHBOARD_ROUTES)}</Switch>
          </DemoLayout.Content>
        </DemoLayout>
      </div>
    );
  }
}
