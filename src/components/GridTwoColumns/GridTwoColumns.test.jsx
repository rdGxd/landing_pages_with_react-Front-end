import { screen } from "@testing-library/react";
import { GridTwoColumns } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<GridTwoColumns />", () => {
  it("should render", () => {
    renderTheme(<GridTwoColumns>Children</GridTwoColumns>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
