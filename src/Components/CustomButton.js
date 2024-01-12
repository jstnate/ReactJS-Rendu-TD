import React from "react";

const CustomButton = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default CustomButton;
