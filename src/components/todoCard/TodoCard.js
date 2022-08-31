import React from "react";
import "./style.css";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TodoCard = ({ item }) => {
  const onremove = () => {
    if (window.confirm("이 🔥만을 삭제할꺼니?")) {
      alert("삭제완.");
      axios.delete("http://localhost:5000/todos/" + item.id);
    } else {
      alert("취소완.");
    }
  };

  const navigate = useNavigate();
  const showDtail = () => {
    navigate(`/detail/${item.id}`);
  };

  return (
    <div className="todo-container">
      <div onClick={showDtail}>
        <div>작성자 : {item?.writer}</div>
        <div>{item?.title}</div>
      </div>
      <Button onClick={onremove}>🗑</Button>
    </div>
  );
};

export default TodoCard;
