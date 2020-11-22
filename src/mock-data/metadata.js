export const DASHBOARD_ROUTES = [
  {
    key: "home",
    title: "Home",
    icon: "home",
    route: "/dashboard/home",
    show: true,
    disabled: true,
  },
  {
    key: "statistics",
    title: "Statistics",
    icon: "bar-chart",
    route: "/dashboard/statistics",
    show: true,
    disabled: true,
  },
  {
    key: "users",
    title: "Users",
    icon: "users",
    route: "/dashboard/users",
    show: true,
    disabled: true,
  },
  {
    key: "settings",
    title: "Settings",
    icon: "gear",
    route: "/dashboard/settings",
    show: true,
    disabled: true,
  },
  {
    key: "queries",
    title: "Queries",
    icon: "question-circle",
    route: "/dashboard/queries",
    show: true,
    disabled: true,
  },
];

export const DASHBOARD_HEADER_ITEMS = [
  {
    key: "folders",
    title: "Folders",
    icon: "folder",
    show: true,
    disabled: true,
  },
  {
    key: "filters",
    title: "Filters",
    icon: "filter",
    show: true,
    disabled: true,
  },
  {
    key: "upload",
    title: "Upload",
    icon: "upload",
    show: true,
    disabled: true,
  },
  {
    key: "messages",
    title: "Messages",
    icon: "mail",
    show: true,
    disabled: true,
  },
  {
    key: "notifications",
    title: "Notifications",
    icon: "world",
    show: true,
    disabled: true,
  },
];

export const DASHBOARD_PERMISSIONS = {
  hasSearch: true,
  hasProfileMenu: true,
};

export const HOME_PERMISSIONS = {
  canViewAreaGraph: true,
  canViewDonughtGraph: true,
  canViewBarGraph: true,
  canViewMaps: true,
  canViewCustomerFeed: true,
  canViewTodaysTasks: true,
  canViewBriefStats: true,
  canAddStats: true,
  hasNetworkingTab: true,
  canViewProfiles: true,
  canChat: true,
  canViewLikes: true,
  canSearchPeople: true,
  canViewFeaturedCompanies: true,
};
