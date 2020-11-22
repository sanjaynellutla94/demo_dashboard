import React, { useEffect } from "react";
import { Switch, Route, RouteChildrenProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import DemoLayout from '../../components/common/DemoLayout';
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import { DASHBOARD_ROUTES, DemoRoute } from "../../routes/router";

import {
  DemoLayout,
  DemoLoader,
} from "../../components/common/demo-components";
import {
  toggleSidebarAction,
  getDashboardMetadataAction,
} from "../../store/actions/dashboard/actions-dashboard";

const SIDEBAR_WIDTH = "60px";
const SIDEBAR_HOVERED_WIDTH = "200px";

const DashboarRoutes = (props: { routes: Array<DemoRoute> }) => {
  const { routes } = props;
  const routeTemplates = routes.map((route: DemoRoute, key) => {
    return (
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
  return <React.Fragment>{routeTemplates}</React.Fragment>;
};

export default function Dashboard() {
  // declarations
  const state: {
    isLoadingData: boolean;
    hovered: boolean;
  } = useSelector((data: any) => {
    const { isLoading, sidebarHovered } = data.dashboard.meta;
    return {
      isLoadingData: isLoading,
      hovered: sidebarHovered,
    };
  });
  const dispatch = useDispatch();
  const getMetadata = () => {
    dispatch(getDashboardMetadataAction());
  };

  // Side effects
  useEffect(() => {
    getMetadata();
    return () => {};
  }, []); //eslint-disable-line

  // Rendering Logic
  if (state.isLoadingData) {
    return <DemoLoader />;
  } else {
    const META = {
      SIDEBAR_WIDTH: state.hovered ? SIDEBAR_HOVERED_WIDTH : SIDEBAR_WIDTH,
      SIDEBAR_CLASSNAME: "bg-primary",
      CONTENT_STYLES: {
        marginLeft: SIDEBAR_WIDTH,
      },
    };
    const onMouseOver: Function = () => {
      dispatch(toggleSidebarAction());
    };
    const onMouseLeave: Function = () => {
      dispatch(toggleSidebarAction());
    };
    return (
      <div>
        {/* overlay */}
        <DemoLayout>
          <DemoLayout.Sidebar
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            className={META.SIDEBAR_CLASSNAME}
            width={META.SIDEBAR_WIDTH}
          >
            <DashboardSidebar></DashboardSidebar>
          </DemoLayout.Sidebar>
          <DemoLayout.Content style={META.CONTENT_STYLES}>
            <Switch>
              <DashboarRoutes routes={DASHBOARD_ROUTES}></DashboarRoutes>
            </Switch>
          </DemoLayout.Content>
        </DemoLayout>
      </div>
    );
  }
}
