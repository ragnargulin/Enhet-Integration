import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";

import App from "../src/App";

describe("App", () => {
  it("should renders headline", () => {
    render(<App />);
    const headline = screen.getByText("Vite + React");
    expect(headline).toBeInTheDocument();
  });
  test("increases score when button clicked", () => {
  render(<App />);
  
  const button = screen.getByText("Increase Score");
  const score = screen.getByTestId("score");

  expect(score).toHaveTextContent("Score: 0");

  fireEvent.click(button);
  expect(score).toHaveTextContent("Score: 1");
});
});
