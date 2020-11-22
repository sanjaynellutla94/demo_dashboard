export const REVENUE_PROGRESS = {
  stats: [
    { name: "Jan", uv: 300, pv: 700, amt: 2400 },
    { name: "Feb", uv: 300, pv: 700, amt: 2210 },
    { name: "Mar", uv: 500, pv: 500, amt: 2290 },
    { name: "Apr", uv: 200, pv: 800, amt: 2000 },
    { name: "May", uv: 300, pv: 700, amt: 2181 },
    { name: "Jun", uv: 300, pv: 700, amt: 2500 },
    { name: "July", uv: 300, pv: 700, amt: 2100 },
  ],
  revenue: "$150,000",
  upDown: {
    up: "1020",
    down: "2020",
  },
};

export const DOUGNUT_PROGRESS = {
  revenue: "$150",
  stats: 0.6,
  upDown: {
    up: "1020",
    down: "2020",
  },
};

export const SHIPMENTS_DATA = {
  stats: [
    {
      markerOffset: -30,
      name: "Buenos Aires",
      coordinates: [-58.3816, -34.6037],
    },
    { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
    { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
    { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
    { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
    { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
    { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
    { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
    { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
    { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
    { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
    { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] },
  ],
  revenue: "$150,000",
  upDown: {
    up: "1020",
    down: "2020",
  },
};

export const LINE_GRAPH_DATA = [
  { name: "Jan", uv: 300, pv: 700, amt: 2400 },
  { name: "Feb", uv: 300, pv: 700, amt: 2210 },
  { name: "Mar", uv: 500, pv: 500, amt: 2290 },
  { name: "Apr", uv: 200, pv: 800, amt: 2000 },
  { name: "May", uv: 300, pv: 700, amt: 2181 },
  { name: "Jun", uv: 300, pv: 700, amt: 2500 },
  { name: "July", uv: 300, pv: 700, amt: 2100 },
];

export const BRIEF_STATS = {
  stats: [
    {
      key: "dailyVisitors",
      revenue: "$987,000",
      title: "Daily Visitors",
      upDown: {
        up: "1000",
        down: "1020",
      },
    },
    {
      key: "dailyCustomers",
      revenue: "$987,000",
      title: "Daily Customers",
      upDown: {
        up: "1000",
        down: "1020",
      },
    },
    {
      key: "dailyOrders",
      revenue: "$987,000",
      title: "Daily Orders",
      upDown: {
        up: "1000",
        down: "1020",
      },
    },
    {
      key: "dailySales",
      revenue: "$987,000",
      title: "Daily Sales",
      upDown: {
        up: "1000",
        down: "1020",
      },
    },
    {
      key: "dailyShipments",
      revenue: "$987,000",
      title: "Daily Shipments",
      upDown: {
        up: "1000",
        down: "1020",
      },
    },
    {
      key: "dailyRevenues",
      revenue: "$987,000",
      title: "Daily Revenues",
      upDown: {
        up: "1000",
        down: "1020",
      },
    },
    {
      key: "dailyReviews",
      revenue: "$987,000",
      title: "Daily Reviews",
      upDown: {
        up: "1000",
        down: "1020",
      },
    },
  ],
};

const DUMMY_DESCRIPTION =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

export const CUSTOMER_FEED = [
  {
    id: 1,
    userName: "Parent 1",
    userPic: "",
    description: DUMMY_DESCRIPTION,
    children: [
      {
        id: 3,
        userName: "Child 1",
        userPic: "",
        description: DUMMY_DESCRIPTION,
      },
      {
        id: 4,
        userName: "Child 2",
        userPic: "",
        description: DUMMY_DESCRIPTION,
      },
    ],
  },
  {
    id: 2,
    userName: "Parent 2",
    userPic: "",
    description: DUMMY_DESCRIPTION,
    children: [],
  },
];

export const TODAY_TASKS = [
  {
    id: 1,
    title: "Arrange",
    description: "this is description",
    time: "12:20 AM",
    isDone: true,
  },
  {
    id: 2,
    title: "Shipment",
    description: "this is description",
    time: "12:30 AM",
    isDone: false,
  },
  {
    id: 3,
    title: "MakeList",
    description: "this is description",
    time: "12:40 AM",
    isDone: false,
  },
  {
    id: 4,
    title: "Review",
    description: "this is description",
    time: "12:50 AM",
    isDone: false,
  },
];

export const NETWORKING_PEOPLE = [
  { id: 1, userName: "User 1", about: "About" },
  { id: 2, userName: "User 2", about: "About" },
  { id: 3, userName: "User 3", about: "About" },
  { id: 4, userName: "User 4", about: "About" },
];

export const FEATURED_COMPANIES = [
  { id: 1, containerClass: "bg-secondary text-light m-2", icon: "amazon" },
  { id: 2, containerClass: "bg-secondary text-light m-2", icon: "apple" },
  { id: 3, containerClass: "bg-secondary text-light m-2", icon: "chrome" },
  { id: 4, containerClass: "bg-secondary text-light m-2", icon: "amazon" },
  { id: 5, containerClass: "bg-secondary text-light m-2", icon: "apple" },
];
