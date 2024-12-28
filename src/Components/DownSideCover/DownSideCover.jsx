import React from "react";
import { Container } from "@mui/material";

const DownSideCover = () => {
  return (
    <Container
      maxWidth="lg"
      className="h-screen flex flex-col justify-center align-middle"
    >
      <h1 className="text-headColor text-center tracking-wide text-5xl font-semibold uppercase mb-4 mx-auto ">
        DownSide
      </h1>
      <p className="text-secondaryTextColor text-center tracking-widest text-sm">
        Read more about my downside projects & activities below.
      </p>
    </Container>
  );
};

export default DownSideCover;
