import styled from "styled-components";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { Fragment, useState } from "react";

const EqualHeightCard = styled(Card)`
  height: 100%;
`;

const ProductImage = styled.img`
  width: 100%;
`;

const Product = ({ title, image, videoUrl, legend, howItWorks }) => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  return (
    <EqualHeightCard>
      <ProductImage src={`img/${image}`} />
      {/* <iframe
      width="560"
      height="315"
      src={`https://www.youtube-nocookie.com/embed/${videoUrl}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      ></iframe> */}

      <Box p={2}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body1">{legend}</Typography>
        <br />
        <Button
          variant="contained"
          onClick={() => setShowFullInfo(!showFullInfo)}
        >
          Learn more
        </Button>
        {showFullInfo && (
          <Fragment>
            <br />
            <br />
            <Typography variant="h5">How it works</Typography>
            <ol>
              {howItWorks
                .split("\n")
                .map((string) =>
                  <li><Typography>{string}</Typography></li>
              )}
            </ol>
          </Fragment>
        )}
      </Box>
    </EqualHeightCard>
  );
};

export default Product;
