import React from "react";
import { CardContent, CardActions, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { Image } from "react-bootstrap";

const Product = ({ product, onAddToCart }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <Image
          rounded
          style={{ maxHeight: "400px", maxWidth: "100%" }}
          src={product.image.url}
          alt={product.name}
        />
      </div>
      <CardContent>
        <h3>{product.name}</h3>
        <h4>{product.price.formatted_with_symbol}</h4>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="p"
          style={{ color: "#000" }}
        />
      </CardContent>
      <CardActions>
        <motion.button
          style={{
            backgroundColor: "#f7e9f7",
            border: "1.75px solid black",
            padding: "16px 16px",
            width: "50%",
            margin: "0 auto",
          }}
          whileHover={{
            scale: 1.15,
            backgroundColor: "#fff",
            color: "#000",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={() => onAddToCart(product.id, 1)}
        >
          Add to Cart
        </motion.button>
      </CardActions>
    </div>
  );
};

export default Product;
