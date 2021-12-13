import styled from "styled-components";
import { Close, Telegram } from "@mui/icons-material";
import { infoSiteParams } from "../../data/infoSiteParams";
import {
  Button,
  Container,
  Drawer,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const SectionBackground = styled.div`
  background-color: rgb(255,255,255);
`;

const ProfileImage = styled.img`
  max-width: 180px;
  max-height: 180px;
  border-radius: 999px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), 0 0 15px rgba(150, 150, 150, 0.5);
`;

const MoreInfoImageContainer = styled.div`
  text-align: center;
`;

const IconImage = styled.img`
  margin-right: 16px;
  width: 44px;
`;

const RobotsImage = styled.img`
  height: 90px;
`;

const SharethroughImage = styled.img`
  height: 50px;
`;

const JournalismImage = styled.img`
  height: 220px;
  border-radius: 6px;
`;

const Contact = () => {
  const [showMoreAboutMe, setShowMoreAboutMe] = useState(false);

  return (
    <SectionBackground>
      <Container maxWidth="xl" sx={{ mt:8, pt: 8, pb: 4 }}>
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
                <Typography>
                  {infoSiteParams["contact-profile-credentials"].content}
                </Typography>
                <Button variant="outlined" sx={{mt:2}} onClick={() => setShowMoreAboutMe(true)}>More about me</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    
        <Drawer open={showMoreAboutMe} anchor="right" onClose={() => setShowMoreAboutMe(false)}>
          <Stack direction="row">
            <Button onClick={() => setShowMoreAboutMe(false)}><Close /></Button>
          </Stack>
          <Stack spacing={2} p={4} sx={{width: {xs: '400px'}}}>
            <Typography variant="h4" align="center">My background</Typography>
            <MoreInfoImageContainer>
              <div>
                <IconImage src="img/js.webp" />
                <IconImage src="img/node.webp" />
                <IconImage src="img/docker.webp" />
                <IconImage src="img/firebase.webp" />
              </div>
            </MoreInfoImageContainer>
            <Typography align="center">
              I was a Software Dev for 10 years. I've worked with SQL, React, Node, PHP, Java, Linux, Docker, Snowflake, Firebase, REST APIs and many other technologies, and still use most of those today.
            </Typography>
            <MoreInfoImageContainer>
              <RobotsImage src="img/robots.jpg" />
            </MoreInfoImageContainer>
            <Typography align="center">
              I also code apps and helper robots for myself, or to help friends and family to optimize or automate their work. I have also coded games.
            </Typography>
            <MoreInfoImageContainer>
              <SharethroughImage src="img/sharethrough.webp" />
            </MoreInfoImageContainer>
            <Typography align="center">
              At the end of 2020 I became a Product Manager at Sharethrough, an ad-tech company where I lead the roadmap and development of an ad exchange which handles billions of transactions per day.
            </Typography>
            <MoreInfoImageContainer>
              <JournalismImage src="img/journalism.jpg" />
            </MoreInfoImageContainer>
            <Typography align="center">
              Additionally, from 2008 to 2018, I was a tech journalist for the newspaper Vanguardia Liberal in Colombia.
            </Typography>
          </Stack>
        </Drawer>
      </Container>
    </SectionBackground>
  );
}

export default Contact;
