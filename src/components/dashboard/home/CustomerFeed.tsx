import React, { useEffect } from "react";
import { Row, Col, Card, Container, Image, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCustomerFeedDataAction } from "../../../store/actions/dashboard/home/actions-dashboard-home";
import "../../../styles/dashboard/CustomerFeed.scss";
import { DemoLoader } from "../../common/demo-components";

const IMAGE_SOURCE =
  "https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png";

const Description = (props: { userName: string; description: string }) => {
  const { userName, description } = props;
  return (
    <Card className="bg-light p-30 my-10">
      <strong>{userName}</strong> {description}
    </Card>
  );
};

const Children = (props: { feeds: Array<any> }) => {
  const { feeds } = props;
  if (!feeds || !feeds.length) return null;
  return (
    <div className="border-left pl-20 my-10">
      {feeds.map((item: any) => {
        return (
          <Description
            key={item.id}
            userName={item.userName}
            description={item.description}
          ></Description>
        );
      })}
    </div>
  );
};

export default function CustomerFeed() {
  //declarations
  let state = {
    feeds: [],
    isLoading: false,
    errorMsg: "",
  };
  state = useSelector((store: any) => {
    const { data, isLoading, errorMsg } = store.dashboard.home.customerFeeds;
    return {
      feeds: data,
      isLoading,
      errorMsg,
    };
  });
  const dispatch = useDispatch();
  // side effects
  useEffect(() => {
    dispatch(setCustomerFeedDataAction());
  }, [dispatch]);
  // Actual Render Logic
  if (state.isLoading) {
    return <DemoLoader></DemoLoader>;
  } else if (state.errorMsg) {
    return <Alert>{state.errorMsg}</Alert>;
  }
  return (
    <Container className="Feed-Container">
      {state.feeds.map((item: any) => {
        return (
          <Row key={item.id}>
            <Col>
              <Image src={IMAGE_SOURCE} height="50px" thumbnail />
            </Col>
            <Col xl="10" lg="9" md="9" sm="12" xs="12">
              <Description
                userName={item.userName}
                description={item.description}
              ></Description>
              <Children feeds={item.children} />
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}
