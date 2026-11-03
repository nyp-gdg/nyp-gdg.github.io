import type { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// Official GDG on Campus Brand Colors
export const gdgColors = {
  // Core colors
  blue: "#4285F4",
  green: "#34A853",
  yellow: "#F9AB00",
  red: "#EA4335",
  black: "#1E1E1E",
  offWhite: "#F0F0F0",
  // Halftones
  halftoneBlue: "#57CAFF",
  halftoneGreen: "#5CDB6D",
  halftoneYellow: "#FFD427",
  halftoneRed: "#FF7DAF",
  // Pastels
  pastelBlue: "#C3ECF6",
  pastelGreen: "#CCF6C5",
  pastelYellow: "#FFE7A5",
  pastelRed: "#F8D8D8",
} as const;

// Official GDG on Campus Typography
export const gdgTypography = {
  fontFamily: '"Google Sans", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontFamilyMono: '"Google Sans Mono", "Roboto Mono", monospace',
} as const;

// Create theme based on mode
export function createAppTheme(mode: PaletteMode) {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: gdgColors.blue,
        light: gdgColors.halftoneBlue,
        dark: "#1A73E8",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: gdgColors.green,
        light: gdgColors.halftoneGreen,
        dark: "#1E8E3E",
        contrastText: "#FFFFFF",
      },
      error: {
        main: gdgColors.red,
        light: gdgColors.halftoneRed,
        dark: "#C5221F",
      },
      warning: {
        main: gdgColors.yellow,
        light: gdgColors.halftoneYellow,
        dark: "#E37400",
      },
      background: {
        default: mode === "light" ? "#FFFFFF" : "#121212",
        paper: mode === "light" ? "#F8F9FA" : gdgColors.black,
      },
      text: {
        primary: mode === "light" ? gdgColors.black : "#E8EAED",
        secondary: mode === "light" ? "#5F6368" : "#9AA0A6",
      },
    },
    typography: {
      fontFamily: gdgTypography.fontFamily,
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
