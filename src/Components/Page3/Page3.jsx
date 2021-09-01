import React from "react";
import "./Page3.css";
import Navbar from "../Navbar/Navbar";

import TodoFormInput from "../TodoFormInput/TodoFormInput";
import TodoList from "../TodoList/TodoList";

const Page3 = () => {
  return (
    <div className="page3__container">
      <Navbar />
      <div className="page__div">
        <h2>Page 3 / Todo List </h2>
        <TodoFormInput />
        <TodoList />
      </div>
    </div>
  );
};

export default Page3;
