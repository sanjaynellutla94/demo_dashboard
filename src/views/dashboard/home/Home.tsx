import React, { useEffect } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";

// Components
import { Row, Col, Container, Card, Alert } from "react-bootstrap";
import {
  DemoHeader,
  DemoContent,
  DemoLoader,
} from "../../../components/common/demo-components";
import LineGraphRevenue from "../../../components/dashboard/home/LineGraphRevenue";
import DougnutRevenue from "../../../components/dashboard/home/DougnutRevenue";
import Networking from "../../../components/dashboard/home/Networking";
import ProgressRevenue from "../../../components/dashboard/home/ProgressRevenue";
import Shipments from "../../../components/dashboard/home/Shipments";
import HomeHeader from "../../../components/dashboard/home/HomeHeader";
import TodaysTask from "../../../components/dashboard/home/TodaysTask";
import CustomerFeed from "../../../components/dashboard/home/CustomerFeed";
import FeaturedCompanies from "../../../components/dashboard/home/FeaturedCompanies";

// Actions
import { setHomeDataAction } from "../../../store/actions/dashboard/home/actions-dashboard-home";
import RevenueStats from "../../../components/dashboard/home/RevenueStats";

const CardWrapper = (props: any) => {
  const { title, className } = props;
  const containerClass = `px-xl-4 py-xl-3  px-lg-4 py-lg-3 px-md-4 py-md-3 px-sm-1 py-sm-2 shadow-sm ${className}`;
  return (
    <Card className={containerClass}>
      <Card.Title className="py-2 section-header">{title}</Card.Title>
      {props.children}
    </Card>
  );
};

export default function DashboardHome() {
  const state = useSelector((state: any) => {
    const data = state.dashboard.home.home;
    return data;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHomeDataAction());
  }, [dispatch]);
  if (state.isLoading) {
    return <DemoLoader></DemoLoader>;
  } else if (state.errorMsg) {
    return <Alert>{state.errorMsg}</Alert>;
  } else {
    return (
      <div>
        <DemoHeader>
          <HomeHeader></HomeHeader>
        </DemoHeader>
        <DemoContent>
          <RevenueStats></RevenueStats>
          <Container className="px-30" fluid>
            <Row>
              <Col className="pt-30" xl="10" lg="9" md="12" sm="12" xs="12">
                <Row>
                  <Col className="p-2" xl="9" lg="9" md="12" sm="12" xs="12">
                    <CardWrapper title="Monthly Revenue Progress">
                      <LineGraphRevenue />
                    </CardWrapper>
                  </Col>
                  <Col
                    className="p-2 text-center"
                    xl="3"
                    lg="3"
                    md="12"
                    sm="12"
                    xs="12"
                  >
                    <CardWrapper className="h-100 " title="Revenue Per Hour">
                      <DougnutRevenue />
                    </CardWrapper>
                  </Col>
                </Row>
                <Row>
                  <Col className="p-2" xl="6" lg="6" md="12" sm="12" xs="12">
                    <CardWrapper title="Customers Feed">
                      <CustomerFeed></CustomerFeed>
                    </CardWrapper>
                  </Col>
                  <Col className="p-2" xl="6" lg="6" md="12" sm="12" xs="12">
                    <Row>
                      <Col className="p-2">
                        <CardWrapper title="Todays Tasks">
                          <TodaysTask></TodaysTask>
                        </CardWrapper>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        className="p-2"
                        xl="6"
                        lg="6"
                        md="12"
                        sm="12"
                        xs="12"
                      >
                        <CardWrapper
                          className="text-center h-100"
                          title="Progress"
                        >
                          <ProgressRevenue />
                        </CardWrapper>
                      </Col>
                      <Col
                        className="p-2"
                        xl="6"
                        lg="6"
                        md="12"
                        sm="12"
                        xs="12"
                      >
                        <CardWrapper
                          className="text-center h-100"
                          title="Shipments"
                        >
                          <Shipments />
                        </CardWrapper>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col xl="2" lg="3" md="12" sm="12" xs="12">
                <Networking />
                <CardWrapper title="Featured Companies">
                  <FeaturedCompanies></FeaturedCompanies>
                </CardWrapper>
              </Col>
            </Row>
          </Container>
        </DemoContent>
      </div>
    );
  }
}
