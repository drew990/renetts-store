import React from "react";
import { Carousel, CarouselItem, Row, Col, Image } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import "./FeatureItems.css";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../../animations/index";

function FeatureItems({ onAddToCart, categories }) {
  return (
    <motion.div
      className="featureItems-Style"
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <h1 style={{ paddingBottom: "5vh" }}>Feature Items</h1>

      {categories.map((category) => {
        return (
          <div>
            {category.id === "cat_zkK6oL4J1oXn0Q" && (
              <Carousel variant="dark" indicators={false} interval={5000}>
                {category.productsData.map((product) => (
                  <CarouselItem>
                    <Row
                      style={{
                        width: "100%",
                        margin: "0 auto",
                      }}
                    >
                      <Col
                        lg={6}
                        xs={10}
                        style={{ margin: "0 auto", textAlign: "center" }}
                      >
                        <Image
                          rounded
                          style={{ maxHeight: "400px", maxWidth: "100%" }}
                          alt={product.name}
                          src={product.image.url}
                        />
                      </Col>
                      <Col
                        lg={6}
                        xs={10}
                        style={{ margin: "0 auto", textAlign: "center" }}
                      >
                        <h2>{product.name} </h2>
                        <h3>{product.price.formatted_with_symbol}</h3>
                        <div
                          style={{
                            border: "1px solid black",
                            borderRadius: "5rem",
                            marginBottom: "3vh",
                          }}
                        />
                        <Typography
                          dangerouslySetInnerHTML={{
                            __html: product.description,
                          }}
                          variant="p"
                          style={{ color: "#000" }}
                        />
                        <motion.button
                          style={{
                            backgroundColor: "#f7e9f7",
                            border: "1.75px solid black",
                            padding: "16px 16px",
                            width: "50%",
                            margin: "2vh auto",
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
                      </Col>
                    </Row>
                  </CarouselItem>
                ))}
              </Carousel>
            )}
          </div>
        );
      })}
    </motion.div>
  );
}
/*

*/

export default FeatureItems;
