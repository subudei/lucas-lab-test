import React from "react";

import { useSelector } from "react-redux";
import TodoCard from "../TodoCard/TodoCard";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div>
      <h2>List of todos</h2>
      <ul>
        {todos.map((todo) => {
          return <TodoCard key={todo.id} id={todo.id} title={todo.title} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
