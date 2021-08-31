import React from "react";
import Navbar from "../Navbar/Navbar";

import TodoFormInput from "../TodoFormInput/TodoFormInput";
import TodoList from "../TodoList/TodoList";

function Page3() {
  return (
    <div>
      <Navbar />
      <h2>Page 3 / Todo List </h2>
      <TodoFormInput />
      <TodoList />
    </div>
  );
}

export default Page3;
