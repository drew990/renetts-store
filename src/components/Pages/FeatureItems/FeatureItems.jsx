import React from "react";
import { Carousel } from "react-bootstrap";
import "./FeatureItems.css";
//import FeatureItem from "./FeatureItem/FeatureItem";

function FeatureItems({ products, onAddToCart, categories }) {
  return (
    <div className="featureItems-Style">
      <Carousel>
        {products.map((product) => (
          <Carousel.Item item key={product.id}>
            <h1>Name - {product.categories.name}</h1>
            {/*<FeatureItem product={product} onAddToCart={onAddToCart} />*/}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default FeatureItems;
