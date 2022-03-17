import { screen, render } from "@testing-library/react";

import { Counter } from "./";

describe("Counter", () => {
  test("it should render", () => {
    render(<Counter />);

    expect(screen.getByText("Current value: 1")).toBeInTheDocument();
  });

  test("it should render with custom initial value", () => {
    render(<Counter initialValue={10} />);

    expect(screen.getByText("Current value: 10")).toBeInTheDocument();
  });

  test("it should add", async () => {
    render(<Counter />);

    const button = await screen.findByText("Add");

    button.click();

    expect(screen.getByText("Current value: 2")).toBeInTheDocument();
  });

  test("it should subtract", async () => {
    render(<Counter />);

    const button = await screen.findByText("Subtract");

    button.click();

    expect(screen.getByText("Current value: 0")).toBeInTheDocument();
  });

  test("it shouldn't go lower than 0", async () => {
    render(<Counter />);

    const button = await screen.findByText("Subtract");

    button.click();
    button.click();
    button.click();

    expect(screen.getByText("Current value: 0")).toBeInTheDocument();
  });
});
