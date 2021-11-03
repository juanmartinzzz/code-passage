import { Card, Container, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import theme from "../../theme";

const SuccessStoriesBackground = styled.div`
  background-color: rgb(150, 150, 150);
  background-color: ${theme.palette.primary.light};
`;

const SuccessStoryImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 999px;
  background-color: rgb(220, 220, 220);
  box-shadow: 0 0 13px rgba(0, 0, 0, 0.2);
`;

const SuccessStory = () => (
  <Card sx={{ p: 2 }}>
    <Stack alignItems="center" spacing={2}>
      <SuccessStoryImage src="" />
      <Typography variant="h6">Name or title</Typography>
      <Typography>
        Long text with many words telling about difference success cases and
        telling stuff
      </Typography>
    </Stack>
  </Card>
);

const SuccessStories = () => (
  <SuccessStoriesBackground>
    <Container sx={{ pt: 4, pb: 4 }}>
      <Stack direction="row" spacing={4} justifyContent="space-evenly">
        <SuccessStory />
        <SuccessStory />
        <SuccessStory />
      </Stack>
    </Container>
  </SuccessStoriesBackground>
);

export default SuccessStories;
