import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoListItems from "./components/TodoListItems";
import { todoListTask } from "./assets/data";
import ListControls from "./components/ListControls";
import TaskControls from "./components/TaskControls";

function App() {
  const [taskName, setTaskName] = useState("");
  const [items, setItems] = useState(todoListTask);
  const [doneItems, setDoneItems] = useState([]);
  const [showDone, setShowDone] = useState(false);
  const [todoItems, setTodoItems] = useState([]);
  const [showTodo, setShowTodo] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleAddNewTask = (newTask) => {
    setItems((prevItems) => [newTask, ...prevItems]);
    setTaskName("");
  };

  const handleCheckedItem = (id) => {
    console.log(id);
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleDeleteDoneTask = () => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.completed !== true)
    );
  };

  const handleDeleteAll = () => {
    setItems([]);
  };

  const handleDoneItems = () => {
    setDoneItems(items.filter((item) => item.completed !== false));
  };

  const handleTodoItems = () => {
    setTodoItems(items.filter((item) => item.completed !== true));
  };

  const handleEditItem = (id) => {
    const editTask = items.find((item) => item.id === id);
    setEditId(id);
    setTaskName(editTask.taskName);
  };

  const handleUpdateItem = (updatedTask) => {
    console.log(updatedTask);
    setItems(
      items.map((item) =>
        item.id === editId
          ? { taskName: updatedTask, completed: false, id: item.id }
          : item
      )
    );
    setTaskName("");
    setEditId(null);
  };

  return (
    <div className="app">
      <h1 className="header">Todo list</h1>
      <TodoInput
        onAddNewTask={handleAddNewTask}
        taskName={taskName}
        setTaskName={setTaskName}
        onUpdateItem={handleUpdateItem}
        editId={editId}
      />
      <div className="card">
        <ListControls
          setShowDone={setShowDone}
          setShowTodo={setShowTodo}
          onShowDoneItems={handleDoneItems}
          onShowTodoItems={handleTodoItems}
        />
        <TodoListItems
          items={showDone ? doneItems : showTodo ? todoItems : items}
          onCheckedItem={handleCheckedItem}
          onDeleteItem={handleDeleteItem}
          onEditItem={handleEditItem}
        />
        <TaskControls
          onDeleteDoneTask={handleDeleteDoneTask}
          onDeleteAll={handleDeleteAll}
        />
      </div>
    </div>
  );
}

export default App;
