import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #ee7f01;
  border: 2px solid #ee7f01;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;

  &:hover {
    background-color: #fff;
    color: #ee7f01;
  }
`;

const CustomButton = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default CustomButton;
