import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import TextInput from "../text-input";

describe("TextInput", () => {
  it("renders text input with Label", () => {
    const { container } = render(<TextInput label="Label" />);
    expect(container).toMatchSnapshot();
  });

  it("renders text input without Label", () => {
    const { container } = render(<TextInput label="Label" isLabelHidden />);
    expect(container).toMatchSnapshot();
  });
});
