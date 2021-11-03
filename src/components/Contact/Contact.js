import styled from "styled-components";
import { Telegram } from "@mui/icons-material";
import { infoSiteParams } from "../../data/infoSiteParams";
import {
  Button,
  Card,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const ProfileImage = styled.img`
  max-width: 180px;
  max-height: 180px;
  border-radius: 999px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`;

const Contact = () => (
  <Container maxWidth="xl" sx={{ pt: 8, pb: 4 }}>
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Stack spacing={2}>
          <Typography variant="h5">
            {infoSiteParams["contact-call-to-action"].content}
          </Typography>
          <Stack>
            <TextField label={infoSiteParams["contact-email-label"].content} />
            <Typography variant="caption" color="primary">
              {infoSiteParams["contact-email-spam"].content}
            </Typography>
          </Stack>
          <Button variant="contained" endIcon={<Telegram />}>
            Send
          </Button>
        </Stack>
      </Grid>

      <Grid item xs={6}>
        <Grid container>
          <Grid item xs={12} lg={4}>
            <ProfileImage src="img/juan-profile.jpg" />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Typography variant="h3">
              {infoSiteParams["contact-profile-title"].content}
            </Typography>
            <br />
            <Typography>
              {infoSiteParams["contact-profile-credentials-1"].content}
            </Typography>
            <br />
            <Typography>
              {infoSiteParams["contact-profile-credentials-2"].content}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
);

export default Contact;
