import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Sidebar from "../sidebar/sidebar";

describe("Home", () => {
  it("shows the header for the brand", () => {
    render(<Sidebar />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });
  it("renders a heading", () => {
    render(<Sidebar />);

    const sidebarItems = screen.getAllByRole("listitem");
    expect(sidebarItems.length).toBe(3);
  });
});
