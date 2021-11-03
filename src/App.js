import theme from "./theme";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import { CssBaseline, ThemeProvider } from "@mui/material";
import SuccessStories from "./components/SuccessStories/SuccessStories";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <Header />

      <Products />

      <Contact />

      <SuccessStories />
    </CssBaseline>
  </ThemeProvider>
);

export default App;
