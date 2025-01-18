import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container
      maxWidth="lg"
      className="h-screen flex flex-col justify-center align-middle gap-y-5"
    >
      <h1 className="flex flex-col gap-y-3 text-headColor text-center tracking-widest text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase mb-4 mx-auto ">
        <span className="text-headStrong font-semibold">404</span>{" "}
        <span>Not Found</span>
      </h1>
      <p className="text-secondaryTextColor text-center tracking-widest text-sm">
        Page not found.{"  "}
        <span className="text-center tracking-widest text-sm mt-10">
          <a href="/" className="text-textStrong hover:text-textStrong">
            Go back to home
          </a>
        </span>
      </p>
    </Container>
  );
};

export default NotFound;
