"use client";
import { red } from "@mui/material/colors";
import { Heebo, Roboto } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const heebo = Heebo({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export let theme = createTheme({
  palette: {
    primary: {
      main: "#FF6464",
    },
    secondary: {
      light: "#EDF7FA",
      main: "#00A8CC",
    },
    error: {
      main: red.A400, 
    },
    text: {
      primary: "#21243D",
    },
  },
  typography: {
    fontFamily: heebo.style.fontFamily,
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: "680px",
          "@media (max-width:600px)": {
            maxWidth: "680px",
          },
        },
        maxWidthMd: {
          maxWidth: "860px",
          "@media (max-width:900px)": {
            maxWidth: "860px",
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          color: "black",

          "&:hover, &.active": {
            color: "#FF6464",
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: { color: "white" },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);
