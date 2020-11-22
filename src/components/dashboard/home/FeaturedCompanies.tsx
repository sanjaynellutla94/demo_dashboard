import React from "react";
import { Button } from "react-bootstrap";
import { DemoIcon } from "../../common/demo-components";

const companies = [
  { id: 1, containerClass: "bg-secondary text-light m-2", icon: "amazon" },
  { id: 2, containerClass: "bg-secondary text-light m-2", icon: "apple" },
  { id: 3, containerClass: "bg-secondary text-light m-2", icon: "chrome" },
  { id: 4, containerClass: "bg-secondary text-light m-2", icon: "amazon" },
  { id: 5, containerClass: "bg-secondary text-light m-2", icon: "apple" },
  // { id: 6, containerClass: 'bg-warning text-success m-2', icon: 'chrome' },
  // { id: 7, containerClass: 'bg-primary text-info m-2', icon: 'amazon' },
  // { id: 8, containerClass: 'bg-dark text-light m-2', icon: 'apple' },
  // { id: 9, containerClass: 'bg-warning text-success m-2', icon: 'chrome' },
];

const CompanyItem = (props: any) => {
  const { icon, containerClass } = props;
  return (
    <Button className={containerClass}>
      <div>
        <DemoIcon icon={icon}></DemoIcon>
      </div>
    </Button>
  );
};

export default function FeaturedCompanies() {
  return (
    <div className="p-2">
      {companies.map((item: any) => {
        return (
          <CompanyItem
            key={item.id}
            icon={item.icon}
            containerClass={item.containerClass}
          ></CompanyItem>
        );
      })}
    </div>
  );
}
