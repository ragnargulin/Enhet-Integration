// src/components/CounterButton.tsx
import React from "react";

interface CounterButtonProps {
  onClick: () => void;
}

const CounterButton: React.FC<CounterButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Increase Score</button>;
};

export default CounterButton;
