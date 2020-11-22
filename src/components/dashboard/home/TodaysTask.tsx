import React from "react";
import { Table, Form } from "react-bootstrap";

const data = [
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

export default function TodaysTask() {
  return (
    <div>
      <Table responsive>
        {/* <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead> */}
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  {" "}
                  <Form.Check
                    custom
                    onChange={() => {}}
                    checked={item.isDone}
                    type={"radio"}
                    id={`radio-${item.id}`}
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.time}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
