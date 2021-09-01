import React, { useState } from "react";
import "./TodoCard.css";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../../redux/todoSlice";

const TodoCard = ({ id, title }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(title);
  const dispatch = useDispatch();

  const handleUpdateSetings = () => {
    setIsEditing(true);
  };
  const handleEditChange = (e) => {
    setCurrentTodo(e.target.value);
  };
  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };
  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: id, title: currentTodo }));
    setIsEditing(false);
  };
  return (
    <>
      <Card key={id} className="card__container">
        <CardContent>{title}</CardContent>
        <CardActions>
          <button onClick={handleUpdateSetings} className="update__bttn">
            update
          </button>
          <button onClick={handleDelete} className="delete__bttn">
            delete
          </button>
        </CardActions>

        {isEditing && (
          <form onSubmit={handleSave}>
            <input
              className="card__input"
              type="text"
              placeholder="Update todo"
              value={currentTodo}
              onChange={handleEditChange}
            />
            <button type="submit" onClick={handleSave} className="update__bttn">
              Save
            </button>
          </form>
        )}
      </Card>
    </>
  );
};

export default TodoCard;
