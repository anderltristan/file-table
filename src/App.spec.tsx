import App from "./App";
import { render } from "@testing-library/react";

describe("App test", () => {
  it("Renders the app", () => {
    const { container } = render(
      <App />
    );

    expect(container).toBeInTheDocument();
  });
});