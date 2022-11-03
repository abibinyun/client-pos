import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer className="footer">{`Copyright © Muhammad bilal ${year}`}</footer>;
};

export default Footer;
