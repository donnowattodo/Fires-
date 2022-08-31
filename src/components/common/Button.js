import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid gray;
  border-radius: 10px;
  width: 30px;
  height: 30px;
  background: transparent;
  color: red;
  font-weight: bold;
  font-size: large;
  &:hover {
    background: #fffa74;
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
