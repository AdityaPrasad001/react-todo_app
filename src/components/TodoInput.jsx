import React, { useState } from "react";
import Button from "./Button";
import TaskLogo from "../assets/newTask.png";

const TodoInput = ({
  onAddNewTask,
  taskName,
  setTaskName,
  onUpdateItem,
  editId,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      onUpdateItem(taskName);
      return;
    }

    const newTask = {
      taskName,
      completed: false,
      id: Date.now(),
    };

    onAddNewTask(newTask);
  };

  return (
    <form className="todo-input card" onSubmit={onSubmit}>
      <div className="todo-new-input">
        <img src={TaskLogo} alt="new-task" />
        <input
          type="text"
          placeholder="new todo"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>

      <Button bgColor={"rgb(134 210 218)"} onClick={onSubmit}>
        {editId ? `Add Updated Item` : `Add new task`}
      </Button>
    </form>
  );
};

export default TodoInput;
