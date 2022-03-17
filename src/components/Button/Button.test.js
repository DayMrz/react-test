import { render, screen } from "@testing-library/react";

import { Button } from "./";

describe("Button", () => {
  test("should render with custom text", () => {
    render(<Button>custom text</Button>);

    expect(screen.getByText("custom text")).toBeInTheDocument();
  });

  test("should render with type equals to button if not type passed", async () => {
    render(<Button>custom text</Button>);

    const button = screen.getByText("custom text");

    expect(button).toHaveAttribute("type", "submit");
  });

  test("should render with type equals to button", async () => {
    render(<Button type="button">custom text</Button>);

    const button = await screen.findByText("custom text");

    expect(button).toHaveAttribute("type", "button");
  });
});
