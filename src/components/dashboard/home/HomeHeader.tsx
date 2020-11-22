import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Image,
  InputGroup,
} from "react-bootstrap";
import { DemoIcon } from "../../common/demo-components";
import "../../../styles/dashboard/HomeHeader.scss";

const NavItem = (props: any) => {
  const { children, icon } = props;
  return (
    <Nav.Link className="p-25 border-right border-left text-center">
      {!children && (
        <DemoIcon icon={icon} className="fs-20 text-primary"></DemoIcon>
      )}
      {children}
    </Nav.Link>
  );
};

export default function HomeHeader() {
  return (
    <div>
      <Navbar className="Home-nav" bg="white" expand="sm">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavItem icon="ellipsis-h"></NavItem>
            <NavItem icon="folder-o"></NavItem>
            <NavItem icon="filter"></NavItem>
          </Nav>
          <Form className="pt-15" inline>
            <InputGroup>
              <FormControl size="sm" type="text" placeholder="Search" />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon1">
                  <DemoIcon icon="search"></DemoIcon>
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form>
          <Nav className="ml-auto">
            <NavItem icon="upload"></NavItem>
            <NavItem icon="envelope-o"></NavItem>
            <NavItem icon="globe"></NavItem>
            <Nav.Link className="text-center">
              <Image
                src="https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png"
                style={{
                  width: "50px",
                  height: "100%",
                  objectFit: "contain",
                }}
                thumbnail
              />
            </Nav.Link>
            <NavDropdown
              title="username"
              alignRight
              className="p-15 text-center"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
      </Navbar>
    </div>
  );
}
