import React from "react";
import { IconButton, Badge } from "@material-ui/core";
import { Navbar, Nav, Container } from "react-bootstrap";
//import { motion } from "framer-motion";
import "./Navbar.css";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import useStyles from "./styles";

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Navbar
      style={{
        boxShadow: "0px 5px 100px rgba(0,0,0,0.3)",
        textAlign: "center",
      }}
      fixed="top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={Logo}
              alt="Renett's Store"
              className="Nav-img"
              style={{ margin: 0 }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                to="/shop"
                className="animation-Hover"
                style={{ color: "#000", textDecoration: "none" }}
              >
                <p>Shop</p>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/featured-items"
                style={{ color: "#000", textDecoration: "none" }}
              >
                <p>Feature Items</p>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/contact"
                style={{ color: "#000", textDecoration: "none" }}
              >
                <p>Contact</p>
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              {(location.pathname === "/" ||
                location.pathname === "/shop" ||
                location.pathname === "/featured-items" ||
                location.pathname === "/contact") && (
                <div className={classes.button}>
                  <IconButton
                    component={Link}
                    to="/cart"
                    aria-label="Show Cart Items"
                    color="inherit"
                  >
                    <Badge badgeContent={totalItems} color="secondary">
                      <ShoppingCart />
                    </Badge>
                  </IconButton>
                </div>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
