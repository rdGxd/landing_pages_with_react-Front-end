import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/global-styles.js";
import { theme } from "./styles/theme.js";
import Home from "./templates/Home/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Home />
  </ThemeProvider>,
);
