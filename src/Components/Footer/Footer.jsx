import { Container } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="py-24 bg-footerBgColor">
      <Container
        maxWidth="lg"
        className="grid grid-flow-row grid-cols-1 lg:grid-cols-3"
      >
        <h1 className="text-headColor text-center tracking-wide text-5xl font-semibold uppercase mb-4 mx-auto pt-10">
          Projects
        </h1>
        <h1 className="text-headColor text-center tracking-wide text-5xl font-semibold uppercase mb-4 mx-auto pt-10">
          Projects
        </h1>
        <h1 className="text-headColor text-center tracking-wide text-5xl font-semibold uppercase mb-4 mx-auto pt-10">
          Projects
        </h1>
      </Container>
    </div>
  );
};

export default Footer;
