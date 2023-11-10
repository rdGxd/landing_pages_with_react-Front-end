import { GridText } from "../../components/GridText";
import gridMock from "../../components/GridText/mock";
import mock from "./mock";

export const mockBase = {
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
  ...mock,
};
