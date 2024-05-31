import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactNode } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../assets/logo.svg";

interface IChildren {
  children: ReactNode;
}

export const PageLayout: React.FC<IChildren> = ({ children }) => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {mdDown && (
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box component="img" src={logo} alignSelf="center" width={80} />
          </Toolbar>
        </AppBar>
      )}
      {children}
      <Box></Box>
    </>
  );
};
