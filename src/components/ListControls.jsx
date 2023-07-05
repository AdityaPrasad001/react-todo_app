import React from "react";
import Button from "./Button";

const ListControls = ({
  setShowDone,
  onShowDoneItems,
  setShowTodo,
  onShowTodoItems,
}) => {
  const handleDone = () => {
    setShowTodo(false);
    onShowDoneItems();
    setShowDone((prev) => !prev);
  };

  const handleTodo = () => {
    setShowDone(false);
    onShowTodoItems();
    setShowTodo((prev) => !prev);
    console.log("todo");
  };

  const handleAll = () => {
    setShowDone(false);
    setShowTodo(false);
  };
  return (
    <div className="list-control">
      <Button bgColor={"rgb(134 210 218)"} onClick={handleAll}>
        All
      </Button>
      <Button bgColor={"rgb(134 210 218)"} onClick={handleDone}>
        Done
      </Button>
      <Button bgColor={"rgb(134 210 218)"} onClick={handleTodo}>
        Todo
      </Button>
    </div>
  );
};

export default ListControls;
