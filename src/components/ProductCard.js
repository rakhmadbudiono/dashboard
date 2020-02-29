import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  flex: {
    display: "flex"
  },
  productCardContent: {
    display: "flex"
  },
  productCard: {
    marginBottom: "1vw"
  }
}));

const ProductCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.productCard}>
      <CardContent className={classes.productCardContent}>
        <img alt="Product" src={props.image} />
        <Container>
          <Typography>{props.productName}</Typography>
          <Container className={classes.flex}>
            <Typography>Rp {props.price}</Typography>
            <Typography>{props.amountSold}</Typography>
          </Container>
        </Container>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
