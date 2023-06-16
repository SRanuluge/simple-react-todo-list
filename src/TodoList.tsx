import { FC } from "react";

import { StateProps } from "./App";
import { TodoItems } from "./TodoItems";

interface TodoListComponentProps {
  todoList: StateProps[];
  handleDeleteItem(i: string): void;
  handleCheck(id: string, completed: boolean): void;
}
export const TodoList: FC<TodoListComponentProps> = ({
  todoList,
  handleDeleteItem,
  handleCheck,
}) => {
  return (
    <ul className="list">
      {todoList.length === 0 && "No items to show"}
      {todoList.map((props: StateProps) => {
        return (
          <TodoItems
            {...props}
            key={props.id}
            handleDeleteItem={handleDeleteItem}
            handleCheck={handleCheck}
          />
        );
      })}
    </ul>
  );
};
