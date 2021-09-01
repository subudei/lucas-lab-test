import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";

const TodoFormInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const submitTodo = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        title,
      })
    );
    console.log(title);
    setTitle("");
  };
  const handleTodoInput = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <form onSubmit={submitTodo}>
        <input
          type="text"
          placeholder="Add New Todo"
          value={title}
          onChange={handleTodoInput}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoFormInput;
