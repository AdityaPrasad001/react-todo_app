import React, { useState } from "react";
import edit from "../assets/edit.png";
import del from "../assets/delete.png";

const TodoListItem = ({ item, onCheckedItem, onDeleteItem, onEditItem }) => {
  return (
    <li className={`todo-list-item  ${item.completed && "item-completed"}`}>
      <div>{item.taskName}</div>
      <div className="list-item-controls">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onCheckedItem(item.id)}
        />
        <img src={edit} alt="edit" onClick={() => onEditItem(item.id)} />
        <img src={del} alt="delete" onClick={() => onDeleteItem(item.id)} />
      </div>
    </li>
  );
};

export default TodoListItem;
