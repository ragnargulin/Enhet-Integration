import React from "react";

interface ScoreDisplayProps {
  score: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score }) => {
  return <h2 data-testid="score">Score: {score}</h2>;
};

export default ScoreDisplay;
