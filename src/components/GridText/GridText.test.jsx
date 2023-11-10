import { GridText } from ".";
import { renderTheme } from "../../styles/render-theme";

import mock from "./mock";

describe("<GridText />", () => {
  it("should render grid content", () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it("should render with background undefined", () => {
    const { container } = renderTheme(<GridText {...mock} background={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
