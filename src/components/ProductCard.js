import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  flex: {
    display: "flex"
  },
  productCardContent: {
    display: "flex",
    padding: 0
  },
  productCard: {
    marginBottom: "1vw"
  },
  topProductCard: {
    marginBottom: "1vw",
    backgroundColor: "#FFE7BD"
  },
  productImage: {
    left: 0,
    top: 0,
    bottom: 0
  },
  priceAndAmount: {
    color: "#00000099",
    display: "flex ",
    fontSize: "12px"
  },
  productName: {
    paddingBottom: "1.5vw"
  },
  amountSold: {
    marginLeft: "1vw"
  }
}));

const ProductCard = props => {
  let classes = useStyles();

  return (
    <Card className={props.top ? classes.topProductCard : classes.productCard}>
      <CardContent
        className={classes.productCardContent}
        style={{ paddingBottom: 0 }}
      >
        <img alt="Product" src={props.image} className={classes.productImage} />
        <Container>
          <Typography className={classes.productName}>
            {props.productName}
          </Typography>
          <Typography className={classes.priceAndAmount}>
            <div>Rp {props.price}</div>
            <div className={classes.amountSold}>{props.amountSold}</div>
          </Typography>
        </Container>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
