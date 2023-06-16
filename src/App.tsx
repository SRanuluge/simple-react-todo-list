import { useState, useEffect } from "react";

import "./styles.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export interface StateProps {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [todoList, addTodo] = useState<StateProps[]>(() => {
    const localValues = localStorage.getItem("todoList");
    if (localValues == null) {
      return [];
    }
    return JSON.parse(localValues);
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleAddItem = (title: string) => {
    addTodo((prevState) => {
      return [
        ...prevState,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  const handleCheck = (id: string, completed: boolean) => {
    addTodo((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const handleDeleteItem = (selectedId: string) => {
    addTodo((prevState) => {
      return prevState.filter((todo) => todo.id !== selectedId);
    });
  };

  return (
    <>
      <TodoForm handleOnSubmit={handleAddItem} />
      <h1 className="header">Todo List</h1>
      <TodoList
        todoList={todoList}
        handleDeleteItem={handleDeleteItem}
        handleCheck={handleCheck}
      />
    </>
  );
}

export default App;
