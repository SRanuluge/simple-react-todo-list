import { FC, ChangeEvent, useState, FormEvent } from "react";

import { Button } from "./Button";
interface TodoFormProps {
  handleOnSubmit(title: string): void;
}

export const TodoForm: FC<TodoFormProps> = ({ handleOnSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value === "") return;
    handleOnSubmit(value);
    setValue("");
  };

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>New Item</label>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          value={value}
          type="text"
          id="item"
        ></input>
      </div>
      <Button type="submit" className="btn">
        Add
      </Button>
    </form>
  );
};
