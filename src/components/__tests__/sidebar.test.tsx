import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Sidebar from "../sidebar/sidebar";

describe("Sidebar", () => {
  beforeEach(() => {
    render(<Sidebar />);
  });

  it("shows the header for the brand", () => {
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });
  it("renders a heading", () => {
    const sidebarItems = screen.getAllByRole("listitem");
    expect(sidebarItems.length).toBe(3);
  });
  it("toggle the sidebar on click", () => {
    const toggleButton = screen.getByRole("button", {
      name: "toggle-close",
    });
    expect(screen.getByRole("complementary")).toHaveClass("md:left-0");
    fireEvent.click(toggleButton);
    expect(screen.getByRole("complementary")).toHaveClass("md:-left-full");
    fireEvent.click(toggleButton);
    expect(screen.getByRole("complementary")).toHaveClass("md:left-0");
  });
});
