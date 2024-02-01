import React from "react";
import List from "./Todo";
import CompletedList from "./CompletedList";

const CompletedTask = ({ deleteTask, completedTask }) => {
  return (
    <div>
      {completedTask.map((tasks, index) => {
        return (
          <li key={index}>
            <CompletedList
              tasks={tasks}
              index={index}
              isComplete
              deleteTask={deleteTask}
            />
          </li>
        );
      })}
    </div>
  );
};

export default CompletedTask;
