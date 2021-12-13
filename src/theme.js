import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#674092",
    },
    secondary: {
      main: "#f10c5a",
    },
    background: {
      default: "#f0f0f0",
    },
  },
  status: {
    danger: orange[500],
  },
  typography: {
    fontFamily: ["IBM Plex Sans KR", "Roboto", "sans-serif"].join(","),
    h3: {
      fontWeight: "700",
      color: "rgb(50,50,50)",
    },
    h6: {
      fontWeight: "300",
      color: "rgb(50,50,50)",
    },
  },
});

export default theme;
