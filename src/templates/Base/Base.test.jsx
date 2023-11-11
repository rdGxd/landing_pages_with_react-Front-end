import { Base } from ".";
import { renderTheme } from "../../styles/render-theme";
import { mock } from "./mock";

describe("<Base />", () => {
  it("should render with Base", () => {
    const { container } = renderTheme(<Base {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it("should render with links undefined", () => {
    const { container } = renderTheme(<Base links={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
