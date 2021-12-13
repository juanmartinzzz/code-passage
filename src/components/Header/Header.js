import styled from "styled-components";
import { ThemeProvider } from "@emotion/react";
import { Menu } from "@mui/icons-material";
import { infoSiteParams } from "../../data/infoSiteParams";
import {
  Container,
  createTheme,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import theme from "../../theme";

const themeDarkButtonsEvenInGlobalDarkMode = (theme) => () =>
  createTheme({
    ...theme,
    palette: {
      mode: "light",
    },
    typography: {
      h1: {
        fontWeight: "700",
        color: "rgb(255,255,255)",
        textShadow:
          "0 0 3px rgba(0,0,0, 0.5), 0 0 5px rgba(0,0,0, 0.6), 0 0 15px rgba(0,0,0, 0.9)",
      },
      h5: {
        fontWeight: "700",
        color: "rgb(160,0,190)",
        color: "rgb(20,20,20)",
        acolor: "rgb(255,255,255)",
        textShadow:
          "0 0 1px rgba(255,255,255, 1), 0 0 3px rgba(255,255,255, 1), 0 0 10px rgba(255,255,255, 1), 0 0 15px rgba(255,255,255, 1), 0 0 20px rgba(255,255,255, 1), 0 0 30px rgba(255,255,255, 1)",
      },
    },
  });

const Hero = styled.div`
  height: 800px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("img/bridge.jpg");
`;

const FixedHeightStack = styled(Stack)`
  min-height: 800px;
`;

const Header = () => (
  <ThemeProvider theme={themeDarkButtonsEvenInGlobalDarkMode(theme)}>
    <Hero>
      <FixedHeightStack justifyContent="space-between">
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="menu">
            <Menu />
          </IconButton>
        </Stack>

        <Container maxWidth="xl">
          <Typography variant="h5" align="left">
            {(infoSiteParams["header-text-1"] || { content: "" }).content}
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant="h5" align="center">
            {(infoSiteParams["header-text-2-1"] || { content: "" }).content}
          </Typography>
          <Typography variant="h5" align="center">
            {(infoSiteParams["header-text-2-2"] || { content: "" }).content}
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant="h5" align="right">
            {(infoSiteParams["header-text-3"] || { content: "" }).content}
          </Typography>
        </Container>

        <Container>
          <Typography variant="h1" align="center">
            {(infoSiteParams["header-text-4"] || { content: "" }).content}
          </Typography>
          <br />
        </Container>
      </FixedHeightStack>
    </Hero>
  </ThemeProvider>
);

export default Header;
