import {
    Box,
    Button,
    Container,
    Divider,
    TextField,
    Typography,
    useTheme,
  } from "@mui/material";
  
  import GoogleIcon from "@mui/icons-material/Google";
  import AppleIcon from "@mui/icons-material/Apple";
  
  export const SignIn: React.FC = () => {
    const theme = useTheme();
  
    return (
      <Container
        component="section"
        maxWidth="xs"
        sx={{
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <Box marginTop={10} component="main">
          <Typography variant="h6" color="primary" component="h1">
            Sign In
          </Typography>
  
          <Typography
            fontWeight="normal"
            color="primary"
            variant="h6"
            marginBottom={2}
            component="p"
          >
            Welcome back to Photo.
          </Typography>
  
          <TextField
            label="Email or username"
            fullWidth
            sx={{
              marginBottom: 2,
            }}
          />
  
  
          <TextField
            label="Password"
            fullWidth
            sx={{
              marginBottom: 2,
            }}
          />
  
          <Button
            variant="contained"
            fullWidth
            sx={{
              justifyContent: "flex-start",
              fontSize: "1.1em",
              paddingY: "0.5em",
              marginBottom: 1.5,
            }}
          >
            SIGN IN
          </Button>
  
          <Box display="flex" alignItems="center" gap={1} marginBottom={1.5}>
            <Typography color="primary">Already have an account?</Typography>
            <Button
              variant="outlined"
              sx={{
                paddingY: 0.3,
              }}
            >
              Sign In
            </Button>
          </Box>
  
          <Divider sx={{ bgcolor: "black", mb: 2 }} />
  
          <Button
            fullWidth
            variant="outlined"
            sx={{
              borderRadius: 5,
              paddingY: 1,
              justifyContent: "inherit",
              gap: 2,
              marginBottom: 1,
            }}
            startIcon={<GoogleIcon fontSize="large" sx={{ color: "black" }} />}
          >
            Continue with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              borderRadius: 5,
              paddingY: 1,
              justifyContent: "inherit",
              gap: 2,
            }}
            startIcon={<AppleIcon fontSize="large" sx={{ color: "black" }} />}
          >
            Continue with Apple
          </Button>
        </Box>
      </Container>
    );
  };
  