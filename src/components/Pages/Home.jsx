import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../animations/index";
import React from "react";

import "./Home.css";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <motion.div variants={animationOne} transition={transition}>
      <div className="Hero-img">
        <div className="Hero-Capture">
          <h1>Relax With Our Lastest Candles We Have Right Now</h1>
          <motion.div className="button-outline">
            <Link to="/shop">
              <motion.button
                className="button"
                animate={{
                  x: 10,
                  y: -10,
                }}
                whileTap={{ x: 0, y: 0, scale: 0.9 }}
                whileHover={{
                  x: 0,
                  y: 0,
                  backgroundColor: "#f7e9f7",
                  color: "#000",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p>Shop Now</p>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      <Row>
        <Col md style={{ padding: 0, overflow: "hidden" }}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="Block-1"
            href="/shop"
          >
            <h2>Candles</h2>
          </motion.a>
        </Col>
        <Col md style={{ padding: 0, overflow: "hidden" }}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="Block-2"
            href="/featured-items"
          >
            <h2>Feature Items</h2>
          </motion.a>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Home;
