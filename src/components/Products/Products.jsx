import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

export default function Products({ products, onAddToCart }) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Grid container justify="center" spacing={4} className={classes.toolbar}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
