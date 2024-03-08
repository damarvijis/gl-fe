import Home from "../pages";
import "@testing-library/jest-dom";
import {  render, screen } from "@testing-library/react";

describe("Calculator", () => {
  it("renders a calculator", () => {
    render(<Home />);
    expect(screen.getByText("Hello! Welcome to tech talk")).toBeInTheDocument();
    expect(screen.getByText("A Journey into DevOps and infrastructure")).toBeInTheDocument();
  });
});