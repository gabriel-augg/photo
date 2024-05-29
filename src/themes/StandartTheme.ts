import { createTheme } from "@mui/material";

export const StandartTheme = createTheme({
    palette: {
        primary: {
            main: "#272727",
            dark: "#4D4D4D",
            light: '#CBCBCB',
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#FFFFFF",
            dark: "#D8D8D8",
            contrastText: "#000000",
        },
        background: {
            default: "#FFFFFF",
            paper: "#272727"
        }
    },
    

})