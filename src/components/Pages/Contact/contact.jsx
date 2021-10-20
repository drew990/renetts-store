import React from "react";
import "./contact.css";
import { Form, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../../animations";

const contact = () => {
  return (
    <motion.div
      className="Contact-Style"
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Row>
        <Col lg md>
          <div>
            <h1 className="Center">Contact Page </h1>
            <Form
              name="contact"
              method="post"
              data-netlify="true"
              onSubmit="submit"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <input type="hidden" name="form-name" value="contact" />
              <Form.Group className="mb-3">
                <Form.Label className="Form-P">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="Form-P">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  id="email"
                  name="email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="Form-P">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  id="message"
                  name="message"
                  placeholder="Message goes here"
                  required
                />
              </Form.Group>
              <div className="Center Padding-1">
                <motion.button
                  style={{
                    border: "1px solid black",
                    backgroundColor: "transparent",
                    padding: "2vh 2vw",
                  }}
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  type="submit"
                >
                  Submit
                </motion.button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default contact;
