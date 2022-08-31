import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TodoHome = () => {
  const nagivate = useNavigate();
  return (
    <div>
      <BoxStyle
        className="Homebox"
        onClick={() => {
          nagivate("/add");
        }}
      >
        <h2>🔥만기록</h2>
      </BoxStyle>
      <BoxStyle
        className="Homebox"
        onClick={() => {
          nagivate("/list");
        }}
      >
        <h2>🔥만S</h2>
      </BoxStyle>
    </div>
  );
};

const div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const BoxStyle = styled.div`
    padding: 15px;
    margin: 10px;
    background-color: pink;
    cursor: pointer;
    :hover {
      box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 1.5px;
    `;

export default TodoHome;
