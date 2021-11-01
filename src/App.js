import theme from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <Header />

      <Body />
    </CssBaseline>
  </ThemeProvider>
);

export default App;
