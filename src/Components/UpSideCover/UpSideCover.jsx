import { Container, Typography, Box } from "@mui/material";
import React from "react";

const UpSideCover = () => {
  return (
    <Container maxWidth="lg" className="h-screen">
      <Box className="m-20 p-20">
        <Box>
          <h1 className="text-headStrong text-[53px] font-bold capitalize tracking-wide leading-tight">
            SISINDRI SINGAMSETTI
          </h1>
          <h1 className="text-5xl font-bold capitalize tracking-wide leading-tight">
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
