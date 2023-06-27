import React from "react";
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

test("Counter", () => {
  render(<Counter />);
  const count = screen.getByText(/Count:/i);
  const increment = screen.getByText(/Increment/i);
  expect(count).toHaveTextContent("Count: 0");
  userEvent.click(increment)
  expect(count).toHaveTextContent("Count: 1");
  userEvent.click(increment)
  expect(count).toHaveTextContent("Count: 2");
});
