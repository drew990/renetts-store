import React from "react";

function FeatureItem({ product, onAddToCart }) {
  return (
    <div>
      <h1>{product.price.formatted_with_symbol}</h1>
    </div>
  );
}

export default FeatureItem;
