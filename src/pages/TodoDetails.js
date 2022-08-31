import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Comment from "../components/Comment";
import axios from "axios";

const ListDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [list, setlist] = useState("null");
  const getListDetail = async () => {
    let url = `http://localhost:5000/todos/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setlist(data);
  };

  useEffect(() => {
    getListDetail();
  }, []);

  return (
    <>
      <StContainer>
        <StDialog>
          <div>
            <StDialogHeader>
              <div>id : {list?.id}</div>
              <div>작성자 : {list?.writer}</div>
              <StButton
                borderColor="#ddd"
                onClick={() => {
                  navigate("/list");
                }}
              >
                이전으로
              </StButton>
              <StTitle>{list?.title}</StTitle>
              <StBody>{list?.content}</StBody>
              <button
                onClick={() => {
                  var inputString1 = prompt("내용을 입력해주세요.", list.title);
                  var inputString2 = prompt(
                    "내용을 입력해주세요.",
                    list.content
                  );
                  axios.patch("http://localhost:5000/todos/" + list.id, {
                    ...list,
                    title: inputString1,
                    content: inputString2,
                  });
                }}
              >
                수정
              </button>
            </StDialogHeader>
          </div>
        </StDialog>
      </StContainer>
      <Comment />
    </>
  );
};

export default ListDetail;

const StContainer = styled.div`
  border: 2px solid #eee;
  align-items: center;
  justify-content: center;
  display: Flex;
`;

const StDialog = styled.div`
  width: 100%;
  height: 80vh;
  border: 1px solid #eee;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  height: 80px;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
  text-align: center;
`;

const StBody = styled.main`
  padding: 0 24px;
  text-align: center;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: pink;
  border-radius: 12px;
  cursor: pointer;
`;
