import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "./Cart.css";
import { motion } from "framer-motion";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <div
      style={{
        minHeight: "80vh",
        marginTop: "64px",
        textAlign: "center",
        paddingTop: "30vh ",
      }}
    >
      <h2>
        Your cart is empty :( <br />
        <Link to="/" className={classes.link}>
          Go Back
        </Link>
      </h2>
    </div>
  );

  const FilledCart = () => (
    <Row className="Cart-Style" style={{ marginTop: "64px " }}>
      <Col
        lg={{ span: 8, order: 1 }}
        xs={{ span: 10, order: 2 }}
        style={{ margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            paddingTop: "5vh",
            paddingBottom: "5vh",
          }}
        >
          Your Shopping Cart
        </h2>
        <div className="Divider-Shop" />
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem
                item={item}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
              />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}></div>
      </Col>
      <Col
        sm={{ span: 4, order: 2 }}
        xs={{ span: 10, order: 1 }}
        style={{ textAlign: "center", margin: "0 auto" }}
      >
        <h4 style={{ paddingTop: "10vh" }}>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </h4>
        <div>
          <motion.button
            style={{
              border: "1px solid black",
              backgroundColor: "transparent",
              width: "70%",
              margin: " 2vh 0",
            }}
            whileHover={{
              scale: 1.15,
              backgroundColor: "#fff",
              color: "#000",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={handleEmptyCart}
          >
            <p>Empty Cart</p>
          </motion.button>
          <Link to="/checkout">
            <motion.button
              style={{
                border: "1px solid black",
                backgroundColor: "transparent",
                width: "70%",
                margin: " 2vh 0",
              }}
              whileHover={{
                scale: 1.15,
                backgroundColor: "#fff",
                color: "#000",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p>Checkout</p>
            </motion.button>
          </Link>
        </div>
      </Col>
    </Row>
  );

  if (!cart.line_items)
    return (
      <div
        style={{
          minHeight: "80vh",
          backgroundColor: "#f7e9f7",
          padding: "40vh 40vw",
          textAlign: "center",
        }}
      >
        <h1 animate="">loading...</h1>
      </div>
    );

  return <>{!cart.line_items.length ? <EmptyCart /> : <FilledCart />}</>;
};

export default Cart;
