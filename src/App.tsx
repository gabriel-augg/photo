import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { ThemeProvider } from "@emotion/react";
import { StandartTheme } from "./themes";
import Sidebar from "./components/Drawer";

function App() {
  return (
    <>
      <ThemeProvider theme={StandartTheme}>
        <BrowserRouter>
        <Sidebar/>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
