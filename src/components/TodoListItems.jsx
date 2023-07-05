import React from "react";
import TodoListItem from "./TodoListItem";

const TodoListItems = ({ items, onCheckedItem, onDeleteItem, onEditItem }) => {
  return (
    <ul className="todo-list-items">
      {items.map((item) => (
        <TodoListItem
          item={item}
          key={item.id}
          onCheckedItem={onCheckedItem}
          onDeleteItem={onDeleteItem}
          onEditItem={onEditItem}
        />
      ))}
    </ul>
  );
};

export default TodoListItems;
