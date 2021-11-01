import styled from "styled-components";
import { ThemeProvider } from "@emotion/react";
import { Delete, Menu } from "@mui/icons-material";
import { infoSiteParams } from "../../data/infoSiteParams";
import {
  Container,
  createTheme,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

const Hero = styled.div`
  height: 800px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("img/bridge.jpg");
`;

const Header = () => (
  <ThemeProvider
    theme={() =>
      createTheme({
        palette: {
          mode: "light",
        },
      })
    }
  >
    <Hero>
      <Stack direction="row" spacing={1}>
        <IconButton aria-label="delete">
          <Menu />
        </IconButton>
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
      </Stack>

      <Container>
        <Typography variant="h1" color="primary" align="center">
          {infoSiteParams["header-title"].content}
        </Typography>
        <Typography variant="h5" color="primary">
          {infoSiteParams["header-subtitle"].content}
        </Typography>
      </Container>
    </Hero>
  </ThemeProvider>
);

export default Header;
