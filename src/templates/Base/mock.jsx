import { GridText } from "../../components/GridText";
import gridMock from "../../components/GridText/mock";
import linksMock from "../../components/NavLinks/mock";

export const mock = {
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </>
  ),
  links: linksMock,
  logoData: {
    text: "Logo",
    link: "#",
  },
  footerHtml: "<p>Teste de footer</p>",
};
