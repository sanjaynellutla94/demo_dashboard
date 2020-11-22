import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteChildrenProps,
} from "react-router-dom";
import ROUTES, { DemoRoute } from "../routes/router";

const AppRoutes = (props: { routes: Array<DemoRoute> }) => {
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

const App = () => {
  const META = {
    CONTAINER_CLASSNAME: "App",
    DEFAULT_ROUTE: "/",
    REDIRECT_ROUTE: "/dashboard/home",
  };
  return (
    <div className={META.CONTAINER_CLASSNAME}>
      <Router>
        <Switch>
          <Route exact path={META.DEFAULT_ROUTE}>
            <Redirect to={META.REDIRECT_ROUTE} />
          </Route>
          <AppRoutes routes={ROUTES} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
