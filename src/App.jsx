import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import theme from "./theme/theme";
import Home from "./pages/Home";
import PageB from "./pages/PageB";

function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pageB" element={<PageB />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
