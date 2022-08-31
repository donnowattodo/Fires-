import { useState, useEffect } from "react";
import nextId from "react-id-generator";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "./common/Button";

const Comment = () => {
  let id = nextId();
  const todo = useParams();
  const initialState = {
    id: id,
    writer: "",
    body: "",
    todo: todo.id,
  };
  const [body, setBody] = useState(initialState);
  const [comments, setComments] = useState([]);
  const getTodos = async () => {
    let url = `http://localhost:5000/comments`;
    let response = await fetch(url);
    let data = await response.json();
    setComments(data);
  };
  useEffect(() => {
    getTodos();
  }, []);

  let commentList = comments.filter((comment) => {
    return String(comment.todo) === todo.id;
  });
  const handleChangeState = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };
  let addComment = () => {
    axios.post("http://localhost:5000/comments", { ...body, id: id });
    setBody(initialState);
  };
  return (
    <div>
      <div>
        <h2>댓글 모아보기</h2>
      </div>
      <div>
        <input
          name="writer"
          placeholder="작성자"
          value={body.writer}
          onChange={handleChangeState}
        />

        <input
          name="body"
          placeholder="내용을 입력해주세요. (50자 이내)"
          value={body.body}
          onChange={handleChangeState}
        />
        <button onClick={addComment}>🔥댓글</button>
      </div>
      {commentList.map((comment) => {
        return (
          <div key={comment.id}>
            <h3>{comment.body}</h3>
            <p>작성자 : {comment.writer}</p>
            <Button
              onClick={() => {
                var inputString = prompt("내용을 입력해주세요. (50자 이내)");
                axios.patch("http://localhost:5000/comments/" + comment.id, {
                  ...comment,
                  body: inputString,
                });
              }}
            >
              ✍
            </Button>
            <Button
              onClick={() => {
                axios.delete("http://localhost:5000/comments/" + comment.id);
                setBody(initialState);
              }}
            >
              🚒
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
