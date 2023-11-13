import { GridTwoColum } from ".";
import { renderTheme } from "../../styles/render-theme";

import mock from "./mock";

describe("<GridTwoColumns />", () => {
  it("should render two column grid", () => {
    const { container } = renderTheme(<GridTwoColum {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it("should render two column grid", () => {
    const { container } = renderTheme(<GridTwoColum {...mock} background={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
