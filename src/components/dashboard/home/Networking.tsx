import React, { useState } from "react";
import { Card, Tabs, Tab, Image } from "react-bootstrap";
import { DemoIcon, DemoSearchbar } from "../../common/demo-components";

const users = [
  { id: 1, userName: "User 1", about: "About" },
  { id: 2, userName: "User 2", about: "About" },
  { id: 3, userName: "User 3", about: "About" },
  { id: 4, userName: "User 4", about: "About" },
];

const MenuItem = (props: {
  title?: string;
  icon: string;
  route?: string;
  className?: string;
}) => {
  const { icon, className } = props;
  return (
    <Card className={`bg-primary text-light px-4 py-3 ${className}`}>
      <DemoIcon icon={icon}></DemoIcon>
    </Card>
  );
};

const UserItem = (props: any) => {
  const { userName, about } = props;
  return (
    <Card>
      <div className="d-flex p-3">
        <div>
          <Image
            src="https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "contain",
            }}
            thumbnail
          />
        </div>

        <div className="flex-grow-1 text-truncate pl-2 section-header">
          <div>{userName}</div>
          <div className="text-muted fs-10">{about}</div>
        </div>
        <div className="text-muted">
          <DemoIcon icon="comments-o"></DemoIcon>
        </div>
      </div>
    </Card>
  );
};

export default function Networking() {
  const [key, setKey] = useState("home");
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        className="border-none nav-fill"
        onSelect={(k: any) => {
          setKey(k);
        }}
      >
        <Tab
          eventKey="home"
          tabClassName="p-0 m-0"
          title={<MenuItem icon="users"></MenuItem>}
        >
          {users.map((item: any) => {
            return (
              <UserItem
                key={item.id}
                userName={item.userName}
                about={item.about}
              ></UserItem>
            );
          })}
        </Tab>
        <Tab
          eventKey="profile"
          tabClassName="p-0 m-0"
          disabled
          title={<MenuItem icon="comments-o"></MenuItem>}
        ></Tab>
        <Tab
          eventKey="contact"
          tabClassName="p-0 m-0"
          title={<MenuItem icon="thumbs-o-up"></MenuItem>}
          disabled
        ></Tab>
      </Tabs>
      <Card className="p-20">
        <DemoSearchbar></DemoSearchbar>
      </Card>
    </div>
  );
}
