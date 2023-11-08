import { screen } from "@testing-library/react";
import { LogoLink } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<LogoLink />", () => {
  it("should render text logo", () => {
    renderTheme(<LogoLink link="#target" text="text" />);
    const heading = screen.getByRole("link", { name: "text" });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("href", "#target");
  });

  it("should render image logo", () => {
    renderTheme(<LogoLink link="#target" text="text" srcImg="image.jpg" />);
    const img = screen.getByRole("img", { name: "text" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "image.jpg");
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<LogoLink link="#target" text="text" srcImg="image.jpg" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
