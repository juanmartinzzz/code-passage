import { Card, Container, Stack } from "@mui/material";
import styled from "styled-components";

const Body = () => (
  <Container maxWidth="xl">
    <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
      <Card>AAA</Card>
      <Card>BBB</Card>
    </Stack>
  </Container>
);

export default Body;
