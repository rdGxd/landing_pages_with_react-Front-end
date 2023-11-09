import { screen } from "@testing-library/react";
import { Menu } from ".";
import { renderTheme } from "../../styles/render-theme";

import { fireEvent } from "@storybook/testing-library";
import linksMocks from "../NavLinks/mock";
const logoData = {
  text: "Logo",
  link: "#target",
};

describe("<Menu />", () => {
  it("should render Logo and Main menu nav", () => {
    const { container } = renderTheme(<Menu links={linksMocks} logoData={logoData} />);
    expect(screen.getByRole("heading", { name: "Logo" })).toBeInTheDocument();

    expect(screen.getByRole("navigation", { name: "Main menu" })).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("should render menu mobile and button for open and close the menu", () => {
    renderTheme(<Menu links={linksMocks} logoData={logoData} />);

    const button = screen.getByLabelText("Open/Close menu");
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyle("display: none");

    // expect(button).toHaveStyleRule(`media: ${theme.media.lteMedium}`, "display: flex");

    // expect(button).toHaveStyleRule(`media: ${theme.media.lteMedium}`, "opacity: 0");
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByLabelText("Close menu")).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });

  it("should not render links", () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    expect(screen.queryByRole("navigation", { name: "Main menu" }).firstChild).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
