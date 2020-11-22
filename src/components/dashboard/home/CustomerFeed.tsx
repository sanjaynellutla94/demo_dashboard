import React from "react";
import { Row, Col, Card, Container, Image } from "react-bootstrap";
import "../../../styles/dashboard/CustomerFeed.scss";

const DUMMY_DESCRIPTION =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

const customersFeed = [
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

const Description = (props: { userName: string; description: string }) => {
  const { userName, description } = props;
  return (
    <Card className="bg-light p-30 my-10">
      <strong>{userName}</strong> {description}
    </Card>
  );
};

export default function CustomerFeed() {
  const getChildren = (feeds: Array<any>) => {
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
        ;
      </div>
    );
  };
  return (
    <Container className="Feed-Container">
      {customersFeed.map((item: any) => {
        return (
          <Row key={item.id}>
            <Col>
              <Image
                src="https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png"
                height="50px"
                thumbnail
              />
            </Col>
            <Col xl="10" lg="9" md="9" sm="12" xs="12">
              <Description
                userName={item.userName}
                description={item.description}
              ></Description>
              {getChildren(item.children)}
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}
