import React from "react";
import { Table, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

export interface TaskType {
  id: number;
  title: string;
  description: string;
  time: string;
  isDone: boolean;
}

export interface TasksType {
  tasks: Array<TaskType>;
}

export default function TodaysTask() {
  let state: TasksType = {
    tasks: [],
  };
  state = useSelector((store: any) => {
    const { todaysTasks } = store.dashboard.home.home.data;
    return {
      tasks: todaysTasks || [],
    };
  });
  return (
    <div>
      <Table responsive>
        <tbody>
          {state.tasks.map((item: TaskType) => {
            const type = "radio";
            const id = `radio-${item.id}`;
            const key = `tr-${item.id}`;
            return (
              <tr key={key}>
                <td>
                  <Form.Check
                    custom
                    onChange={() => {}}
                    checked={item.isDone}
                    type={type}
                    id={id}
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
