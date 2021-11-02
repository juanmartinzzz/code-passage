import { Card, Container, Grid, Stack, Typography } from "@mui/material";
import { infoSiteParams } from "../../data/infoSiteParams";

const ProductCard = ({ title, videoUrl, legend }) => (
  <Card sx={{ p: 2 }}>
    <Stack
      alignContent="center"
      alignItems="center"
      spacing={2}
      sx={{ pl: 8, pr: 8 }}
    >
      {/* <Container sx={{p:2}}> */}
      <Typography variant="h3">{title}</Typography>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube-nocookie.com/embed/${videoUrl}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Typography variant="h6">{legend}</Typography>
      {/* </Container> */}
    </Stack>
  </Card>
);

const Products = () => (
  <Container maxWidth="xl" sx={{ pt: 8 }}>
    <Grid container spacing={4} direction="row" justifyContent="center">
      <Grid item xs={12} lg={6}>
        <ProductCard
          title={infoSiteParams["product-1-title"].content}
          videoUrl="ZSdgSVyV5Jg"
          legend={infoSiteParams["product-1-legend"].content}
        />
      </Grid>

      <Grid item xs={12} lg={6}>
        <ProductCard
          title={infoSiteParams["product-2-title"].content}
          videoUrl="bExHfIQGisM"
          legend={infoSiteParams["product-2-legend"].content}
        />
      </Grid>
    </Grid>
  </Container>
);

export default Products;
