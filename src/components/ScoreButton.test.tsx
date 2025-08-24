import { render, screen, fireEvent } from "@testing-library/react";
import {  expect, vi, test } from "vitest";

import ScoreButton from "./ScoreButton";


test("renders button correctly", () => {
  render(<ScoreButton onClick={() => {}} />);
  expect(screen.getByText("Increase Score")).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const handleClick = vi.fn();
  render(<ScoreButton onClick={handleClick} />);
  
  fireEvent.click(screen.getByText("Increase Score"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("renders without onClick prop", () => {
    const handleClick = vi.fn();
  render(<ScoreButton onClick={handleClick} />);
  expect(screen.getByText("Increase Score")).toBeInTheDocument();
});
