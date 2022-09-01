import React, { useEffect, useState } from "react";
import TodoCard from "../components/todoCard/TodoCard";

const TodoList = () => {
  const [todolist, setTodolist] = useState([]);
  const getTodos = async () => {
    let url = `https://young-chamber-90300.herokuapp.com/todos`;
    let response = await fetch(url);
    let data = await response.json();
    setTodolist(data);
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      {todolist.map((list) => (
        <TodoCard item={list} />
      ))}
    </div>
  );
};

export default TodoList;
