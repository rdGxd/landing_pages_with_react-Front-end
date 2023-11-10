import { GridImage } from ".";
import { renderTheme } from "../../styles/render-theme";

import mock from "./mock";

describe("<GridImage />", () => {
  it("should render with images and content", () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it("should render with background undefined", () => {
    const { container } = renderTheme(<GridImage {...mock} background={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
