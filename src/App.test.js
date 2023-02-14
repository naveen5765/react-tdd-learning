import { render, screen } from "@testing-library/react";
import App from "./App";

test('should render title "Number to Word"', () => {
  render(<App />);

  const headerElement = screen.getByText(/Number to Word/i);

  expect(headerElement).toBeInTheDocument();
});

test("should render an input field to enter the number", () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText("Enter a number");

  expect(inputElement).toBeInTheDocument();
});
