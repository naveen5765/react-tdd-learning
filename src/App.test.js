import { render, screen, fireEvent } from "@testing-library/react";
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

test("should display 'zero' when the entered numeber is 0", () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText("Enter a number");
  fireEvent.change(inputElement, { target: { value: "0" } });

  const result = screen.getByTestId("result");
  expect(result).toHaveTextContent("zero");
});

test("should display 'one' when the entered number is 1", () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText("Enter a number");
  fireEvent.change(inputElement, { target: { value: "1" } });

  const result = screen.getByTestId("result");
  expect(result).toHaveTextContent("one");
});

test("should display 'two' when the entered number is 2", () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText("Enter a number");
  fireEvent.change(inputElement, { target: { value: "2" } });

  const result = screen.getByTestId("result");
  expect(result).toHaveTextContent("two");
});

test("should display 'nineteen' when the entered number is 19", () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText("Enter a number");
  fireEvent.change(inputElement, { target: { value: "19" } });

  const result = screen.getByTestId("result");
  expect(result).toHaveTextContent("nineteen");
});

test("should display 'twenty' when the entered number is 20", () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText("Enter a number");
  fireEvent.change(inputElement, { target: { value: "20" } });

  const result = screen.getByTestId("result");
  expect(result).toHaveTextContent("twenty");
});

test("should display 'twenty one' when the entered number is 21", () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText("Enter a number");
  fireEvent.change(inputElement, { target: { value: "21" } });

  const result = screen.getByTestId("result");
  expect(result).toHaveTextContent("twenty one");
});
