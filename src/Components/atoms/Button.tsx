import React from "react";

export type ButtonProps = {
  label: string;
  handleClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, handleClick }) => {
  return <button onClick={handleClick}>{label}</button>;
};

export default Button;
