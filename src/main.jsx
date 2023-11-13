import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global-styles.js";
import { theme } from "./styles/theme.js";
import Home from "./templates/Home/index.jsx";
import { PageNotFound } from "./templates/PageNotFound/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  </ThemeProvider>,
);
