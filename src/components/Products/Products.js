import { Container, Grid } from "@mui/material";
import { infoSiteParams } from "../../data/infoSiteParams";
import Product from "./Product";

const Products = () => (
  <Container maxWidth="xl" sx={{ pt: 8 }}>
    <Grid container spacing={4} direction="row" justifyContent="center">
      <Grid item xs={10} sm={8} lg={6}>
        <Product
          title={infoSiteParams["product-1-title"].content}
          image="product-1.jpg"
          videoUrl="ZSdgSVyV5Jg"
          legend={infoSiteParams["product-1-legend"].content}
          howItWorks={infoSiteParams["product-1-how-it-works"].content}
        />
      </Grid>

      <Grid item xs={10} sm={8} lg={6}>
        <Product
          title={infoSiteParams["product-2-title"].content}
          image="product-2.webp"
          videoUrl="bExHfIQGisM"
          legend={infoSiteParams["product-2-legend"].content}
          howItWorks={infoSiteParams["product-2-how-it-works"].content}
        />
      </Grid>
    </Grid>
  </Container>
);

export default Products;
