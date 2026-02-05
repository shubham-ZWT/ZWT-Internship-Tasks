import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb",
    },
    secondary: {
      main: "#22c55e",
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default muiTheme;
