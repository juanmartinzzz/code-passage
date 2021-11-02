import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    // mode: "dark",
  },
  status: {
    danger: orange[500],
  },
  typography: {
    fontFamily: ["IBM Plex Sans KR", "Roboto", "sans-serif"].join(","),
    h3: {
      fontWeight: "700",
      color: "rgb(50,50,50)",
      textShadow:
        "0 0 1px rgba(255,255,255, 0.7), 0 0 3px rgba(255,255,255, 0.5), 0 0 15px rgba(255,255,255, 0.4)",
    },
    h6: {
      fontWeight: "300",
      color: "rgb(50,50,50)",
      textShadow:
        "0 0 1px rgba(255,255,255, 0.7), 0 0 3px rgba(255,255,255, 0.5), 0 0 15px rgba(255,255,255, 0.4)",
    },
  },
});

export default theme;
