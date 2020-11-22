import React, { useState } from "react";
import { Card, Tabs, Tab, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { DemoIcon, DemoSearchbar } from "../../common/demo-components";

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
  let state = {
    people: [],
  };
  state = useSelector((store: any) => {
    const { people } = store.dashboard.home.home.data;
    return {
      people: people || [],
    };
  });
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
          {state.people.map((item: any) => {
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
