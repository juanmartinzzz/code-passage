import theme from "./theme";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <Header />

      <Products />

      <Contact />
    </CssBaseline>
  </ThemeProvider>
);

export default App;
