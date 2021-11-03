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
    },
    h6: {
      fontWeight: "300",
      color: "rgb(50,50,50)",
    },
  },
});

export default theme;
