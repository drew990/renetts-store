import "./App.css";
import Product from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import { commerce } from "./lib/commerce";
import { motion } from "framer-motion";
import { animationOne, transition } from "./animations/index";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Shop from "./components/Pages/Shop/Shop";
import Footer from "./components/Footer/Footer";
import UnderConstruction from "./components/UnderConstruction";
//import FeatureItems from "./components/Pages/FeatureItems/FeatureItems";
import Contact from "./components/Pages/Contact/contact";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

function App() {
  const [products, setProducts] = useState([]);
  //const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  /*
  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();

    setCategories(data);
  };*/

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    //fetchCategories();
  }, []);

  console.log(cart);

  return (
    <Router>
      <div style={{ overflowX: "hidden" }}>
        <ScrollToTop />
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <motion.div variants={animationOne} transition={transition}>
              <Home />
              <Product products={products} onAddToCart={handleAddToCart} />
            </motion.div>
          </Route>
          <Route exact path="/shop">
            <Shop />
            <Product products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/featured-items">
            <UnderConstruction />
            {/*            <FeatureItems
              categories={categories}
              products={products}
              onAddToCart={handleAddToCart}
            /> */}
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
