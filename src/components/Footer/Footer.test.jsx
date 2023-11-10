import { Footer } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<Footer />", () => {
  it("should render with footer", () => {
    const { container } = renderTheme(<Footer html={"<h1>Oi</h1>"} />);
    expect(container).toMatchSnapshot();
  });
});
