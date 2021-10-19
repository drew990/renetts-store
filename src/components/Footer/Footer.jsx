import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "5vh 10vw",
      }}
    >
      <h4>© 2021 RCBrillance</h4>

      <p>
        <a
          href="https://andrewbanagas.com/"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Made by Andrew Banagas
        </a>
      </p>
    </div>
  );
};

export default Footer;
