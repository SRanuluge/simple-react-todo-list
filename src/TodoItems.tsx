import { FC } from "react";
import { StateProps } from "./App";
import { Button } from "./Button";

interface TodoItemsProps extends StateProps {
  handleDeleteItem(i: string): void;
  handleCheck(id: string, completed: boolean): void;
}
export const TodoItems: FC<TodoItemsProps> = ({
  id,
  title,
  completed,
  handleDeleteItem,
  handleCheck,
}) => {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          onChange={(e) => handleCheck(id, e.target.checked)}
          checked={completed}
        />
        {title}
      </label>
      {completed ? (
        <Button onClick={() => handleDeleteItem(id)} className="btn btn-danger">
          Delete
        </Button>
      ) : (
        <Button
          onClick={() => handleDeleteItem(id)}
          className="btn.btn-danger-disabled"
          disabled
        >
          Delete
        </Button>
      )}
    </li>
  );
};
