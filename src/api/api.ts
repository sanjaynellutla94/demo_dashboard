import {
  DASHBOARD_PERMISSIONS,
  DASHBOARD_HEADER_ITEMS,
  DASHBOARD_ROUTES,
  HOME_PERMISSIONS,
} from "../mock-data/metadata";
import {
  BRIEF_STATS,
  LINE_GRAPH_DATA,
  REVENUE_PROGRESS,
  SHIPMENTS_DATA,
  DOUGNUT_PROGRESS,
  CUSTOMER_FEED,
  TODAY_TASKS,
  NETWORKING_PEOPLE,
  FEATURED_COMPANIES,
} from "../mock-data/mock-data";

const fakeAsync = (resolve: any, payload: any) => {
  window.setTimeout(() => {
    resolve(payload);
  }, 2000);
};

export const getDashboardMetadataFact = () => {
  return new Promise((resolve) => {
    fakeAsync(resolve, {
      permissions: DASHBOARD_PERMISSIONS,
      headerItems: DASHBOARD_HEADER_ITEMS,
      sidebarItems: DASHBOARD_ROUTES,
    });
  });
};

export const getHomeDataFact = () => {
  return new Promise((resolve) => {
    fakeAsync(resolve, {
      permissions: HOME_PERMISSIONS,
      briefStats: BRIEF_STATS,
      dougnutStats: DOUGNUT_PROGRESS,
      shipments: SHIPMENTS_DATA,
      revenueProgress: REVENUE_PROGRESS,
      todaysTasks: TODAY_TASKS,
      people: NETWORKING_PEOPLE,
      companies: FEATURED_COMPANIES,
    });
  });
};

export const getLinegraphDataFact = () => {
  return new Promise((resolve) => {
    fakeAsync(resolve, LINE_GRAPH_DATA);
  });
};

export const getCustomerFeedsFact = () => {
  return new Promise((resolve) => {
    fakeAsync(resolve, CUSTOMER_FEED);
  });
};

export const getPeoplesFact = () => {
  return new Promise((resolve) => {
    fakeAsync(resolve, []);
  });
};
