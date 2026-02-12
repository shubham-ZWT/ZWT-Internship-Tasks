import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button"; // Adjust the path as needed
import { describe, test, expect } from "vitest";

describe("Button Component", () => {
  test("renders the initial name prop and zero count", () => {
    // 1. Render with a specific prop
    render(<Button Name="Clicks" />);

    // 2. Check if the text exists (Case-insensitive regex)
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent(/Clicks : 0/i);
  });

  test("increments the counter when the button is clicked", async () => {
    // 1. Setup user instance
    const user = userEvent.setup();
    render(<Button Name="Score" />);

    // 2. Find the button
    const button = screen.getByRole("button", { name: /increase counter/i });
    const display = screen.getByRole("heading");

    // 3. Simulate click
    await user.click(button);

    // 4. Assert update
    expect(display).toHaveTextContent(/Score : 1/i);

    // 5. Simulate another click
    await user.click(button);
    expect(display).toHaveTextContent(/Score : 2/i);
  });
});
