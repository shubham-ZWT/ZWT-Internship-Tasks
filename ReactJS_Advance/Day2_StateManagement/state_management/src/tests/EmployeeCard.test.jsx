import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";
import EmployeeCard from "../components/EmployeeCard";

const mockEmployee = {
  id: 1,
  first_name: "John",
  email: "john@example.com",
};

test("renders employee details and calls handelDelete on button click", async () => {
  const user = userEvent.setup();
  const handelDeleteMock = vi.fn();

  render(
    <EmployeeCard
      id={mockEmployee.id}
      first_name={mockEmployee.first_name}
      email={mockEmployee.email}
      handelDelete={handelDeleteMock}
    />,
  );

  expect(
    screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === "p" && content.includes("John");
    }),
  ).toBeInTheDocument();
  expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();

  const deleteBtn = screen.getByRole("button", { name: /delete/i });
  await user.click(deleteBtn);

  expect(handelDeleteMock).toHaveBeenCalledTimes(1);
  expect(handelDeleteMock).toHaveBeenCalledWith(1);
});
