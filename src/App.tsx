import { useState, useEffect } from "react";
import "./styles.css";

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

function App() {
  const localValues = localStorage.getItem("todoList");
  const savedTodoList = localValues ? JSON.parse(localValues) : [];
  const [todoList, addTodo] = useState<string[]>(savedTodoList);

  const handleAddItem = (item: string) => {
    addTodo([...todoList, item]);
  };

  const handleDeleteItem = (i: number) => {
    const filteredList = todoList.filter((_, index) => index !== i);
    addTodo(filteredList);
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <TodoForm handleOnSubmit={handleAddItem} />
      <h1 className="header">Todo List</h1>
      <TodoList todoList={todoList} handleDeleteItem={handleDeleteItem} />
    </>
  );
}

export default App;
