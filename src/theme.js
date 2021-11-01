import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  status: {
    danger: orange[500],
  },
});

export default theme;
