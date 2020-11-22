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
      shipments: SHIPMENTS_DATA,
      revenueProgress: REVENUE_PROGRESS,
    });
  });
};

export const getLinegraphDataFact = () => {
  return new Promise((resolve) => {
    fakeAsync(resolve, LINE_GRAPH_DATA);
  });
};

export const getBriefStatsFact = () => {
  return new Promise((resolve) => {
    fakeAsync(resolve, BRIEF_STATS);
  });
};

export const getLineGraphStatsFact = () => {
  return new Promise((resolve) => {
    fakeAsync(resolve, []);
  });
};

export const getDougnutStatsFact = () => {
  return new Promise((resolve) => {
    fakeAsync(resolve, []);
  });
};

export const getMapsStatsFact = () => {
  return new Promise((resolve) => {
    fakeAsync(resolve, []);
  });
};

export const getBarStatsFact = () => {
  return new Promise((resolve) => {
    fakeAsync(resolve, []);
  });
};

export const getCustomerFeedsFact = () => {
  return new Promise((resolve) => {
    fakeAsync(resolve, []);
  });
};

export const getTodaysTasksFact = () => {
  return new Promise((resolve) => {
    fakeAsync(resolve, []);
  });
};

export const getFeaturedComponiesFact = () => {
  return new Promise((resolve) => {
    fakeAsync(resolve, []);
  });
};

export const getPeoplesFact = () => {
  return new Promise((resolve) => {
    fakeAsync(resolve, []);
  });
};
