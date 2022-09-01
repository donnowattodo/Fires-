import React, { useRef, useState } from "react";
import nextId from "react-id-generator";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTodoForm = () => {
  let id = nextId();
  let navigate = useNavigate();
  const writerInput = useRef();
  const titleInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    id: id,
    writer: "",
    title: "",
    content: "",
  });
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.writer.length < 1) {
      writerInput.current.focus();
      return;
    }

    if (state.title.length < 1) {
      titleInput.current.focus();
      return;
    }

    if (state.content.length < 1) {
      contentInput.current.focus();
      return;
    }
    axios.post("https://young-chamber-90300.herokuapp.com/todos", state);
    setState({
      id: id,
      writer: "",
      titel: "",
      content: "",
    });
    navigate("/list");
  };

  return (
    <div className="AddTodoForm">
      <h2>작성자</h2>
      <div>
        <input
          ref={writerInput}
          name="writer"
          placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
          value={state.writer}
          onChange={handleChangeState}
        />
      </div>
      <h2>제목</h2>
      <div>
        <input
          ref={titleInput}
          name="title"
          placeholder="제목을 입력해주세요. (50자 이내)"
          value={state.title}
          onChange={handleChangeState}
          maxLength={50}
        />
      </div>
      <h2>내용</h2>
      <textarea
        ref={contentInput}
        name="content"
        placeholder="내용을 입력해주세요. (200자 이내)"
        value={state.content}
        onChange={handleChangeState}
        maxLength={200}
        rows="10"
      />
      <div>
        <button onClick={handleSubmit}>💣🔪🔥추가🔥🔪💣</button>
      </div>
    </div>
  );
};

export default AddTodoForm;
