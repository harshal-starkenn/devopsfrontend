import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders test react app", () => {
  render(<App />);
  const linkElement = screen.getByText(/React app/i);
  expect(linkElement).toBeInTheDocument();
});

test("render the child component in the document", () => {
  const component = render(<App />);
  const childComponent = component.getByText("This is HomePage!");
  expect(childComponent).toBeInTheDocument();
});
