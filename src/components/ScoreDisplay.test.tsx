import { expect, test } from "vitest";

import { render, screen } from "@testing-library/react";
import ScoreDisplay from "./ScoreDisplay";


test("renders the score correctly", () => {
  render(<ScoreDisplay score={5} />);
  expect(screen.getByTestId("score")).toHaveTextContent("Score: 5");
});

test("updates score when prop changes", () => {
  const { rerender } = render(<ScoreDisplay score={0} />);
  expect(screen.getByTestId("score")).toHaveTextContent("Score: 0");

  rerender(<ScoreDisplay score={10} />);
  expect(screen.getByTestId("score")).toHaveTextContent("Score: 10");
});
