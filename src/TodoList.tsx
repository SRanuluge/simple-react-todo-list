import { FC, useState } from "react";
import { Button } from "./Button";

interface TodoListComponentProps {
  todoList: string[];
  handleDeleteItem(I: number): void;
}
export const TodoList: FC<TodoListComponentProps> = ({
  todoList,
  handleDeleteItem,
}) => {
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const handleCheck = (isTrue: boolean, i: string) => {
    if (isTrue) {
      setCheckedList([...checkedList, i]);
    } else {
      setCheckedList(checkedList.filter((item) => item !== i));
    }
  };

  return (
    <ul className="list">
      {todoList.map((todo: string, i: number) => {
        return (
          <li key={i}>
            <label>
              <input
                type="checkbox"
                onChange={(e) => handleCheck(e.target.checked, String(i))}
              />
              {todo}
            </label>
            {!checkedList.includes(String(i)) ? (
              <Button
                onClick={() => handleDeleteItem(i)}
                className="btn btn-danger"
              >
                Delete
              </Button>
            ) : (
              <Button
                onClick={() => handleDeleteItem(i)}
                className="btn.btn-danger-disabled"
                disabled
              >
                Delete
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
};
