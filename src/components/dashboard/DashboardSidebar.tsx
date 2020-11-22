import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
// useDispatch
import { Card, Row, Col, Container } from "react-bootstrap";
import { DemoIcon } from "../common/demo-components";

interface MenuType {
  key: string;
  title: string;
  icon: string;
  route: string;
  show: boolean;
  disabled: boolean;
}

const ItemStreched = (props: { icon: string; title?: string }) => {
  const { icon, title } = props;
  const iconLayout = "col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xl-3";
  return (
    <Row>
      <Col bsPrefix={iconLayout}>
        <DemoIcon icon={icon} className="fs-18" />
      </Col>
      {title && <Col className="fs-14">{title}</Col>}
    </Row>
  );
};

const ItemCollapsed = (props: { icon: string; title?: string }) => {
  const { icon, title } = props;
  return (
    <Row className="text-center">
      <Col>
        <DemoIcon icon={icon} className="fs-18" />
      </Col>
      {title && <Col className="fs-10">{title}</Col>}
    </Row>
  );
};

const MenuItem = (props: {
  title?: string;
  icon: string;
  route: string;
  hovered: boolean;
  className: string;
  onClick?: Function;
}) => {
  const { icon, title, onClick, route, hovered, className } = props;
  const Content: ReactNode = hovered ? (
    <ItemStreched title={title} icon={icon}></ItemStreched>
  ) : (
    <ItemCollapsed title={title} icon={icon}></ItemCollapsed>
  );
  return (
    <Card
      onClick={() => {
        if (onClick) onClick(route);
      }}
      className={className}
    >
      {Content}
    </Card>
  );
};

export default function DashboardSidebar() {
  const hovered: boolean = useSelector((data: any) => {
    const { sidebarHovered } = data.dashboard.meta;
    return sidebarHovered;
  });
  const menuItems: Array<MenuType> = useSelector((data: any) => {
    const { menuItems } = data.dashboard.meta;
    return menuItems;
  });
  // const { children } = props;
  return (
    <Container fluid className="text-light mx-0 px-0">
      <MenuItem
        className="bg-white text-primary py-3 px-2"
        hovered={hovered}
        icon="medium"
        title="Medium"
        route="asdasd"
      ></MenuItem>
      {menuItems.map((item: MenuType) => {
        const { key, title, icon, route } = item;
        return (
          <MenuItem
            className="bg-primary text-light py-3 px-2"
            key={key}
            hovered={hovered}
            title={title}
            icon={icon}
            route={route}
          ></MenuItem>
        );
      })}
    </Container>
  );
}
