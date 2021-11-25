import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-info text-white text-uppercase fixed-bottom p-2"
    >
      GitHub Repose Made with ❤️
      <SocialIcon
        url="https://www.instagram.com/ayushk1998/"
        target="_blank"
      ></SocialIcon>
    </Container>
  );
};

export default Footer;
