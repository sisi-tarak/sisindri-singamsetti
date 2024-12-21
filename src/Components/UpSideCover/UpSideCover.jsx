import { Container, Typography, Box } from "@mui/material";
import React from "react";

const UpSideCover = () => {
  return (
    <Container
      maxWidth="lg"
      className="mb-8 xs:mb-12 sm:mb-16 md:mb-24 lg:mb-44"
    >
      <Box className="m-4 sm:m-6 md:m-10 lg:m-20 p-8 xs:p-10 sm:p-12 md:p-16 lg:p-20">
        <Box>
          <h1 className="text-headStrong text-[30px] xs:text-[35px] sm:text-[40px] md:text-[45px] lg:text-[53px] font-bold capitalize tracking-wide leading-tight">
            SISINDRI SINGAMSETTI
          </h1>
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize tracking-wide leading-tight">
            CODING, SOLVING &<div>INSPIRING</div>
          </h1>
        </Box>
        <Box className="mt-10">
          <p className="text-textColor mt-10 text-base font-normal">
            Dive into my world of code, scalable solutions, debugging
            adventures, late-night coffee fixes, and building the web of
            tomorrow.
          </p>
        </Box>
      </Box>
    </Container>
  );
};

export default UpSideCover;
