import React from "react";

const List = ({ tasks, upTask, downTask, index, isComplete, finishedTask }) => {
  return (
    <div className="flex">
      <span style={{ textDecoration: isComplete ? "line-Through" : "none" }}>
        {tasks}
      </span>
      {isComplete ? (
        <span style={{ textDecoration: "line-through" }}>{tasks}</span>
      ) : (
        <>
          <button
            className="doneButton"
            onClick={() => {
              finishedTask(index);
            }}
          >
            Done
          </button>

          <button
            className="move"
            onClick={() => {
              upTask(index);
            }}
          >
            Up
          </button>
          <button
            className="move"
            onClick={() => {
              downTask(index);
            }}
          >
            Down
          </button>
        </>
      )}
    </div>
  );
};

export default List;
