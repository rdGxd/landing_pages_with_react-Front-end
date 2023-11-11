import { Base } from "../Base/index.jsx";
import { mock } from "../Base/mock.jsx";
import * as Styled from "./styles.js";

export const Home = () => {
  return (
    <Styled.Wrapper>
      <Base {...mock} />
    </Styled.Wrapper>
  );
};
