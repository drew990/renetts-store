import React from "react";
import { Image } from "react-bootstrap";
import { motion } from "framer-motion";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Image
        rounded
        src={item.image.url}
        style={{ maxHeight: "400px", maxWidth: "100%" }}
      />
      <div style={{ paddingTop: "16px" }}>
        <h4>{item.line_total.formatted_with_symbol}</h4>

        <h4>{item.name}</h4>
      </div>
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignContent: "space-evenly",
            padding: "2vh 0",
          }}
        >
          <button
            style={{ border: "none", backgroundColor: "transparent" }}
            onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
          >
            <motion.h4 whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
              -
            </motion.h4>
          </button>
          <h3>{item.quantity}</h3>
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
            }}
            onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
          >
            <motion.h4 whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
              +
            </motion.h4>
          </button>
        </div>
      </>
      <motion.button
        onClick={() => onRemoveFromCart(item.id)}
        style={{
          border: "1px solid black",
          backgroundColor: "transparent",
          width: "100%",
        }}
        whileHover={{
          scale: 1.15,
          backgroundColor: "#fff",
          color: "#000",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <p>Remove</p>
      </motion.button>
    </div>
  );
};

export default CartItem;
