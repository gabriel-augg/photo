import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import { Sidebar } from "./components";
import { StandartTheme } from "./themes";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={StandartTheme}>
        <BrowserRouter>
          <Sidebar>
            <AppRoutes />
          </Sidebar>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
