import React from "react";
import Button from "./Button";

const TaskControls = ({ onDeleteDoneTask, onDeleteAll }) => {
  return (
    <div className="list-control">
      <Button
        bgColor={"rgb(255, 102, 102)"}
        textColor={"#fff"}
        onClick={onDeleteDoneTask}
      >
        Delete done tasks
      </Button>
      <Button
        bgColor={"rgb(255, 102, 102)"}
        textColor={"#fff"}
        onClick={onDeleteAll}
      >
        Delete all tasks
      </Button>
    </div>
  );
};

export default TaskControls;
