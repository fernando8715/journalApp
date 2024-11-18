import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    },
    // typography: {
    //     h5: {
    //         fontSize: '.2rem',
    //         '@media (min-width:250px)': {
    //             fontSize: '.1rem',
    //         },
    //     }
    // }
})