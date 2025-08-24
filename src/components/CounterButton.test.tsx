import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CounterButton from "./CounterButton";

describe("CounterButton", () => {
  it("should start with value 0", () => {
    render(<CounterButton />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Count is 0");
  });

  it("should increment the value when clicked", () => {
    render(<CounterButton />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(button).toHaveTextContent("Count is 1");

    fireEvent.click(button);
    fireEvent.click(button);
    expect(button).toHaveTextContent("Count is 3");
  });
});
