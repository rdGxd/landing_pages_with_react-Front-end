import { Base } from "../Base/index.jsx";
import { mockBase } from "../Base/stories.jsx";
import * as Styled from "./styles.js";

export const Home = () => {
  return (
    <Styled.Wrapper>
      <Base {...mockBase} />
    </Styled.Wrapper>
  );
};
