import { ReactNode } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import WindowIcon from "@mui/icons-material/Window";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  Icon,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

interface IChildren {
  children: ReactNode;
}

export const Sidebar: React.FC<IChildren> = ({children}) => {
  const navigate = useNavigate()
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Drawer variant={mdDown ? "temporary" : "permanent"}>
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
          paddingBottom={10}
        >
          <Box
            width="100%"
            height={theme.spacing(10)}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box component="img" src={logo} />
          </Box>

          <Box flex={1} marginTop={12}>
            <List component="nav">
              <ListItemButton selected={true}>
                <ListItemIcon>
                  <Icon>
                    <WindowIcon color="secondary" />
                  </Icon>
                </ListItemIcon>

                <ListItemText
                  primary="Feed"
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                      marginLeft: "-15px",
                    },
                  }}
                />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <Icon>
                    <AccountCircleIcon color="secondary" />
                  </Icon>
                </ListItemIcon>

                <ListItemText
                  primary="Profile"
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                      marginLeft: "-15px",
                    },
                  }}
                />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <Icon>
                    <AddCircleIcon color="secondary" />
                  </Icon>
                </ListItemIcon>

                <ListItemText
                  primary="Publish"
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                      marginLeft: "-15px",
                    },
                  }}
                />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <Icon>
                    <BookmarkIcon color="secondary" />
                  </Icon>
                </ListItemIcon>

                <ListItemText
                  primary="Saved"
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                      marginLeft: "-15px",
                    },
                  }}
                />
              </ListItemButton>
            </List>
          </Box>
          {false && (
            <Box display="flex" flexDirection="column" paddingX={2} gap={2}>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => navigate('/signup')}
                sx={{
                  justifyContent: "flex-start",
                }}
              >
                SIGN UP
              </Button>
              <Button
                color="secondary"
                variant="outlined"
                onClick={() => navigate('/signin')}
                sx={{
                  justifyContent: "flex-start",
                }}
              >
                SIGN IN
              </Button>
            </Box>
          )}

          {true && (
            <Box>
              <List component="nav">
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      alt="profile"
                      src="https://github.com/gabriel-augg.png"
                    />
                  </ListItemAvatar>

                  <ListItemText
                    primary="Account"
                    primaryTypographyProps={{
                      sx: {
                        fontWeight: "bold",
                        fontSize: "1.3rem",
                      },
                    }}
                  />
                </ListItemButton>
              </List>
            </Box>
          )}
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={ mdDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
}
