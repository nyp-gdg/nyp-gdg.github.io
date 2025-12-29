import type { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// GDG Brand Colors
export const gdgColors = {
  blue: "#4285F4",
  red: "#EA4335",
  yellow: "#FBBC04",
  green: "#34A853",
} as const;

// Create theme based on mode
export function createAppTheme(mode: PaletteMode) {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: gdgColors.blue,
        light: "#669DF6",
        dark: "#1A73E8",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: gdgColors.green,
        light: "#5BB974",
        dark: "#1E8E3E",
        contrastText: "#FFFFFF",
      },
      error: {
        main: gdgColors.red,
        light: "#EE675C",
        dark: "#C5221F",
      },
      warning: {
        main: gdgColors.yellow,
        light: "#FDD663",
        dark: "#F9AB00",
      },
      background: {
        default: mode === "light" ? "#FFFFFF" : "#121212",
        paper: mode === "light" ? "#F8F9FA" : "#1E1E1E",
      },
      text: {
        primary: mode === "light" ? "#202124" : "#E8EAED",
        secondary: mode === "light" ? "#5F6368" : "#9AA0A6",
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: "3.5rem",
        fontWeight: 700,
        lineHeight: 1.2,
        "@media (max-width:600px)": {
          fontSize: "2.5rem",
        },
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: 1.3,
        "@media (max-width:600px)": {
          fontSize: "2rem",
        },
      },
      h3: {
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: 1.4,
        "@media (max-width:600px)": {
          fontSize: "1.5rem",
        },
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 500,
        lineHeight: 1.5,
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 500,
        lineHeight: 1.5,
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.6,
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.6,
      },
      button: {
        textTransform: "none",
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 24,
            padding: "10px 24px",
            fontSize: "1rem",
          },
          containedPrimary: {
            "&:hover": {
              backgroundColor: "#1A73E8",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 500,
          },
        },
      },
    },
  });
}
