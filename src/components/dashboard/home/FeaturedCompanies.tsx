import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { DemoIcon } from "../../common/demo-components";

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
  let state = {
    companies: [],
  };
  state = useSelector((store: any) => {
    const { companies } = store.dashboard.home.home.data;
    return {
      companies: companies || [],
    };
  });
  return (
    <div className="p-2">
      {state.companies.map((item: any) => {
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
